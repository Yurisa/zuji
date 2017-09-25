<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\Upload;
use Org\Util\Image;
use Think\Controller;

class MainController extends CommonController {

  /**
   *
   * 统计数目
   *
   */

   public function countnum(){
     $res['usernum'] = M('user')->count();
     $res['nationnum'] = M('nation')->count();
     $res['touristareanum'] = M('touristarea')->count();
     $res['articlenum'] = M('article')->count();
     $this->json(1,'ok',$res);
   }

   public function getprovince(){
     $res['province'] = M('province')->select();
     $this->json(1,'ok',$res);
   }

   public function getnation(){
    $res['nation'] = M('nation')->select();
    $this->json(1,'ok',$res);
  }

  public function getnationbypid(){
    $p_id = $_GET['p_id'];
    $res['nation'] = M('nation')->where('p_id='.$p_id)->select();
    $this->json(1,'ok',$res);
  }
  
  public function getareabynid(){
    $n_id = $_GET['n_id'];
    $res['area'] = M('touristarea')->where('n_id='.$n_id)->select();
    $this->json(1,'ok',$res);
  }
    /*
     *
     *得到用户信息
     *
     */
    
     public function getuser(){
       $u_id = session('user.id');
       if(!empty($u_id)){
        $user['user'] = D('user')->getuserdatabyuid($u_id);
        $this->json(1,'ok',$user);
       }else{
         $this->json(0,'未登录');
       }
     }

    /*
     *
     *得到用户列表
     *
     */

     public function getuserlist(){
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
       $arr = M('user')->select();
       foreach($arr as $key => &$value){
         $value['articlenum'] = M('article')->where('u_id='.$value['u_id'])->count();
       }
       $usernum = count($arr);
       $res['user'] = array_slice($arr,$currnum,$pagesize);
       $res['totalnum']  = intval(($usernum+$pagesize-1)/$pagesize);
       $this->json(1,'ok',$res);
     }

    /*
     *
     *得到用户列表
     *
     */

