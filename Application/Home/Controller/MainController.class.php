<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\Upload;
use Org\Util\Image;
use Think\Controller;

class MainController extends CommonController {

      
    /*
     *
     *得到用户信息
     *
     */
    
     public function getuser(){
       $u_id = 1;
       $user['user'] = D('user')->getuserdatabyuid($u_id);
       $this->json(1,'ok',$user);
     }
     
    /*
     *
     *得到每个民族和对应风景区及评分
     *
     */

     public function gettouristandnation(){
      $nation = M('nation')->select();
      $res = array();
      foreach ($nation as $key => $value) {
        $data['nation_id'] = $value['n_id'];
        $data['nation_name'] = $value['n_name'];
        $data['touristarealist'] = M('touristarea')->where('n_id='.$value['n_id'])->select();
        foreach($data['touristarealist'] as &$tour){
            $scorelist = array();
            $scorearray = M('h_go')->where('t_id='.$tour['t_id'])->field('score')->select();
            // print_r($scorearray);
            foreach($scorearray as $s){
              array_push($scorelist,$s['score']);
            }
            if(empty($scorelist)){
              $avgscore = 0.0;
            }else{
              $avgscore = sprintf("%.1f",array_sum($scorelist)/count($scorelist));
            }
            // echo $avgscore;
            $tour['avgscore'] = $avgscore;
            // print_r($tour);
        }
        // $data['touristarealist'] = $touristarealist;
        array_push($res,$data); 
      }
      // print_r($res);
      $this->json(1,'ok',$res);
    }
  
    /*
     *
     *批量增加菜单
     *
     */
    
    public function addmenu(){
       $menulist = I('post.menulist');
       $id['menu_id'] = '';
       foreach ($menulist as $key => $value) {
          $data = array(
             'menu_type' => $value['menu_type'],
             'menu_content' => $value['menu_content'],
             'menu_title' => $value['menu_title'],
             'menu_imgurl' => $value['menu_imgurl'],
             't_id' => $value['t_id'],
          );
          $id['menu_id'] = $id['menu_id'].M('menu')->add($data).',';
       }
       $this->json(1,'ok',$id);
    }

    /*
     *
     *通过菜单ID得到菜单内容
     *
     */
    
    public function getmenubymenuid(){
      $menu_id = $_GET['menu_id'];
      $onemenu['onemenu'] = M('menu')->where('menu_id='.$menu_id)->find();
      $this->json(1,'ok',$onemenu);
    }

    /*
     *
     *管理员更新菜单
     *
     */
    
    public function adminupdatemenu(){
      $menu = I('post.menu');
      $data = array(
        'menu_title' => $menu['menu_title'],
        'menu_content' => $menu['menu_content'],
        'menu_imgurl' => $menu['menu_imgurl'],   
        );
      M('menu')->where('menu_id='.$menu['menu_id'])->save($data);
      $this->json(1,'ok');
    } 

    /*
     *
     *搜索菜单
     *
     */
    
    public function searchmenu(){
       $type = $_GET['type'];
       $keyword = '%'.$_GET['keyword'].'%';
       $curr = intval($_GET['page']);
       $pagesize = 4;
       $currnum = ($curr-1)*$pagesize;
       $arr = array();
       $humanitiestype = ['custom','history','dress','artwork'];
       $Model = new \Think\Model();
       if ($type == 'humanities') {
       	
       	foreach ($humanitiestype as $key => $value) {
       		$tmparr = array();
       		$tmparr = $Model->query("select * from menu where menu_type = '{$value}' and menu_content like '{$keyword}' order by menu_id asc");
       		// print_r($tmparr);
       		$arr = array_merge($arr,$tmparr);
       	}
       	       		print_r($arr);
       	  
       }else{
       	   $arr = $Model->query("select * from menu where menu_type = '{$type}' and menu_content like '{$keyword}' order by menu_id asc");
       	   // print_r($arr);
       }
       $menunum = count($arr);
       // echo $menunum;
       $res['menu'] = array_slice($arr,$currnum,$pagesize);
       $res['totalnum']  = intval(($menunum+$pagesize-1)/$pagesize);
       $this->json(1,'ok',$res);
    }

    /*
     *
     *搜索旅游区
     *
     */
    
