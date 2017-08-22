<?php
namespace Home\Controller;
use Think\Controller;
use Org\Util\String;

class CommonController extends Controller {

    function __construct(){
		parent::__construct();
		header("Content-Type: text/html;charset=utf-8");
    }

    public function json($code, $result = 'ok', $body = NULL)
    {
        echo json_encode(array(
            'code' => $code,
            'result' => $result,
            'body' => $body
        ));
        exit();
    }

     //百度经纬度计算两地距离
    function distanceBetween($fP1Lat, $fP1Lon, $fP2Lat, $fP2Lon){
        $fEARTH_RADIUS = 6378137;
        //角度换算成弧度
        $fRadLon1 = deg2rad($fP1Lon);
        $fRadLon2 = deg2rad($fP2Lon);
        $fRadLat1 = deg2rad($fP1Lat);
        $fRadLat2 = deg2rad($fP2Lat);
        //计算经纬度的差值
        $fD1 = abs($fRadLat1 - $fRadLat2);
        $fD2 = abs($fRadLon1 - $fRadLon2);
        //距离计算
        $fP = pow(sin($fD1/2), 2) +
              cos($fRadLat1) * cos($fRadLat2) * pow(sin($fD2/2), 2);
        return intval($fEARTH_RADIUS * 2 * asin(sqrt($fP)) + 0.5);
    }

}