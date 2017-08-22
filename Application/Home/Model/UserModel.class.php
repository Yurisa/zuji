<?php
namespace Home\Model;
use Think\Model;


class UserModel extends Model
{
    private $Table = Null;
	
	function __construct($table)
	{
	    parent::__construct($table);
        $this->Table = M($table);
	}
    /**
     * 通过ID获取想去的地方
     * @param u_id   用户ID
     * @return data Array 景区信息
     */
     function getuserdatabyuid($u_id){
         unset($data);
         $data = M('user')->where('u_id='.$u_id)->find();
         return $data;
     }
	/**
     * 通过ID获取想去的地方
     * @param u_id   用户ID
     * @return data Array 景区信息
     */
     function getw_gotouristByuid($u_id){
     	unset($data);
        $Model = new \Think\Model();
     	$data = $Model->query("select touristarea.* from w_go,touristarea where w_go.t_id = touristarea.t_id and w_go.u_id = {$u_id}");
     	return $data;
     }
     
    /**
     * 通过ID获取去过的地方
     * @param u_id   用户ID
     * @return data Array 景区信息
     */
     function geth_gotouristByuid($u_id){
 	   unset($data);
       $Model = new \Think\Model();
 	   $data = $Model->query("select touristarea.*,h_go.score from h_go,touristarea where h_go.t_id = touristarea.t_id and h_go.u_id = {$u_id}");
 	   return $data;
 }

    /**
     * 通过ID获取收藏的游记
     * @param u_id   用户ID
     * @return data Array 游记信息
     */

     function getcollectarticle($u_id){
         unset($data);
         $Model = new \Think\Model();
         $data = $Model->query("select article.*, user.u_name, user.u_avatar from article,collect,user where collect.a_id = article.a_id and user.u_id = article.u_id and collect.u_id = {$u_id}");
         return $data;
     }
     
}