<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\String;
use Org\Util\Match;
use Think\Controller;

class RegController extends CommonController{
     public function _construct(){
            
      }
    
        
    /**
     * 验证码
     */

     public function Verify(){
    	$Verify = new \Think\Verify();
        $Verify->fontSize = 40;
        //$Verify->length   = 3;
		$Verify->entry('login');
      }
      
    /**
     * 提交登录登陆
     */

      public function loginUser(){
          $userName = I('post.userName');
          $password = I('post.password');
          $identifyCode = I('post.identifyCode');
          $Verify = new \Think\Verify();
          if(!$Verify->check($identifyCode,'login')){
              $this->json(0,'登录失败验证码错误');
            //   exit();
          }
          $userdata = M('user')->where("u_name='%s'",array($userName))->find();
          if(!empty($userdata)){
              if($userdata['u_password'] == $password){
                  session('user.name', $userdata['u_name']);
                  session('user.id', $userdata['u_id']);
                  $this->json(1,'登录成功',$userdata);
              }
              $this->json(0,'登录失败，账号或密码错误');
          }
      }

    /**
     * 退出登陆
     */

    public function loginOut()
    {
        session('user', NULL);
        $this->json(1,'退出成功');
        exit();
    }

}