     public function getarticlebylist(){
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $Model = new \Think\Model();
      $arr = $Model->query("select article.*,user.u_name,touristarea.t_name,nation.n_name from article,user,touristarea,nation where article.u_id = user.u_id and article.t_id = touristarea.t_id and touristarea.n_id = nation.n_id ");
      $articlenum = count($arr);
      $res['article'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum']  = intval(($articlenum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);

     }

    /*
     *
     *得到景区通过ID
     *
     */
    
     public function gettouristareabyid(){
       $t_id = $_GET['t_id'];
       $Model = new \Think\Model();
       $arr = $Model->query("select touristarea.t_id,touristarea.t_name,touristarea.t_renwen,touristarea.t_yinshi,touristarea.t_youji,touristarea.t_jianzhu,touristarea.t_cardimg, touristarea.longitude,touristarea.latitude,nation.n_id,nation.n_name,province.p_id,province.p_name from touristarea,nation,province where touristarea.n_id = nation.n_id and province.p_id = nation.p_id and touristarea.t_id = '{$t_id}'");
       $res['touristarea'] = $arr[0];
       $res['custom'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"custom"))->select();
       $res['history'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"history"))->select();
       $res['dress'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"dress"))->select();
       $res['artwork'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"artwork"))->select();
       $res['building'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"building"))->select();
       $res['diet'] = M('menu')->where("t_id = %d and menu_type = '%s'",array($t_id,"diet"))->select();
       $this->json(1,'ok',$res);
     }

    /*
     *
     *得到每个民族和和游记数量
     *
     */

     public function getalltouristareabyarticlenum(){
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $Model = new \Think\Model();
      $flag = array(); 
      $arr = $Model->query("select touristarea.*,nation.n_name,province.p_name from touristarea,nation,province where province.p_id = nation.p_id and nation.n_id = touristarea.n_id");
      // $arr  = M('touristarea')->order('timestamp desc')->select();
      foreach($arr as $key => &$value){
        //  $value['articlenum'] = M('article')->where('t_id='.$value['t_id'])->count();
         $num = M('article')->where('t_id='.$value['t_id'])->count();
         $value['articlenum'] = $num;
      }
       
      
      foreach($arr as $v){  
        $flag[] = $v['articlenum'];  
      }  
     array_multisort($flag, SORT_DESC, $arr);  
      //  print_r($arr);
      $tournum = count($arr);
      $res['touristarea'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum']  = intval(($tournum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
     }

   /*
     *
     *得到每个民族和和游记数量
     *
     */
     public function getalltouristarea(){
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $Model = new \Think\Model();
      $arr = $Model->query("select touristarea.*,nation.n_name,province.p_name from touristarea,nation,province where province.p_id = nation.p_id and nation.n_id = touristarea.n_id order by touristarea.timestamp");
      // $arr  = M('touristarea')->order('timestamp desc')->select();
      foreach($arr as $key => &$value){
        //  $value['articlenum'] = M('article')->where('t_id='.$value['t_id'])->count();
         $num = M('article')->where('t_id='.$value['t_id'])->count();
         $value['articlenum'] = $num;
      }
      // print_r($arr);
      $tournum = count($arr);
      $res['touristarea'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum']  = intval(($tournum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
     }

    /*
     *
     *得到每个民族和对应风景区及评分
     *
     */

     public function updatetouristarea(){
      $tour = I('post.touristarea');
      $t_id = $tour['t_id'];
      $data = array(
         "t_name" => $tour['t_name'],
         "longitude" => $tour['longitude'],
         "latitude" => $tour['latitude'],
         "timestamp" => time(),
         "t_id" => $tour['t_id'],
      );
      if(!empty($tour['n_id'])){
        $data['n_id'] = $tour['n_id'];
      }
      if(isset($tour['t_renwen'])){
        $data["t_renwen"] = $tour['t_renwen'];
      }
      if(isset($tour['t_yinshi'])){
        $data["t_yinshi"] = $tour['t_yinshi'];
      }
      if(isset($tour['t_jianzhu'])){
        $data["t_jianzhu"] = $tour['t_jianzhu'];
      }
      if(isset($tour['t_youji'])){
        $data["t_youji"] = $tour['t_youji'];
      }
      if(isset($tour['t_cardimg'])){
        $data["t_cardimg"] = $tour['t_cardimg'];
      }
       $code = M('touristarea')->where('t_id='.$t_id)->save($data);
       $this->json(1,'ok');
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
        $data['color'] = $value['color'];
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
    
    public function addmenulist(){
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
     *用户批量增加菜单
     *
     */

     public function useraddmenu(){
       $menulist = I('post.menulist');
       foreach ($menulist as $key => $value) {
        $data = array(
           'mj_type' => $value['menu_type'],
           'mj_content' => $value['menu_content'],
           'mj_title' => $value['menu_title'],
           'mj_imgurl' => $value['menu_imgurl'],
           'mj_ispass'=>'待审核',
           'position' => $value['position'],
           't_id' => $value['t_id'],
           'u_id' =>1,
           'timestamp' => time(),
        );
        $id['mj_id'] = $id['mj_id'].M('menu_judge')->add($data).',';
     }
        $this->json(1,'ok',$id);
     }

    /*
     *
     *管理员单条添加菜单
     *
     */
 
    public function addmenu(){
      $menu = I('post.menu');
      $data = array(
        'menu_type' => $menu['menu_type'],
        'menu_content' => $menu['menu_content'],
        'menu_title' => $menu['menu_title'],
        'menu_imgurl' => $menu['menu_imgurl'],
        "timestamp"=>time(),
        't_id' => $menu['t_id'],
     );
     $id['menu_id'] = M('menu')->add($data);
     $this->json(1,'ok');
    }
    
    /*
     *
     *更新菜单
     *
     */

     public function updatemenu(){
       $menu = I('post.menu');
       $data = array(
        'menu_content' => $menu['menu_content'],
        'menu_title' => $menu['menu_title'],
        'menu_imgurl' => $menu['menu_imgurl'],
       );
       M('menu')->where('menu_id='.$menu['menu_id'])->save($data);
       $this->json(1,'ok');
     }
     
    /*
     *
     *通过景区ID和菜单类型得到菜单信息
     *
     */

     public function gettourmenu(){
      $t_id = $_GET['t_id'];
      $menu_type = $_GET['type'];
      $humanitiestype = ['custom','history','dress','artwork'];
      $arr = array();
      if($menu_type == 'humanities'){
        foreach ($humanitiestype as $key => $value) {
            $value = (string)$value;
            $tmparr = array();
            $tmparr =  M('menu')->where("t_id= %d and menu_type = '%s'",array($t_id,$value))->select();
            // print_r($tmparr);
            $arr = array_merge($arr,$tmparr);
        }
        // print_r($arr);
      }else{
            $arr = M('menu')->where("t_id= %d and menu_type = '%s'",array($t_id,$menu_type))->select();
      }
      $res['menu'] = $arr;
      $this->json(1,'ok',$res);
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
        );
        if(isset($menu['menu_imgurl'])){
          $data["menu_imgurl"] = $menu['menu_imgurl'];
        }
      M('menu')->where('menu_id='.$menu['menu_id'])->save($data);
      $this->json(1,'ok');
    } 


    /*
     *
     *管理员更新菜单
     *
     */

     public function admindeletemenu(){
       $menu_id = $_GET['menu_id'];
       M('menu')->where('menu_id='.$menu_id)->delete();
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
       	       		// print_r($arr);
       	  
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
	    $arr = $Model->query(("select article.*,user.u_name,user.u_id from article,user where article.u_id = user.u_id and article.a_content like '{$keyword}'"));
      $articlenum = count($arr);
      // echo $articlenum;
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
      $u_id = session('user.id');
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
     *通过ID得到游记
     *
     */

     public function getarticlebyaid(){
       $a_id = $_GET['a_id'];
       $res['article'] = D('article')->getArticleByaid($a_id);
      //  echo (strip_tags($res['article'][0]['a_content']));
       $res['article'][0]['collectnum'] = M('collect')->where('a_id='.$a_id)->count();
       $this->json(1,'ok',$res);
     }

    /*
     *
     *通过ID得到游记
     *
     */
    
     public function getcommentbyaid(){
      $a_id = $_GET['a_id'];
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $arr = D('article')->getCommentByaid($a_id);
      $commentnum = count($arr);
      $res['comment']['commentlist'] = array_slice($arr,$currnum,$pagesize);
      $res['comment']['commentnum']  = $commentnum;
      $res['totalnum'] = intval(($commentnum+$pagesize-1)/$pagesize);
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
      'a_content' => html_entity_decode(I('post.a_content')),
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
       $u_id = session('user.id');
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

     public function getonedraftbydid(){
       $d_id = $_GET['d_id'];
       $res['onedraft'] = M('draft')->where('d_id='.$d_id)->select();
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
        'd_content' => html_entity_decode(I('post.d_content')),
        'd_cover' =>I('post.d_cover'),
        'timestamp' => time(),
        'u_id' => 1,
        );
        if(intval(I('post.t_id')) == -1){
          $data['t_id'] = 1;
        }else{
          $data['t_id'] = intval(I('post.t_id'));
        }
        $id['d_id'] = M('draft')->add($data);
        $id['time'] = $data['timestamp'];
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
        'd_content' => html_entity_decode(I('post.d_content')),
        'd_cover' =>I('post.d_cover'),
        'timestamp' => time(),
       );
       if(intval(I('post.t_id')) == -1){
        $data['t_id'] = 1;
      }else{
        $data['t_id'] = intval(I('post.t_id'));
      }
       M('draft')->where('d_id='.$d_id)->save($data);
       $this->json(1,'ok',$data['timestamp']);
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
       $u_id = session('user.id');
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
     *列出用户收藏游记
     *
     */

     public function getallcollectid(){
       $u_id = session('user.id');
       $res['a_idlist'] = M('collect')->where('u_id='.$u_id)->field('a_id')->select();
       $this->json(1,'ok',$res);
     }

    /*
     *
     *删除用户收藏游记
     *
     */

     public function addcollect(){
      $a_id = $_GET['a_id'];
      $u_id = session('user.id');
      M('collect')->add(array('u_id'=>$u_id,'a_id'=>$a_id));
      $this->json(1,'ok');
     }
     
    /*
     *
     *删除用户收藏游记
     *
     */

     public function deletecollect(){
       $u_id = session('user.id');
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
      $u_id = session('user.id');
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
      $u_id = session('user.id');
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
      $u_id = session('user.id');
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
      $u_id = session('user.id');
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
       $u_id = session('user.id');
       $t_id = $_GET['t_id'];
       $score = $_GET['score'];  
       $data = array(
         "score" => $score,
       );
       M('h_go')->where('t_id='.$t_id.' and u_id='.$u_id)->save($data);
       $this->json(1,'ok');
    }

    /*
     *
     *添加评论
     *
     */

     public function addcomment(){
       $data = array(
         "u_id" => 1,
         "a_id" =>I('post.a_id'),
         "c_content" => I('post.c_content'),
         "timestamp" => time(),
       );
       $res['c_id'] = M('comment')->add($data);
       $this->json(1,'ok',$res);
     }
     
    /*
     *
     *得到所有用户补充的菜单
     *
     */

     public function getallmenujudge(){
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $Model = new \Think\Model();
      $arr = $Model->query("select user.u_id,user.u_name,menu_judge.* from user,menu_judge where user.u_id = menu_judge.u_id and menu_judge.mj_ispass ='待审核'");
      $mjnum = count($arr);
      $res['menu_judge'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum'] = intval(($mjnum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);

    } 

         
    /*
     *
     *得到该景区所有用户补充的菜单
     *
     */

     public function getallmenujudgebytid(){
      $t_id = intval($_GET['t_id']);
      $curr = intval($_GET['page']);
      $pagesize = 4;
      $currnum = ($curr-1)*$pagesize;
      $Model = new \Think\Model();
      $arr = $Model->query("select user.u_id,user.u_name,menu_judge.* from user,menu_judge where user.u_id = menu_judge.u_id and menu_judge.mj_ispass ='待审核' and t_id = '{$t_id}'");
      $mjnum = count($arr);
      $res['menu_judge'] = array_slice($arr,$currnum,$pagesize);
      $res['totalnum'] = intval(($mjnum+$pagesize-1)/$pagesize);
      $this->json(1,'ok',$res);
     }
     
         
    /*
     *
     *通过审核
     *
     */

     public function menupass(){
       $mj_id = $_GET['mj_id'];
       M('menu_judge')->where('mj_id='.$mj_id)->save(array('mj_ispass'=>'通过'));
       $arr = M('menu_judge')->where('mj_id='.$mj_id)->field('mj_type,mj_title,mj_imgurl,mj_content,t_id')->find();
      //  print_r($arr);
       $data = array(
         'menu_type' => $arr['mj_type'],
         'menu_title' => $arr['mj_title'],
         'menu_imgurl'=> $arr['mj_imgurl'],
         'menu_content' => $arr['mj_content'],
         't_id' => $arr['t_id'],
         'timestamp' => time(),
       );
       M('menu')->add($data);
       $this->json(1,'ok');
      }

      
      /*
       *
       *审核失败
       *
       */

       public function menufail(){
         $mj_id= $_GET['mj_id'];
         M('menu_judge')->where('mj_id='.$mj_id)->save(array('mj_ispass'=>'通过'));
         $this->json(1,'ok');
       }

       
      /*
       *
       *用户想去
       *
       */

       public function addw_go(){
         $t_id = $_GET['t_id'];
         $u_id = session('user.id');
         if(!empty($u_id)){
          M('w_go')->add(array('u_id'=>$u_id,'t_id'=>$t_id));
          $this->json(1,'ok');
         }else{
           $this->json(0,'请先登录');
         }
       }
       
      /*
       *
       *用户去过
       *
       */

       public function addh_go(){
        $t_id = $_GET['t_id'];
        $u_id = session('user.id');
        if(!empty($u_id)){
          M('h_go')->add(array('u_id'=>$u_id,'t_id'=>$t_id));
          $this->json(1,'ok');
        }else{
          $this->json(0,'请先登录');
        }
      }

      /*
       *
       *得到用户想去景区ID
       *
       */

       public function getw_gotid(){
         $u_id = session('user.id');
         $res['t_idlist'] = M('w_go')->where('u_id='.$u_id)->select();
         $this->json(1,'ok',$res);
       }

       
      /*
       *
       *得到用户去过景区ID
       *
       */

       public function geth_gotid(){
        $u_id = session('user.id');
        $res['t_idlist'] = M('h_go')->where('u_id='.$u_id)->select();
        $this->json(1,'ok',$res);
      }

      /*
       *
       *得到用户的贡献
       *
       */

       public function getusercontribution(){
         $u_id = session('user.id');
         $curr = intval($_GET['page']);
         $pagesize = 4;
         $currnum = ($curr-1)*$pagesize;
         $arr = M('menu_judge')->where('u_id='.$u_id)->select();
         $mjnum = count($arr);
         $res['menu_judge'] = array_slice($arr,$currnum,$pagesize);
         $res['totalnum'] = intval(($mjnum+$pagesize-1)/$pagesize);
         $this->json(1,'ok',$res);
       }

      /*
       *
       *得到用户的消息
       *
       */

       public function getusermessage(){
         $u_id = session('user.id');
         $curr = intval($_GET['page']);
         $pagesize = 4;
         $currnum = ($curr-1)*$pagesize;
         $Model = new \Think\Model();
         $arr = $Model->query("select comment.*,user.*,article.* from comment,user,article where comment.u_id = user.u_id and article.a_id = comment.a_id and user.u_id='{$u_id}'");
         $comnum = count($arr);
         $res['commentlist'] = array_slice($arr,$currnum,$pagesize);
         $res['totalnum'] = intval(($commentnum+$pagesize-1)/$pagesize);
         $this->json(1,'ok',$res);
       }
      
      /*
       *
       *得到用户的消息
       *
       */

       public function deleteusercomment(){
         $c_id = $_GET['c_id'];
         M('comment')->where("c_id=".$c_id)->delete();
         $this->json(1,'ok');
       }

      /*
       *
       *检票
       *
       */

       public function checkinandout(){
         $personid = I('post.personid');
         $t_id = I('post.t_id');
         $currtime = intval(time());
         $beginToday = intval(mktime(0,0,0,date('m'),date('d'),date('Y')));
         $endToday=intval(mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1);
         if($beginToday < $currtime && $currtime < $endToday){
          $existid = M('todayperson')->where('person_id='.$personid)->select();
          // print_r($existid);
          // echo (count($existid));
          if(count($existid) == 0){
             $data = array(
               "person_id"=>$personid,
               "t_id"=>$t_id,
               "timestamp"=>$currtime,
             );
             M('todayperson')->add($data);
             $this->json(1,'checkin');
          }else{
            $data = array(
              "person_id"=>$existid[0]['person_id'],
              "t_id" => $t_id,
              "starttime" => $existid[0]['timestamp'],
              "endtime"=>$currtime,
            );
            M('historyperson')->add($data);
            M('todayperson')->where('person_id='.$personid)->delete();
            $this->json(1,'checkout');
          }
         }else{
           $this->json(0,'当前不是检票时间');
         } 
       }

      /*
       *
       *得到今日景区游客信息
       *
       */

       public function gettodayperson(){
        $t_id = $_GET['t_id'];
        $curr = $_GET['page'];
        $pagesize = 4;
        $currnum = ($curr-1)*$pagesize;
        $beginToday = intval(mktime(0,0,0,date('m'),date('d'),date('Y')));
        $endToday=intval(mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1);
        $arr = M('todayperson')->join('people ON people.person_id = todayperson.person_id')->where('timestamp > %d and timestamp <%d and t_id = %d',array($beginToday,$endToday,$t_id))->select();
        // echo M('todayperson')->getLastSql();
        $personnum = count($arr);
        $res['personlist'] = array_slice($arr,$currnum,$pagesize);
        $res['totalnum'] = intval(($personnum+$pagesize-1)/$pagesize);
        $this->json(1,'ok',$res);
       }

      /*
       *
       *得到历史景区游客信息
       *
       */

       public function gethistoryperson(){
        $t_id = $_GET['t_id'];
        $curr = $_GET['page'];
        $pagesize = 4;
        $currnum = ($curr-1)*$pagesize;
        $arr = M('historyperson')->join('people ON people.person_id = historyperson.person_id')->where("t_id=".$t_id)->select();
        $personnum = count($arr);
        $res['personlist'] = array_slice($arr,$currnum,$pagesize);
        $res['totalnum'] = intval(($personnum+$pagesize-1)/$pagesize);
        $this->json(1,'ok',$res);
       }

      /*
       *
       *得到实时游客人数
       *
       */
   
       public function getpersonnum(){
         $t_id = $_GET['t_id'];
         $beginToday = intval(mktime(0,0,0,date('m'),date('d'),date('Y')));
         $endToday=intval(mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1);
         $totalnum = M('todayperson')->where('timestamp > %d and timestamp <%d and t_id = %d',array($beginToday,$endToday,$t_id))->count();
         if($totalnum >= 8){
            $res['totalnum'] = $totalnum; 
            $this->json(1,'当前人数已到达8,已达最大容量',$res);
         }else{
           $res['totalnum'] = $totalnum; 
           $this->json(1,'ok',$res);
         }
         
       }

      /*
       *
       *得到当前月的游客总数
       *
       */

       public function getthismonthpersonnum(){
        $Model = new \Think\Model();
        $beginThismonth=mktime(0,0,0,date('m'),1,date('Y'));
        $endThismonth=mktime(23,59,59,date('m'),date('t'),date('Y'));
        $res['thismonth'] = intval(date('m'));
        $res['touristarea'] = $Model->query("select touristarea.t_id,touristarea.t_name,count(*) as personnum from touristarea,historyperson where touristarea.t_id = historyperson.t_id and historyperson.starttime > {$beginThismonth} and historyperson.starttime < {$endThismonth} group by touristarea.t_id order by touristarea.t_id ") ;
        $this->json(1,'ok',$res);
      }

      
      /*
       *
       *得到前一月的游客总数
       *
       */

       public function getlastmonthpersonnum(){
        $Model = new \Think\Model();
        $beginThismonth=mktime(0,0,0,date('m')-1,1,date('Y'));
        $endThismonth=mktime(23,59,59,date('m')-1,date('t'),date('Y'));
        $res['thismonth'] = date('m')-1;
        $res['touristarea'] = $Model->query("select touristarea.t_id,touristarea.t_name,count(*) as personnum from touristarea,historyperson where touristarea.t_id = historyperson.t_id and historyperson.starttime > {$beginThismonth} and historyperson.starttime < {$endThismonth} group by touristarea.t_id order by touristarea.t_id ") ;
        $this->json(1,'ok',$res);
       }
      

      /*
       *
       *得到前一月的游客总数
       *
       */

       public function gettouristareaandvalue(){
        $Model = new \Think\Model();
        $arr = $Model->query("select touristarea.t_id,touristarea.t_name as name,avg(h_go.score) as value4,avg(h_go.price) as value2,avg(h_go.service) as value5,avg(h_go.environment) as value6,avg(h_go.traffic) as value3 from touristarea,h_go where touristarea.t_id = h_go.t_id group by h_go.t_id");
        foreach($arr as $key => &$value){
          $value['value1'] = ($value['value2']+$value['value3']+$value['value4']+$value['value5']+$value['value6'])/5;
       }
       $res['touristarea'] = $arr;
       $this->json(1,'ok',$res);
      }  

     /*
      *
      *随机取人文
      *
      */

      public function randomculture(){
        $Model = new \Think\Model();
        $random = intval(rand(0,3));
        // echo $random;
        $arr[4] = array('custom','history','dress','artwork');
        // var_dump($arr[4][1]);
        $res['culture'] = $Model->query("select * from menu,touristarea where touristarea.t_id = menu.t_id and menu_type='{$arr[4][$random]}' order by rand() limit 1");
        $this->json(1,'ok',$res);
      }

     /*
      *
      *随机取饮食
      *
      */

      public function randomdiet(){
        $Model = new \Think\Model();
        // $random = intval(rand(0,3));
        // // echo $random;
        // $arr[4] = array('custom','history','dress','artwork');
        // var_dump($arr[4][1]);
        $res['diet'] = $Model->query("select * from menu,touristarea where touristarea.t_id = menu.t_id and menu_type='diet' order by rand() limit 1");
        $this->json(1,'ok',$res);
      }

     /*
      *
      *随机取人文
      *
      */

      public function randomarticle(){
        $Model = new \Think\Model();
        $res['article'] = $Model->query("select * from article,touristarea where touristarea.t_id = article.t_id order by rand() limit 1");
        $this->json(1,'ok',$res);
      }
      
     /*
      *
      *随机取景区
      *
      */

      public function randomtouristarea(){
        $Model = new \Think\Model();
        $touristarea = $Model->query("select touristarea.t_id,touristarea.t_cardimg,touristarea.t_name as name,avg(h_go.score) as value4,avg(h_go.price) as value2,avg(h_go.service) as value5,avg(h_go.environment) as value6,avg(h_go.traffic) as value3 from touristarea,h_go where touristarea.t_id = h_go.t_id group by h_go.t_id order by avg(h_go.score) desc");
        $tournum = count($touristarea);
        $random = intval(rand(0,$tournum-1));
        $res['touristarea'] = $touristarea[$random];
        $res['rank'] = $random+1;
        $this->json(1,'ok',$res);
      }

     /*
      *
      *获取实时景区排名
      *
      */

      public function gettourrank(){
        $Model = new \Think\Model();
        $touristarea = $Model->query("select touristarea.t_id,touristarea.t_name as name,avg(h_go.score) as value4,avg(h_go.price) as value2,avg(h_go.service) as value5,avg(h_go.environment) as value6,avg(h_go.traffic) as value3 from touristarea,h_go where touristarea.t_id = h_go.t_id group by h_go.t_id order by avg(h_go.score) desc");
        foreach($touristarea as $key => $value){
          var_dump($value);
          $data = array(
             "rank" => $key+1,
          );
          M('touristarea')->where("t_id=".$value['t_id'])->save($data);
        }
        $res['touristarea'] = $touristarea;
        $this->json(1,'ok',$res);
      }
      
     /*
      *
      *获取所有民族
      *
      */

      public function getallnation(){
        $nation = M('nation')->select();
        $curr = $_GET['page'];
        $pagesize = 4;
        $currnum = ($curr-1)*$pagesize;
        $nationnum = count($nation);
        $arr = array();
        $nation = array_slice($nation,$currnum,$pagesize);
        foreach ($nation as $key => $value) {
          $data['nation_id'] = $value['n_id'];
          $data['nation_name'] = $value['n_name'];
          $data['color'] = $value['color'];
          $data['touristarealist'] = M('touristarea')->where('n_id='.$value['n_id'])->select();
          array_push($arr,$data); 
        }
        $res['nationlist'] = $arr;
        $res['totalnum'] = intval(($nationnum+$pagesize-1)/$pagesize);
        // print_r($res);
        $this->json(1,'ok',$res);
      }
     

     /*
      *
      *获取用户评价
      *
      */

      public function userevaluate(){
        $u_id = session("user.id");
        $t_id = I('post.t_id');
        $data =  array(
           "price" =>  I('post.price'),
           "service" => I('post.service'),
           "traffic" => I('post.traffic'),
           "environment" => I('post.environment'),
        );
        M('h_go')->where("u_id = %d and t_id = %d",array($u_id,$t_id))->save($data);
        $this->json(1,'ok');
      }

     /*
      *
      *获取所有景区的各项数据的平均水平
      *
      */

      public function getalltouravgscore(){
        $Model = new \Think\Model();
        $data = $Model->query("select avg(score) as score,avg(price) as price,avg(service) as service, avg(environment) as environment,avg(traffic) as traffic from h_go");
        //  print_r($data);
          $data[0]['popularity'] = (string)(($data[0]['score']+$data[0]['price']+$data[0]['service']+$data[0]['environment']+$data[0]['traffic'])/5);
           $this->json(1,'ok',$data[0]);
      }

     /*
      *
      *获取根据景区ID的各项数据的平均水平
      *
      */

      public function gettourscorebytid(){
        $t_id = $_GET['t_id'];
        $Model = new \Think\Model();
        $data = $Model->query("select avg(score) as score,avg(price) as price,avg(service) as service, avg(environment) as environment,avg(traffic) as traffic from h_go group by t_id having t_id = '{$t_id}'");
        $data[0]['popularity'] =(string)( ($data[0]['score']+$data[0]['price']+$data[0]['service']+$data[0]['environment']+$data[0]['traffic'])/5);
        $this->json(1,'ok',$data[0]);
      }

     /*
      *
      *获取根据景区ID的每月人数
      *
      */
     
    public function geteverymonthpersonnum(){
       $Model = new \Think\Model();
       $t_id = $_GET['t_id'];
       $data = array();
       $thismonth = date('m');
       for($i = $thismonth ; $i>=1; $i--){
        $beginThismonth=mktime(0,0,0,$i,1,date('Y'));
        $endThismonth=mktime(23,59,59,$i,date('t'),date('Y'));
        $month = "month"+$i;
        $arr = $Model->query("select count(*) as personnum from historyperson where starttime > {$beginThismonth} and starttime < {$endThismonth} group by t_id having t_id = '{$t_id}'");
        $arr[0]['month'] = intval($i);
        array_push($data,$arr[0]); 
      }
       $this->json(1,'ok',$data);
    }
}