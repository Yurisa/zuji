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