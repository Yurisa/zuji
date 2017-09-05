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
        $Model = new \Think\Model();
         // $data = M('article')->where('t_id='.$t_id)->select();
        $data = $Model->query("select article.*,user.* from user,article where article.u_id = user.u_id and article.t_id = '{$t_id}'");
     	return $data;
     }

    /**
     * 通过用户获取游记
     * @param t_id   景区ID
     * @return data Array 游记信息
     */
    function getArticleByuid($u_id){
    	unset($data);
        
    	$data = M('article')->where('u_id='.$u_id)->select();
    	return $data;
    }

    /**
     * 通过a_id获取游记
     * @param a_id   游记ID
     * @return data Array 游记信息
     */
    
     function getArticleByaid($a_id){
        unset($data);
        $Model = new \Think\Model();
        $data = $Model->query("select article.*,user.u_name,user.u_avatar,backimg,sign from user,article where article.u_id = user.u_id and article.a_id = '{$a_id}'");
     	return $data;
     }

    /**
     * 通过a_id获取游记
     * @param a_id   游记ID
     * @return data Array 游记信息
     */
     
     function getCommentByaid($a_id){
        unset($data);
        $Model = new \Think\Model();
        $data = $Model->query("select comment.*,user.* from user,comment where comment.u_id = user.u_id and comment.a_id = '{$a_id}' order by comment.timestamp asc");
     	return $data;
     }
}