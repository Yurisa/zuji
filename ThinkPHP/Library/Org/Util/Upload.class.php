<?php
namespace Org\Util;
class Upload
{
	private $_config;
	
	function __construct($config)
	{
		$this->_config = $config;
	}
	
	/**
	 * 文件mimetype
	 *
	 * @param unknown $file        	
	 * @param string $options        	
	 * @param unknown $magicFile        	
	 * @return unknown
	 */
	public function mimetype($file, $options = FILEINFO_MIME_TYPE, $magicFile = NULL)
	{
		$result = finfo_file(finfo_open($options, $magicFile), self::path($file));
		return $result;
	}
	
	/**
	 * 文件格式化后的路径
	 * @param unknown $file
	 * @return string
	 */
	function path($file)
	{
		return realpath($file);
	}
	
	/**
	 * 获得文件后缀
	 *
	 * @param unknown $filename
	 * @return mixed
	 */
	public function type($filename)
	{
		return pathinfo($filename, PATHINFO_EXTENSION);
	}
	
	/**
	 * 接收文件
	 * @param unknown $file
	 * @return unknown|string|number|boolean
	 */
	function receive($file)
	{
		set_time_limit(0);
		if (is_uploaded_file($file['tmp_name'])) {
			if ($file['error'] != UPLOAD_ERR_OK) {
				return $file['error'];
			}
				
			if (isset($this->_config['size']) && $file['size'] > $this->_config['size']) {
				return UPLOAD_ERR_INI_SIZE;
			}
			
			$mimetype = $this->mimetype($file['tmp_name']);
			
			if (isset($this->_config['type']) && !in_array($mimetype, $this->_config['type'])) {
				return 8;
			}
			
			if (! is_writable($this->path($this->_config['path'])) || !is_dir($this->path($this->_config['path']))) {
				return UPLOAD_ERR_CANT_WRITE;
			}
			$fileType = $this->type($file['name']);
			$type = empty($fileType) ? 'tmpuploadfile' : $fileType;
			//$type = empty($this->type($file['name'])) ? 'tmpuploadfile' : $this->type($file['name']);
			// $type = 'tmpuploadfile';
			$filename = rtrim($this->_config['path'], '/') . '/' . md5_file($file['tmp_name']) . '.' . $type;
			if(file_exists($filename))
				return $filename;
			if (move_uploaded_file($file['tmp_name'], $filename)) {
				return $filename;
			}
			return false;
		}
		return false;
	}
}