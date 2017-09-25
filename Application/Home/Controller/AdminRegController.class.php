<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\String;
use Org\Util\Match;
use Think\Controller;

class AdminRegController extends CommonController{
    public function _construct(){
           
     }

     public function loginUser(){
        $ad_id = I('post.ad_id');
        $ad_password = I('post.ad_password');
        $admindata = M('admin')->where("ad_id = '%s'",array($ad_id))->find();
        if(!empty($admindata)){
            if($admindata['ad_password'] == $ad_password){
                session("admin.id",$admindata['ad_id']);
                session("admin.name",$admindata['ad_name']);
               $this->json(1,'ok');
            }
            $this->json(0,'登录失败，账号或密码错误');
        }
     }

    /**
     * 退出登陆
     */

    public function loginOut()
    {
        session('admin', NULL);
        $this->json(1,'退出成功');
        exit();
    }


}