    public function searchtouristarea(){
    	$nationname = $_GET['nationname'];
    	$curr = intval($_GET['page']);
    	$pagesize = 4;
        $currnum = ($curr-1)*$pagesize;
    	$Model = new \Think\Model(); 
    	$arr = $Model->query("select touristarea.* from touristarea,nation where nation.n_id = touristarea.n_id and n_name = '{$nationname}'");
    	$tournum = count($arr);
    	$res['touristarea'] = array_slice($arr,$currnum,$pagesize);
    	$res['totalnum'] = intval(($tournum+$pagesize-1)/$pagesize);
    	$this->json(1,'ok',$res);

    }
    
    /*
     *
     *搜索游记
     *
     */
    
    public function searcharticle(){
      $keyword = '%'.$_GET['keyword'].'%';
      $curr = intval($_GET['page']);
	    $pagesize = 4;
	    $currnum = ($curr-1)*$pagesize;
	    $Model = new \Think\Model();
	    $arr = $Model->query(("select * from article where a_content like '{$keyword}'"));
	    $articlenum = count($arr);
	    $res['article'] = array_slice($arr,$currnum,$pagesize);
	    $res['totalnum'] = intval(($articlenum+$pagesize-1)/$pagesize);
	    $this->json(1,'ok',$res); 
    }
    
    /*
     *
     *列出景区所有游记
     *
     */
    
