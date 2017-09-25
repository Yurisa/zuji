<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\Upload;
use Org\Util\Image;
use Think\Controller;

class AdminController extends CommonController {

    public function getadmindata(){
        $ad_id = session("admin.id");
        if(!empty($ad_id)){
            $admin['admin'] = M('admin')->where("ad_id='%s'",array($ad_id))->find();
            // var_dump($admin);
            $this->json(1,'ok',$admin);
           }else{
             $this->json(0,'未登录');
           }
    }

    public function getarea_admindata(){
        $ad_id = session("area_admin.id");
        if(!empty($ad_id)){
            $area_admin['area_admin'] = M('area_admin')->where("ad_id='%s'",array($ad_id))->find();
            // var_dump($admin);
            $this->json(1,'ok',$area_admin);
           }else{
             $this->json(0,'未登录');
           }
    }
}