<?php
namespace Home\Model;
use Think\Model;

class ArticleModel extends Model
{
	private $Table = Null;
	function __construct($table)
	{
	    parent::__construct($table);
        $this->Table = M($table);
	}


    /**
     * 通过景区获取游记
     * @param t_id   景区ID
     * @return data Array 游记信息
     */
     function getArticleBytid($t_id){
     	unset($data);

     	$data = M('article')->where('t_id='.$t_id)->select();
     	return $data;
     }

    /**
     * 通过景区获取游记
     * @param t_id   景区ID
     * @return data Array 游记信息
     */
    function getArticleByuid($u_id){
    	unset($data);

    	$data = M('article')->where('u_id='.$u_id)->select();
    	return $data;
    }
}