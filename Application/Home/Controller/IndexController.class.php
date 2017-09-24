<?php
namespace Home\Controller;

use Home\Controller\CommonController;
use Org\Util\Upload;
use Org\Util\Image;
use Think\Controller;
class IndexController extends CommonController {

    public function index(){
    	
    }
    /**
     * 上传图片
     */
    Public function uploadImg()
    {
        $dir = './Uploads/img';
        $dir_1 = $dir . '/' . date('Ym');
        $dir_2 = $dir_1 . '/' . date('d');
        if (! file_exists($dir_1))
            @mkdir($dir_1);
        if (! file_exists($dir_2))
            @mkdir($dir_2);
        // print_r($_FILES);
        if (isset($_FILES['file'])) {
            $config = array(
                'size' => 1024 * 1024 * 10,
                'type' => array(
                    'image/png',
                    'image/jpeg',
                    'image/jpg'
                ),
                'path' => $dir_2 . '/'
            );

            import('ORG.Util.Upload');
            //$this->json(0, '测试下', $file);
            $upload = new \Org\Util\Upload($config);

            $file = $upload->receive($_FILES['file']);
             // Image::water($file,"./ThinkPHP/zuji.png",null,50);
            $image = new \Think\Image(); 
            // 在图片左上角添加水印（水印文件位于./logo.png） 水印图片的透明度为50 并保存为water.jpg
            $image->open($file)->water('./images/logo-w2.png',\Think\Image::IMAGE_WATER_SOUTHEAST,70)->save($file); 
            $id = D('Img')->send($file);
            $this->json(1, 'ok', array(
                'id' => $id,
                'file' => $file
            ));
            // if (is_file($file)) {
                
            //     $width = I('request.width', NULL);
            //     if ($width !== NULL) {
            //         import('ORG.Util.Image');
            //         $pathinfo = pathinfo($file);
            //         $height = 999999999999;
            //         $file = Image::thumb($file, $config['path'] . $pathinfo['filename'] . 'Wx' . $width . '.' . $pathinfo['extension'], strtolower($pathinfo['extension']), $width, $height);
            //     }
            //     $id = D('Img')->send($file);
            //     $this->json(1, 'ok', array(
            //         'id' => $id,
            //         'file' => $file
            //     ));
            // } else {
            //     $this->json(0, '文件上传失败', $file);
            // }
        }
        $this->json(0, '请选择文件');
    }

     /**
     * 上传图片添加小水印
     */
     Public function uploadImglittlewater()
     {
         $dir = './Uploads/img';
         $dir_1 = $dir . '/' . date('Ym');
         $dir_2 = $dir_1 . '/' . date('d');
         if (! file_exists($dir_1))
             @mkdir($dir_1);
         if (! file_exists($dir_2))
             @mkdir($dir_2);
         // print_r($_FILES);
         if (isset($_FILES['file'])) {
             $config = array(
                 'size' => 1024 * 1024 * 10,
                 'type' => array(
                     'image/png',
                     'image/jpeg',
                     'image/jpg'
                 ),
                 'path' => $dir_2 . '/'
             );
 
             import('ORG.Util.Upload');
             //$this->json(0, '测试下', $file);
             $upload = new \Org\Util\Upload($config);
 
             $file = $upload->receive($_FILES['file']);
              // Image::water($file,"./ThinkPHP/zuji.png",null,50);
             $image = new \Think\Image(); 
             // 在图片左上角添加水印（水印文件位于./logo.png） 水印图片的透明度为50 并保存为water.jpg
             $image->open($file)->water('./images/logo-w-70x94.png',\Think\Image::IMAGE_WATER_SOUTHEAST,60)->save($file); 
             $id = D('Img')->send($file);
             $this->json(1, 'ok', array(
                 'id' => $id,
                 'file' => $file
             ));
             // if (is_file($file)) {
                 
             //     $width = I('request.width', NULL);
             //     if ($width !== NULL) {
             //         import('ORG.Util.Image');
             //         $pathinfo = pathinfo($file);
             //         $height = 999999999999;
             //         $file = Image::thumb($file, $config['path'] . $pathinfo['filename'] . 'Wx' . $width . '.' . $pathinfo['extension'], strtolower($pathinfo['extension']), $width, $height);
             //     }
             //     $id = D('Img')->send($file);
             //     $this->json(1, 'ok', array(
             //         'id' => $id,
             //         'file' => $file
             //     ));
             // } else {
             //     $this->json(0, '文件上传失败', $file);
             // }
         }
         $this->json(0, '请选择文件');
     }
}