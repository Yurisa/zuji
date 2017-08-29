<?php
namespace Home\Model;
use Think\Model;

class ImgModel extends Model
{
    private $Table = NULL;
    function __construct($table)
    {
        parent::__construct($table);
        $this->Table = M($table);
    }
    
    /**
     * 插入图片
     * @param unknown $file
     * @return \Think\mixed
     */
    function send($file)
    {
        return $this->Table->add(array('path'=>$file));
    }
    
    /**
     * 获取path
     * @param unknown $id
     */
    function getById($id)
    {
        return $this->Table->where('id='.$id)->getField('path');
    }
}