    public function getarticlebytid(){
      $t_id = intval($_GET['t_id']);
      $curr = intval($_GET['page']);
      $pagesize = 8;
      $currnum = ($curr-1)*$pagesize;
      $arr  = D('article')->getArticleBytid($t_id);
      $articlenum = count($arr);
      $res['article'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum'] = intval(($articlenum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
    }
    
    /*
     *
     *列出用户所有游记
     *
     */
    
    public function getarticlebyuid(){
      $u_id = 1;
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $arr  = D('article')->getArticleByuid($u_id);
      $articlenum = count($arr);
      $res['article'] = array_slice($arr,$currnum,$pagesize);
      $res['articlenum'] = $articlenum;
      $res['totalnum'] = intval(($articlenum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
    }
    
    /*
     *
     *添加游记
     *
     */
    
    public function addarticle(){
      // $body  = $GLOBALS['HTTP_RAW_POST_DATA'];
      // echo $body;
      // $arr = json_decode($body,true);

      // echo $arr;
      // $a_title =  $arr['a_title'];
      // echo $a_title;
     // $a_content['a_content'] = $_POST['a_content'];
     // $this->json(1,'ok',$a_content);
     $data = array(
      'a_title' => I('post.a_title'),
      'a_content' => I('post.a_content'),
      'a_cover' =>I('post.a_cover'),
      'a_zan' => 0,
      'browse_num' =>0,
      'timestamp' => time(),
      'u_id' => 1,
      't_id' => intval(I('post.t_id')),
      );
     $id['a_id'] = M('article')->add($data);
     $this->json(1,'ok',$id);
    }

    /*
     *
     *删除游记
     *
     */
    
    public function removearticle(){
      $a_id = intval($_GET['a_id']);
      M('article')->where('a_id='.$a_id)->delete();
      $this->json(1,'ok');
    }
    
    /*
     *
     *列出用户所有草稿
     *
     */

     public function getdraftbyuid(){
       $u_id = 1;
       $curr = intval($_GET['page']);
       $pagesize = 4;
       $currnum = ($curr-1)*$pagesize;
       $arr = M('draft')->where('u_id='.$u_id)->select();
       $draftnum = count($arr);
       $res['draft'] = array_slice($arr,$currnum,$pagesize);
       $res['draftnum'] = $draftnum;
       $res['totalnum'] = intval(($draftnum+$pagesize-1)/$pagesize);
       $this->json(1,'ok',$res);
     }

    /*
     *
     *添加草稿
     *
     */

    public function adddraft(){
      $data = array(
        'd_title' => I('post.d_title'),
        'd_content' => I('post.d_content'),
        'd_cover' =>I('post.d_cover'),
        'timestamp' => time(),
        'u_id' => 1,
        't_id' => intval(I('post.t_id')),
        );
        $id['d_id'] = M('draft')->add($data);
        $this->json(1,'ok',$id);
    }
    
    /*
     *
     *更新草稿
     *
     */
     
     public function updatedraft(){
       $d_id = I('post.d_id');
       $data = array(
        'd_title' => I('post.d_title'),
        'd_content' => I('post.d_content'),
        'd_cover' =>I('post.d_cover'),
        'timestamp' => time(),
       );
       M('draft')->where('d_id='.$d_id)->save($data);
       $this->json(1,'ok');
      }

    /*
     *
     *删除草稿
     *
     */

     public function deletedraft(){
       $d_id = $_GET['d_id'];
       M('draft')->where('d_id='.$d_id)->delete();
       $this->json(1,'ok');
     }

    /*
     *
     *列出用户收藏游记
     *
     */

     public function getcollectarticle(){
       $u_id = 1;
       $curr = intval($_GET['page']);
       $pagesize = 2;
       $currnum = ($curr-1)*$pagesize;
       $arr = D('user')->getcollectarticle($u_id);
       $articlenum = count($arr);
       $res['article'] = array_slice($arr,$currnum,$pagesize);
       $res['articlenum'] = $articlenum;
       $res['totalnum'] = intval(($articlenum+$pagesize-1)/$pagesize);
       $this->json(1,'ok',$res);
     }

    /*
     *
     *删除用户收藏游记
     *
     */

     public function deletecollect(){
       $u_id = 1;
       $a_id = $_GET['a_id'];
       M('collect')->where('a_id='.$a_id.' and u_id='.$u_id)->delete();
       $this->json(1,'ok');
     } 
      
    /*
     *
     *点赞
     *
     */
    
    public function addarticlezan(){
     $a_id = $_GET['a_id'];
     M('article')->where('a_id='.$a_id)->setInc('a_zan');
     $zannum = M('article')->where('a_id='.$a_id)->field('a_zan')->find();
     $this->json(1,'ok',$zannum);
    }
    
    /*
     *
     *取消赞
     *
     */
    
    public function cancelarticlezan(){
     $a_id = $_GET['a_id'];
     M('article')->where('a_id='.$a_id)->setDec('a_zan');
     $zannum = M('article')->where('a_id='.$a_id)->field('a_zan')->find();
     $this->json(1,'ok',$zannum);
    }
    
    /*
     *
     *添加浏览次数
     *
     */
    
    public function addarticlebrowsenum(){
      $a_id = $_GET['a_id'];
      M('article')->where('a_id='.$a_id)->setInc('browse_num');
      $browse_num = M('article')->where('a_id='.$a_id)->field('browse_num')->find();
      $this->json(1,'ok',$browse_num);
    }

    /*
     *
     *得到用户想去的景区
     *
     */
    
    public function getw_gotourist(){
      $curr = intval($_GET['page']);
      $u_id = 1;
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $arr = D('user')->getw_gotouristByuid($u_id);
      $tournum = count($arr);
      $res['touristarea'] = array_slice($arr,$currnum,$pagesize);
      $res['tournum'] = $tournum;
      $res['totalnum'] = intval(($tournum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
    }

    /*
     *
     *删除用户想去的景区
     *
     */
    
    public function removew_gotourist(){
      $u_id = 1;
      $t_id = $_GET['t_id'];
      M('w_go')->where('t_id='.$t_id.' and u_id = '.$u_id)->delete();
      $this->json(1,'ok');
    }

    /*
     *
     *得到用户去过的景区
     *
     */
    
    public function geth_gotourist(){
      $curr = intval($_GET['page']);
      $u_id = 1;
      $pagesize = 6;
      $currnum = ($curr-1)*$pagesize;
      $arr = D('user')->geth_gotouristByuid($u_id);
      $tournum = count($arr);
      $res['touristarea'] = array_slice($arr,$currnum,$pagesize);
      $res['tournum'] = $tournum;
      $res['totalnum'] = intval(($tournum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
    }
     
    /*
     *
     *删除用户去过的景区
     *
     */
    
    public function removeh_gotourist(){
      $u_id = 1;
      $t_id = $_GET['t_id'];
      M('h_go')->where('t_id='.$t_id.' and u_id='.$u_id)->delete();
      $this->json(1,'ok');
    }

    /*
     *
     *更新用户对景区的评价
     *
     */

     public function updatescore(){
       $u_id = 1;
       $t_id = $_GET['t_id'];
       $score = $_GET['score'];  
       $data = array(
         "score" => $score,
       );
       M('h_go')->where('t_id='.$t_id.' and u_id='.$u_id)->save($data);
       $this->json(1,'ok');
    }
}