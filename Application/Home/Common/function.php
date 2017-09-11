<?php

function  log_result($file,$word)
{		
    $file= "./notify.log";//log文件路径
    
    $fp = fopen($file,"a");
    flock($fp, LOCK_EX) ;
    fwrite($fp,"执行日期：".date("Y-m-d H:i:s",time())." ".$word."\r\n");
    flock($fp, LOCK_UN);
    fclose($fp);
}

function sweetAlert($message,$title='',$type=1,$js = '')
{

    switch($type)
    {
        case 1:$icon = 'success';break;
        case 2:$icon = 'warning';break;
        case 3:$icon = 'error';break;
        default:$icon = '';break;
    }

    $valHtml = '';
    $valHtml .= '<!doctype html>';
    $valHtml .= '<html>';
    $valHtml .= '<head>';
    $valHtml .= '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />';
    $valHtml .= '<meta charset="utf-8">';
    $valHtml .= '<script src="http://php.shuochuang.net/hdd/Public/sweetalert/sweetalert.min.js"></script> <link rel="stylesheet" type="text/css" href="http://php.shuochuang.net/hdd/Public/sweetalert/sweetalert.css">';
    $valHtml .= '<script>';
    $valHtml .= "window.onload = function(){swal(";
    if($message != "") $valHtml .= "{text: '".$message."', ";
    if($title != "") $valHtml .= "title: '".$title."', ";
    if($type != 0) $valHtml .= "type: '".$icon."'";
    $valHtml .= "},function(){ ";
    if($js != '') $valHtml .= $js;
    $valHtml .= '});}</script>';
    $valHtml .= '</head>';
    $valHtml .= '<body>';
    $valHtml .= '</body>';
    $valHtml .= '</html>';
    return $valHtml;
}