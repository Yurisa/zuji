/*
Navicat MySQL Data Transfer

Source Server         : hdd
Source Server Version : 50617
Source Host           : localhost:3307
Source Database       : zuji

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-11-02 12:07:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `ad_id` varchar(20) NOT NULL,
  `ad_name` varchar(20) NOT NULL,
  `ad_password` int(11) NOT NULL,
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('zuji@admin', 'admin', '123456');

-- ----------------------------
-- Table structure for area_admin
-- ----------------------------
DROP TABLE IF EXISTS `area_admin`;
CREATE TABLE `area_admin` (
  `ad_id` varchar(20) NOT NULL,
  `ad_name` varchar(20) NOT NULL,
  `ad_password` int(11) NOT NULL,
  `t_id` int(11) NOT NULL,
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of area_admin
-- ----------------------------
INSERT INTO `area_admin` VALUES ('zuji@miaozhai', '千户苗寨', '123456', '4');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_title` varchar(20) NOT NULL,
  `a_content` varchar(10000) NOT NULL,
  `a_zan` int(11) NOT NULL,
  `a_cover` varchar(255) NOT NULL,
  `timestamp` int(20) NOT NULL,
  `browse_num` int(11) NOT NULL,
  `t_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  PRIMARY KEY (`a_id`),
  KEY `u_id1` (`u_id`),
  KEY `t_id1` (`t_id`),
  CONSTRAINT `t_id1` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id1` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('53', '勒是雾都', '<p><img src=\"/ueditor/php/upload/image/20170901/1504274755138037.png\" title=\"1504274755138037.png\" alt=\"wechat2.png\"/>扫我扫我啦啦啦啦啦</p>', '0', './Uploads/img/201709/01/30a6d81cc065103a5d5fe5c6e56388be.jpg', '1504274768', '0', '1', '1');
INSERT INTO `article` VALUES ('54', '隆安最美', '<h1 style=\"font-size: 32px; font-weight: bold; border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; text-align: center; margin: 0px 0px 20px;\">宁波最美</h1><p>&nbsp;今天心情真不错 附上，美图一张<img src=\"/ueditor/php/upload/image/20170901/1504274989113999.png\" title=\"1504274989113999.png\" alt=\"wechat.png\"/></p>', '2', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg', '1504274996', '14', '1', '1');
INSERT INTO `article` VALUES ('58', '黔东南游之西江千户苗寨', '<h1 style=\"font-size: 32px; font-weight: bold; border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; text-align: center; margin: 0px 0px 20px;\">黔东南游之西江千户苗寨</h1><p>&nbsp;&nbsp;&nbsp; <span style=\";font-family:宋体\">“交友要有三分侠义，做人要有一颗素心。”在旅途翻看《读者》似乎成了一个习惯，像男人指尖总爱夹根烟，女人手心总爱拽个包一样。骨子里是有侠义心肠的，想来所有熟识我的朋友会高度认同。那，我的那颗素心呢？</span></p><p>&nbsp;&nbsp;&nbsp; <span style=\";font-family:宋体\">看到《读者》里这句话时，我那颗充斥委屈压抑的心灵正和开往贵阳的火车一起飞驰。每一次新的征程，就像一只新笋，伴着清风雨露，一点点剥落包裹自己的毛刺硬壳，还原一个鲜亮清灵的自己；每一次行走，像辟谷般，去浊还清，在陌生的地方思念熟悉的人，在一无所有的地方感怀已拥有。与一个又个陌生旅友的交集，是天带来的缘分，风送到的欢欣，点点情谊落地生花，入水成漪，把温暖开得满心满意，成就一颗，安然知足的心。</span></p><p><img src=\"/ueditor/php/upload/image/20170910/1505034193316283.jpg\" title=\"1505034193316283.jpg\" alt=\"p0.jpg\"/></p>', '9', './Uploads/img/201709/10/30a6d81cc065103a5d5fe5c6e56388be.jpg', '1505034226', '57', '4', '1');
INSERT INTO `article` VALUES ('59', '苗寨一日游', '<p>今天真开心</p>', '0', './Uploads/img/201709/11/30a6d81cc065103a5d5fe5c6e56388be.jpg', '1505120276', '2', '1', '1');
INSERT INTO `article` VALUES ('63', '千户苗寨风雨桥七桥论诞生记', '<p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">错峰出行，是老狐狸鼎力推行的一项基本国策。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">去年（2015年）金秋时节，再次选定10月12日作为出行日。怀揣着两个月来字句斟酌的行程规划，在游客乙的陪同下，从江门市自驾赴黔，开始了一次历时12天，辗转3000公里，覆盖黔东南、黔南和黔西南少数民族集聚区的小小壮举。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">借道新修通的苍硕高速（广西梧州苍梧至凭祥硕龙）贵梧段，江门市→ 荔波大小七孔 → 镇远古镇 → 凯里西江千户苗寨 → 安顺黄果树瀑布 → 兴义马岭河峡谷 → 兴义万峰林 → 百色市 → 南宁市 → home 的扁椭圆路线逐地逐站神游。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">贵州旅游基础建设的提速完善（如贵广高铁及多条直抵景区高速路的通车等）和央媒重金宣传的媒体效应，是贵州近期一跃升格为旅游大省和游客主要神往地的重要催化剂。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">然而无须讳言，天造地设的美景和基础建设的亮点却无法遮掩贵州个别景区旅游配套服务和观念滞后的短板 ── 没想到此行竟是一趟没底的、满头雾水的和窘态连连的经历 ── 这也正是本文或本七桥论出笼的直接诱因。</span></p><p><img src=\"/ueditor/php/upload/image/20170924/1506243995345157.jpg\" title=\"1506243995345157.jpg\" alt=\"图 (1).jpg\"/></p>', '0', './Uploads/img/201709/24/3430818ee79c7a0cac85b9068b63ef46.jpg', '1506244000', '5', '4', '1');
INSERT INTO `article` VALUES ('64', '黔东南环线--自驾多彩贵州', '<p><img src=\"/ueditor/php/upload/image/20170924/1506244158701676.jpg\" title=\"1506244158701676.jpg\" alt=\"图片 (1).jpg\"/></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">飞机缓缓下降，耳膜不适的感觉告诉我帝都已在脚下。舷窗外，灰蒙蒙的天空吞噬了整个世界。而此时，心中却忽然推开了一扇小窗，鳞次栉比的吊脚楼和苗寨的回忆，仿佛相思已久，急冲冲扑面而来。</span></p><p><img src=\"/ueditor/php/upload/image/20170924/1506244196349719.jpg\" title=\"1506244196349719.jpg\" alt=\"图片 (2).jpg\"/></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">其实，去苗寨不过是昨天的事。原本约了“侯爷”同往，结果他老人家临时掉链子，我也只好千里走单骑了。</span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><img src=\"/ueditor/php/upload/image/20170924/1506244230820702.jpg\" title=\"1506244230820702.jpg\" alt=\"图片 (3).jpg\"/></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">走单骑需要良驹，从朋友那儿借的“汗血宝马”—— 一辆红色BMW X3 28i。 早晨7:30出发，贵阳至西江200多公里，一个人开车难免旅途寂寞。好在Ｘ3动力澎湃，所谓“马作的卢飞快”，两个小时左右便到达凯里东。</span></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><br/></span></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family: &#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p><br/></p>', '0', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg', '1506244261', '2', '4', '1');
INSERT INTO `article` VALUES ('65', '风雨桥', '<p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">错峰出行，是老狐狸鼎力推行的一项基本国策。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">去年（2015年）金秋时节，再次选定10月12日作为出行日。怀揣着两个月来字句斟酌的行程规划，在游客乙的陪同下，从江门市自驾赴黔，开始了一次历时12天，辗转3000公里，覆盖黔东南、黔南和黔西南少数民族集聚区的小小壮举。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">借道新修通的苍硕高速（广西梧州苍梧至凭祥硕龙）贵梧段，江门市→ 荔波大小七孔 → 镇远古镇 → 凯里西江千户苗寨 → 安顺黄果树瀑布 → 兴义马岭河峡谷 → 兴义万峰林 → 百色市 → 南宁市 → home 的扁椭圆路线逐地逐站神游。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">贵州旅游基础建设的提速完善（如贵广高铁及多条直抵景区高速路的通车等）和央媒重金宣传的媒体效应，是贵州近期一跃升格为旅游大省和游客主要神往地的重要催化剂。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">然而无须讳言，天造地设的美景和基础建设的亮点却无法遮掩贵州个别景区旅游配套服务和观念滞后的短板 ── 没想到此行竟是一趟没底的、满头雾水的和窘态连连的经历 ── 这也正是本文或本七桥论出笼的直接诱因。</span></p><p><img src=\"/ueditor/php/upload/image/20170924/1506255577917652.jpg\" title=\"1506255577917652.jpg\" alt=\"图 (1).jpg\"/></p>', '0', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg', '1506255580', '1', '4', '1');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `u_id` int(11) NOT NULL,
  `a_id` int(11) NOT NULL,
  PRIMARY KEY (`u_id`,`a_id`),
  KEY `a_id2` (`a_id`),
  CONSTRAINT `a_id2` FOREIGN KEY (`a_id`) REFERENCES `article` (`a_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id2` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('1', '54');
INSERT INTO `collect` VALUES ('1', '58');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_content` varchar(255) NOT NULL,
  `a_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `timestamp` int(20) NOT NULL,
  PRIMARY KEY (`c_id`),
  KEY `a_id1` (`a_id`),
  KEY `u_id6` (`u_id`),
  CONSTRAINT `a_id1` FOREIGN KEY (`a_id`) REFERENCES `article` (`a_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id6` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('2', '嘿嘿嘿', '58', '1', '1505882909');
INSERT INTO `comment` VALUES ('6', '不错不错', '58', '1', '1506253749');

-- ----------------------------
-- Table structure for draft
-- ----------------------------
DROP TABLE IF EXISTS `draft`;
CREATE TABLE `draft` (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `d_title` varchar(20) DEFAULT NULL,
  `d_content` varchar(10000) DEFAULT NULL,
  `d_cover` varchar(255) DEFAULT NULL,
  `timestamp` int(11) NOT NULL,
  `t_id` int(11) NOT NULL DEFAULT '0',
  `u_id` int(11) NOT NULL,
  PRIMARY KEY (`d_id`),
  KEY `t_id7` (`t_id`),
  KEY `u_id7` (`u_id`),
  CONSTRAINT `u_id7` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of draft
-- ----------------------------
INSERT INTO `draft` VALUES ('12', '我的旅游', '<p>今天真开心</p>', '', '1505120266', '1', '1');
INSERT INTO `draft` VALUES ('21', '千户苗寨风雨桥七桥论诞生记', '', './Uploads/img/201709/24/fd2af7c22a0dbe5a8db866c1c60252c7.jpg', '1506235297', '4', '1');
INSERT INTO `draft` VALUES ('28', '黔东南环线--自驾多彩贵州', '<p><img src=\"/ueditor/php/upload/image/20170924/1506244158701676.jpg\" title=\"1506244158701676.jpg\" alt=\"图片 (1).jpg\"/></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">飞机缓缓下降，耳膜不适的感觉告诉我帝都已在脚下。舷窗外，灰蒙蒙的天空吞噬了整个世界。而此时，心中却忽然推开了一扇小窗，鳞次栉比的吊脚楼和苗寨的回忆，仿佛相思已久，急冲冲扑面而来。</span></p><p><img src=\"/ueditor/php/upload/image/20170924/1506244196349719.jpg\" title=\"1506244196349719.jpg\" alt=\"图片 (2).jpg\"/></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">其实，去苗寨不过是昨天的事。原本约了“侯爷”同往，结果他老人家临时掉链子，我也只好千里走单骑了。</span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><img src=\"/ueditor/php/upload/image/20170924/1506244230820702.jpg\" title=\"1506244230820702.jpg\" alt=\"图片 (3).jpg\"/></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">走单骑需要良驹，从朋友那儿借的“汗血宝马”—— 一辆红色BMW X3 28i。 早晨7:30出发，贵阳至西江200多公里，一个人开车难免旅途寂寞。好在Ｘ3动力澎湃，所谓“马作的卢飞快”，两个小时左右便到达凯里东。</span></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><span style=\"font-size:16px;font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\"><br/></span></span></p><p style=\"line-height:26px\"><span style=\"font-size:16px;font-family: &#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p><br/></p>', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg', '1506244252', '4', '1');
INSERT INTO `draft` VALUES ('30', '', '', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg', '1506255487', '4', '1');
INSERT INTO `draft` VALUES ('31', '风雨桥', '<p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">错峰出行，是老狐狸鼎力推行的一项基本国策。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">去年（2015年）金秋时节，再次选定10月12日作为出行日。怀揣着两个月来字句斟酌的行程规划，在游客乙的陪同下，从江门市自驾赴黔，开始了一次历时12天，辗转3000公里，覆盖黔东南、黔南和黔西南少数民族集聚区的小小壮举。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">借道新修通的苍硕高速（广西梧州苍梧至凭祥硕龙）贵梧段，江门市→ 荔波大小七孔 → 镇远古镇 → 凯里西江千户苗寨 → 安顺黄果树瀑布 → 兴义马岭河峡谷 → 兴义万峰林 → 百色市 → 南宁市 → home 的扁椭圆路线逐地逐站神游。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">贵州旅游基础建设的提速完善（如贵广高铁及多条直抵景区高速路的通车等）和央媒重金宣传的媒体效应，是贵州近期一跃升格为旅游大省和游客主要神往地的重要催化剂。</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">&nbsp;</span></p><p style=\";margin-bottom:0;line-height:26px;background:white\"><span style=\"font-family:&#39;微软雅黑&#39;,&#39;sans-serif&#39;;color:#323232\">然而无须讳言，天造地设的美景和基础建设的亮点却无法遮掩贵州个别景区旅游配套服务和观念滞后的短板 ── 没想到此行竟是一趟没底的、满头雾水的和窘态连连的经历 ── 这也正是本文或本七桥论出笼的直接诱因。</span></p><p><br/></p>', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg', '1506255573', '4', '1');

-- ----------------------------
-- Table structure for historyperson
-- ----------------------------
DROP TABLE IF EXISTS `historyperson`;
CREATE TABLE `historyperson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `person_id` bigint(20) NOT NULL,
  `t_id` int(11) NOT NULL,
  `starttime` int(11) NOT NULL,
  `endtime` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of historyperson
-- ----------------------------
INSERT INTO `historyperson` VALUES ('8', '330281199701011001', '1', '1501632959', '1501632964');
INSERT INTO `historyperson` VALUES ('9', '330281199701011001', '1', '1505724597', '1505724609');
INSERT INTO `historyperson` VALUES ('10', '330281199701011001', '1', '1505738324', '1505738516');
INSERT INTO `historyperson` VALUES ('11', '330281196402081002', '1', '1505738535', '1505738537');
INSERT INTO `historyperson` VALUES ('12', '330281197605051004', '1', '1505738533', '1505738540');
INSERT INTO `historyperson` VALUES ('13', '330281198701011234', '1', '1505738534', '1505738548');
INSERT INTO `historyperson` VALUES ('14', '330281199608061001', '1', '1505738535', '1505738551');
INSERT INTO `historyperson` VALUES ('15', '330281199701011008', '1', '1505724604', '1505738556');
INSERT INTO `historyperson` VALUES ('16', '330281199701161002', '1', '1505738521', '1505738557');
INSERT INTO `historyperson` VALUES ('17', '330281199701181003', '1', '1505738523', '1505738558');
INSERT INTO `historyperson` VALUES ('18', '330281199909011003', '1', '1505738524', '1505738558');
INSERT INTO `historyperson` VALUES ('19', '330281199701161002', '1', '1505738563', '1505738566');
INSERT INTO `historyperson` VALUES ('20', '330281199701011001', '1', '1505738555', '1505738570');
INSERT INTO `historyperson` VALUES ('21', '330281199701011001', '1', '1505739433', '1505739437');
INSERT INTO `historyperson` VALUES ('22', '330281199701011008', '1', '1505739436', '1505739439');
INSERT INTO `historyperson` VALUES ('23', '330281199701181003', '1', '1505739442', '1505739444');
INSERT INTO `historyperson` VALUES ('24', '330281199701161002', '1', '1505739440', '1505739445');
INSERT INTO `historyperson` VALUES ('25', '330281199701181003', '1', '1505739452', '1505739452');
INSERT INTO `historyperson` VALUES ('26', '330281199701161002', '1', '1505739449', '1505739454');
INSERT INTO `historyperson` VALUES ('27', '330281199701181003', '1', '1505739452', '1505739462');
INSERT INTO `historyperson` VALUES ('28', '330281199909011003', '1', '1505739450', '1505739466');
INSERT INTO `historyperson` VALUES ('29', '330281199701011001', '2', '1505740003', '1505740004');
INSERT INTO `historyperson` VALUES ('30', '330281199701011008', '2', '1505740005', '1505740006');
INSERT INTO `historyperson` VALUES ('31', '330281199701161002', '2', '1505740007', '1505740008');
INSERT INTO `historyperson` VALUES ('32', '330281199701181003', '2', '1505740009', '1505740010');
INSERT INTO `historyperson` VALUES ('33', '330281199909011003', '2', '1505740011', '1505740012');
INSERT INTO `historyperson` VALUES ('34', '330281196402081002', '3', '1505742146', '1505742147');
INSERT INTO `historyperson` VALUES ('35', '330281197605051004', '3', '1505742149', '1505742149');
INSERT INTO `historyperson` VALUES ('36', '330281198701011234', '3', '1505742150', '1505742151');
INSERT INTO `historyperson` VALUES ('37', '330281199608061001', '3', '1505742154', '1505742155');
INSERT INTO `historyperson` VALUES ('38', '330281199701011001', '3', '1505742158', '1505742159');
INSERT INTO `historyperson` VALUES ('39', '330281199701011008', '3', '1505742160', '1505742161');
INSERT INTO `historyperson` VALUES ('40', '330281199701161002', '3', '1505742163', '1505742164');
INSERT INTO `historyperson` VALUES ('41', '330281199701181003', '3', '1505742165', '1505742167');
INSERT INTO `historyperson` VALUES ('42', '330281199909011003', '3', '1505742169', '1505742170');
INSERT INTO `historyperson` VALUES ('43', '330281196402081002', '3', '1505742178', '1505742179');
INSERT INTO `historyperson` VALUES ('44', '330281197605051004', '3', '1505742179', '1505742180');
INSERT INTO `historyperson` VALUES ('45', '330281198701011234', '3', '1505742181', '1505742182');
INSERT INTO `historyperson` VALUES ('46', '330281199608061001', '3', '1505742183', '1505742187');
INSERT INTO `historyperson` VALUES ('47', '330281199701011001', '3', '1505742191', '1505742191');
INSERT INTO `historyperson` VALUES ('48', '330281196402081002', '4', '1505743178', '1505743500');
INSERT INTO `historyperson` VALUES ('49', '330281197605051004', '4', '1505743180', '1505743503');
INSERT INTO `historyperson` VALUES ('50', '330281198701011234', '4', '1505743184', '1505743514');
INSERT INTO `historyperson` VALUES ('51', '330281199608061001', '4', '1505743186', '1505743515');
INSERT INTO `historyperson` VALUES ('52', '330281199701011001', '4', '1505743169', '1505743518');
INSERT INTO `historyperson` VALUES ('53', '330281199701011008', '4', '1505743170', '1505743520');
INSERT INTO `historyperson` VALUES ('54', '330281199701161002', '4', '1505743171', '1505743521');
INSERT INTO `historyperson` VALUES ('55', '330281199701181003', '4', '1505743172', '1505743524');
INSERT INTO `historyperson` VALUES ('56', '330281199909011003', '4', '1505743173', '1505743526');
INSERT INTO `historyperson` VALUES ('57', '330281199701011001', '4', '1501722000', '1501722256');
INSERT INTO `historyperson` VALUES ('58', '330281199701011008', '4', '1501722000', '1501722300');
INSERT INTO `historyperson` VALUES ('59', '330281199701181003', '2', '1501722000', '1501722300');
INSERT INTO `historyperson` VALUES ('60', '330281198701011234', '3', '1501722000', '1501722300');
INSERT INTO `historyperson` VALUES ('61', '330281196402081002', '1', '1506242200', '1506242215');
INSERT INTO `historyperson` VALUES ('62', '330281197605051004', '1', '1506242206', '1506242340');
INSERT INTO `historyperson` VALUES ('63', '330281196402081002', '1', '1506242342', '1506242343');
INSERT INTO `historyperson` VALUES ('64', '330281196402081002', '1', '1506255984', '1506256145');
INSERT INTO `historyperson` VALUES ('65', '330281197605051004', '1', '1506255986', '1506256145');
INSERT INTO `historyperson` VALUES ('66', '330281198701011234', '1', '1506255988', '1506256147');
INSERT INTO `historyperson` VALUES ('67', '330281199608061001', '1', '1506255991', '1506256149');
INSERT INTO `historyperson` VALUES ('68', '330281196402081002', '1', '1506256223', '1506256227');
INSERT INTO `historyperson` VALUES ('69', '330281196402081002', '1', '1506256337', '1506256391');
INSERT INTO `historyperson` VALUES ('70', '330281197605051004', '1', '1506256338', '1506256393');
INSERT INTO `historyperson` VALUES ('71', '330281198701011234', '1', '1506256340', '1506256395');
INSERT INTO `historyperson` VALUES ('72', '330281199608061001', '1', '1506256342', '1506256396');
INSERT INTO `historyperson` VALUES ('73', '330281196402081002', '1', '1506256433', '1506256454');
INSERT INTO `historyperson` VALUES ('74', '330281197605051004', '1', '1506256435', '1506256456');
INSERT INTO `historyperson` VALUES ('75', '330281198701011234', '1', '1506256437', '1506256457');
INSERT INTO `historyperson` VALUES ('76', '330281199608061001', '1', '1506256438', '1506256462');
INSERT INTO `historyperson` VALUES ('77', '330281199608061001', '4', '1483423200', '1483424000');
INSERT INTO `historyperson` VALUES ('78', '330281197605051004', '4', '1486101600', '1486103000');
INSERT INTO `historyperson` VALUES ('79', '330281198701011234', '4', '1488520800', '1488521000');
INSERT INTO `historyperson` VALUES ('80', '330281199608061001', '4', '1491300000', '1491300100');
INSERT INTO `historyperson` VALUES ('81', '330281198701011234', '4', '1493892000', '1493892100');
INSERT INTO `historyperson` VALUES ('82', '330281196402081002', '4', '1496570400', '1496571400');
INSERT INTO `historyperson` VALUES ('83', '330281198701011234', '4', '1499162400', '1499162500');

-- ----------------------------
-- Table structure for h_go
-- ----------------------------
DROP TABLE IF EXISTS `h_go`;
CREATE TABLE `h_go` (
  `u_id` int(11) NOT NULL,
  `t_id` int(11) NOT NULL,
  `score` float(11,1) NOT NULL,
  `price` float(11,1) NOT NULL,
  `service` float(11,1) NOT NULL,
  `environment` float(11,1) NOT NULL,
  `traffic` float(11,1) NOT NULL,
  PRIMARY KEY (`u_id`,`t_id`),
  KEY `t_id5` (`t_id`),
  CONSTRAINT `t_id5` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id3` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of h_go
-- ----------------------------
INSERT INTO `h_go` VALUES ('1', '1', '4.7', '4.6', '4.4', '4.4', '4.7');
INSERT INTO `h_go` VALUES ('1', '2', '4.6', '4.6', '4.1', '3.9', '4.5');
INSERT INTO `h_go` VALUES ('1', '3', '4.5', '4.1', '3.8', '4.9', '4.5');
INSERT INTO `h_go` VALUES ('1', '4', '4.7', '4.2', '4.3', '4.4', '4.6');
INSERT INTO `h_go` VALUES ('1', '5', '4.0', '4.1', '4.3', '4.7', '4.8');
INSERT INTO `h_go` VALUES ('1', '6', '3.5', '4.2', '4.7', '4.3', '4.1');
INSERT INTO `h_go` VALUES ('1', '7', '4.2', '4.3', '4.7', '4.8', '4.1');
INSERT INTO `h_go` VALUES ('2', '1', '5.0', '4.3', '4.6', '4.2', '4.1');
INSERT INTO `h_go` VALUES ('2', '2', '4.2', '4.8', '4.3', '4.1', '4.2');
INSERT INTO `h_go` VALUES ('2', '8', '3.8', '4.5', '4.2', '4.3', '4.6');
INSERT INTO `h_go` VALUES ('2', '9', '4.2', '5.0', '4.6', '3.2', '4.1');
INSERT INTO `h_go` VALUES ('3', '1', '4.0', '4.1', '4.2', '4.3', '4.6');
INSERT INTO `h_go` VALUES ('3', '10', '4.1', '4.3', '4.8', '4.1', '3.2');

-- ----------------------------
-- Table structure for img
-- ----------------------------
DROP TABLE IF EXISTS `img`;
CREATE TABLE `img` (
  `i_id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  PRIMARY KEY (`i_id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of img
-- ----------------------------
INSERT INTO `img` VALUES ('1', './Uploads/img/201708/28/e1b5472607c0c936bbb30dc496c1c9e7Wx800.jpg');
INSERT INTO `img` VALUES ('2', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('3', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('4', './Uploads/img/201708/28/e1b5472607c0c936bbb30dc496c1c9e7Wx800.jpg');
INSERT INTO `img` VALUES ('5', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('6', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('7', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('8', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('9', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('10', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('11', './Uploads/img/201708/28/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('12', './Uploads/img/201708/29/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('13', './Uploads/img/201708/29/e1b5472607c0c936bbb30dc496c1c9e7Wx800.jpg');
INSERT INTO `img` VALUES ('14', './Uploads/img/201708/29/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('15', './Uploads/img/201708/29/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('16', './Uploads/img/201708/29/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('17', './Uploads/img/201708/29/e738226efe9f0d5e36a4bd5e27a61cd6Wx800.jpg');
INSERT INTO `img` VALUES ('18', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('19', './Uploads/img/201708/29/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('20', './Uploads/img/201708/29/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('21', './Uploads/img/201708/29/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('22', './Uploads/img/201708/29/9228ef63252febc0d41212dc9f1c4c3fWx800.png');
INSERT INTO `img` VALUES ('23', './Uploads/img/201708/29/8447eefa041b457bf9a64098a02eaf27Wx800.png');
INSERT INTO `img` VALUES ('24', './Uploads/img/201708/29/8447eefa041b457bf9a64098a02eaf27Wx800.png');
INSERT INTO `img` VALUES ('25', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('26', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('27', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('28', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('29', './Uploads/img/201708/29/9170119e45405588224441ddf456f02fWx800.png');
INSERT INTO `img` VALUES ('30', './Uploads/img/201708/29/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('31', './Uploads/img/201708/29/9170119e45405588224441ddf456f02fWx800.png');
INSERT INTO `img` VALUES ('32', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('33', './Uploads/img/201708/29/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('34', './Uploads/img/201708/29/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('35', './Uploads/img/201708/29/d735d5656bae30797aa468b98eb9d996Wx800.png');
INSERT INTO `img` VALUES ('36', './Uploads/img/201708/29/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('37', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('38', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('39', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('40', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('41', './Uploads/img/201708/30/8e6d3fd2e7fff92eeced670d7c9ba96aWx800.png');
INSERT INTO `img` VALUES ('42', './Uploads/img/201708/30/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('43', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('44', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872Wx800.jpg');
INSERT INTO `img` VALUES ('45', './Uploads/img/201708/30/0a1265176370236d03430795b01fa590Wx800.jpg');
INSERT INTO `img` VALUES ('46', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388beWx800.jpg');
INSERT INTO `img` VALUES ('47', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('48', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('49', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('50', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('51', './Uploads/img/201708/30/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('52', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('53', './Uploads/img/201708/30/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('54', './Uploads/img/201708/30/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('55', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('56', './Uploads/img/201708/30/b29081defe869727077e2b221d25146f.png');
INSERT INTO `img` VALUES ('57', './Uploads/img/201708/30/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('58', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('59', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('60', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('61', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('62', './Uploads/img/201709/01/8e6d3fd2e7fff92eeced670d7c9ba96a.png');
INSERT INTO `img` VALUES ('63', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('64', './Uploads/img/201709/01/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('65', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('66', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('67', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('68', './Uploads/img/201709/01/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('69', './Uploads/img/201709/01/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('70', './Uploads/img/201709/03/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('71', './Uploads/img/201709/04/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('72', './Uploads/img/201709/04/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('73', './Uploads/img/201709/04/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('74', './Uploads/img/201709/05/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('75', './Uploads/img/201709/05/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('76', './Uploads/img/201709/05/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('77', './Uploads/img/201709/05/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('78', './Uploads/img/201709/05/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('79', './Uploads/img/201709/10/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('80', './Uploads/img/201709/10/0a1265176370236d03430795b01fa590.jpg');
INSERT INTO `img` VALUES ('81', './Uploads/img/201709/10/e1d1d89fbca355856ba9e85ce3dc9e9a.jpg');
INSERT INTO `img` VALUES ('82', './Uploads/img/201709/10/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('83', './Uploads/img/201709/11/b1e5c5aa4344f46f571d5e3469a9a64d.jpg');
INSERT INTO `img` VALUES ('84', './Uploads/img/201709/11/30a6d81cc065103a5d5fe5c6e56388be.jpg');
INSERT INTO `img` VALUES ('85', './Uploads/img/201709/11/a79ab9bd7752994dc26c0f44057e1b49.jpg');
INSERT INTO `img` VALUES ('86', './Uploads/img/201709/11/c7ae5e0774b46eb7cdeebae1f9bb9bc8.jpg');
INSERT INTO `img` VALUES ('87', './Uploads/img/201709/11/53db31b42b12cd6fb07ad7c2ded20fcc.jpg');
INSERT INTO `img` VALUES ('88', './Uploads/img/201709/18/5b502bf713757715cfc03f24e82f7f6b.jpg');
INSERT INTO `img` VALUES ('89', './Uploads/img/201709/18/fe729339478b6fecdcf2a55f482158c5.jpg');
INSERT INTO `img` VALUES ('90', './Uploads/img/201709/18/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('91', './Uploads/img/201709/18/784d51b99a791de77f5e083751c28798.jpg');
INSERT INTO `img` VALUES ('92', './Uploads/img/201709/18/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('93', './Uploads/img/201709/18/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('94', './Uploads/img/201709/18/9aaad6963f5b4ce3a8b31598b11476c9.jpg');
INSERT INTO `img` VALUES ('95', './Uploads/img/201709/18/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('96', './Uploads/img/201709/18/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('97', './Uploads/img/201709/19/a23d1dace0f3d768a876c75a680d5a95.jpg');
INSERT INTO `img` VALUES ('98', './Uploads/img/201709/19/56111b5e99ecd77e8f3119d29a435f6b.jpg');
INSERT INTO `img` VALUES ('99', './Uploads/img/201709/19/ef36d2d022de1ffc41acb7469b6de0a6.jpg');
INSERT INTO `img` VALUES ('100', './Uploads/img/201709/19/aca51f3b14c2b40a60527a4f0daf9d60.jpg');
INSERT INTO `img` VALUES ('101', './Uploads/img/201709/20/39e20a8c6d81a383a1f6102a7a5a37e4.jpg');
INSERT INTO `img` VALUES ('102', './Uploads/img/201709/20/a3d01eea3f054fc9efd14bb4ce4d7274.jpg');
INSERT INTO `img` VALUES ('103', './Uploads/img/201709/20/a6f914a030e09abc6a0a82b05e023872.jpg');
INSERT INTO `img` VALUES ('104', './Uploads/img/201709/20/a3d01eea3f054fc9efd14bb4ce4d7274.jpg');
INSERT INTO `img` VALUES ('105', './Uploads/img/201709/20/5b502bf713757715cfc03f24e82f7f6b.jpg');
INSERT INTO `img` VALUES ('106', './Uploads/img/201709/20/fe729339478b6fecdcf2a55f482158c5.jpg');
INSERT INTO `img` VALUES ('107', './Uploads/img/201709/20/fe729339478b6fecdcf2a55f482158c5.jpg');
INSERT INTO `img` VALUES ('108', './Uploads/img/201709/20/c381aca575a7356087b984f5b035eb38.jpg');
INSERT INTO `img` VALUES ('109', './Uploads/img/201709/20/d82b11e266f273837de2f62227d439dd.jpg');
INSERT INTO `img` VALUES ('110', './Uploads/img/201709/20/c381aca575a7356087b984f5b035eb38.jpg');
INSERT INTO `img` VALUES ('111', './Uploads/img/201709/20/e738226efe9f0d5e36a4bd5e27a61cd6.jpg');
INSERT INTO `img` VALUES ('112', './Uploads/img/201709/24/e1d1d89fbca355856ba9e85ce3dc9e9a.jpg');
INSERT INTO `img` VALUES ('113', './Uploads/img/201709/24/298ad0e5e102b49a5a9132ff0bfb07ad.jpg');
INSERT INTO `img` VALUES ('114', './Uploads/img/201709/24/298ad0e5e102b49a5a9132ff0bfb07ad.jpg');
INSERT INTO `img` VALUES ('115', './Uploads/img/201709/24/298ad0e5e102b49a5a9132ff0bfb07ad.jpg');
INSERT INTO `img` VALUES ('116', './Uploads/img/201709/24/298ad0e5e102b49a5a9132ff0bfb07ad.jpg');
INSERT INTO `img` VALUES ('117', './Uploads/img/201709/24/fd2af7c22a0dbe5a8db866c1c60252c7.jpg');
INSERT INTO `img` VALUES ('118', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('119', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('120', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('121', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('122', './Uploads/img/201709/24/d82b11e266f273837de2f62227d439dd.jpg');
INSERT INTO `img` VALUES ('123', './Uploads/img/201709/24/39e20a8c6d81a383a1f6102a7a5a37e4.jpg');
INSERT INTO `img` VALUES ('124', './Uploads/img/201709/24/fe729339478b6fecdcf2a55f482158c5.jpg');
INSERT INTO `img` VALUES ('125', './Uploads/img/201709/24/8900734774f19e1c987bbc92aeb70f22.jpg');
INSERT INTO `img` VALUES ('126', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('127', './Uploads/img/201709/24/273e1f25411b9d7c82ec2969b86932da.jpg');
INSERT INTO `img` VALUES ('128', './Uploads/img/201709/24/3430818ee79c7a0cac85b9068b63ef46.jpg');
INSERT INTO `img` VALUES ('129', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg');
INSERT INTO `img` VALUES ('130', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('131', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('132', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('133', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('134', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('135', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg');
INSERT INTO `img` VALUES ('136', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg');
INSERT INTO `img` VALUES ('137', './Uploads/img/201709/24/86058db7b7d612ba6db7dfad7633a484.jpg');
INSERT INTO `img` VALUES ('138', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');
INSERT INTO `img` VALUES ('139', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_type` varchar(20) NOT NULL,
  `menu_title` varchar(20) NOT NULL,
  `menu_imgurl` varchar(255) DEFAULT NULL,
  `menu_content` text,
  `t_id` int(11) NOT NULL,
  `timestamp` int(20) NOT NULL,
  PRIMARY KEY (`menu_id`),
  KEY `t_id2` (`t_id`),
  CONSTRAINT `t_id2` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', 'custom', '拦路酒', 'images/lanlujiu.jpg', '苗寨的习俗是以酒待客，刚进寨门会遇到拦路酒，最隆重的拦路酒有12道之多。倘若你不是个“酒鬼”，那么切记喝牛角酒的时不要用双手来接，只要礼节性的抿一小口就可以了，如果用手接了过来，你就得把整个牛角的酒一口喝干。苗家人认为酒喝得越多，就越给主人面子，因此到了苗寨，酒量有限的可事先向主人说明。', '4', '1503307717');
INSERT INTO `menu` VALUES ('2', 'custom', '苗年', 'images/miaonian.jpg', '十一月是稻谷收割完成的季节，苗家人把这个季节当成一年的完结，苗年由此而来。西江千户苗寨既是歌的故乡，亦是舞的海洋，在这个盛大欢乐的日子里，整个寨子的人用歌舞表达出喜悦。', '4', '1503307717');
INSERT INTO `menu` VALUES ('3', 'history', '千年古寨', 'images/guzhai.jpeg', '西江苗族最早约在西汉汉文帝时迁徙到这里的，距今也有1800多年的历史了，所以西江苗寨也可以叫做千年古寨。在距今640年到670年就形成了如今两座山头的建筑规模。西江另称千户苗寨，因为到目前为止，西江已有1285户人家，接近6000余人生活在这里，皆为苗族同胞。这里是中国最大的苗寨，也是全世界最大的苗寨。西江历史悠久，汉朝时称“鸡江”，清朝雍正建置后称“鸡讲”，乾隆三年置鸡讲司，后在民国时期当地的绅士，寨老们觉得鸡讲这个名称不够雅观，因此而改称“西江”。', '4', '1503307717');
INSERT INTO `menu` VALUES ('4', 'history', '中华美人谷', 'images/meirengu.jpg', '谈到西江，还有一个鲜为人知的故事，那就是为什么西江出美女，人们为何会称它为“中华美人谷”。原来，西江是由四个行政村寨组成的，而四个寨中是互不通婚的，寨上规定女儿必须外嫁，媳妇必须是其它地方接过来的，否则，男女都会受到家庭的惩罚，他们的祖先在两千多年前就懂得优生优育的这个道理了，而汉族是在新中国成立以后才完善了这一思维，从这个角度看，苗族也是一个聪明并美丽的民族。', '4', '1503307717');
INSERT INTO `menu` VALUES ('5', 'dress', '服饰', 'images/fushi.jpg', '千户苗寨的苗族服饰是黔东南苗饰的典型代表，银饰工艺巧夺天工，有银冠、银珈、项圈、 披肩、项链、牙签、髻簪、耳环、手镯、戒指等。讲究形美、色明、声脆、实用。苗族服饰经过种麻、收麻、绩麻、纺线、漂白、织布等一系列复杂的工艺到刺绣、蜡染、裁缝，最后成为一套精美的服装，无不反映了苗族妇女的勤劳和耐性。 ', '4', '1503307717');
INSERT INTO `menu` VALUES ('6', 'building', '吊脚楼', 'images/diaojiaolou.jpg', '西江苗族吊脚楼源于上古居民的南方干栏式建筑，运用长方形、三角形、菱形等多重结构的组合，构成三维空间的网络体系，与周围的青山绿水和田园风光融为一体，和谐统一，相得益彰，是中华上古居民建筑的活化石；在建筑学等方面具有很高的美学价值。反映苗族居民珍惜土地、节约用地的民族心理，在我国当前人多地少的形势下具有积极的教育意义。上梁的祝辞和立房歌，具有浓厚的苗族宗教文化色彩。是苗族传统文化重要的承载者。', '4', '1503307717');
INSERT INTO `menu` VALUES ('7', 'building', '风雨桥', 'images/fengyuqiao.jpg', '出于改善村寨风水条件和方便居民生活考虑，多数苗寨在村寨附近建有风雨桥，以关风蓄气和挡风遮雨。西江以前有风雨木桥，主要有平寨通往欧嘎的平寨风雨桥和南贵村关锁整个西江大寨风水的南寿风雨桥。由于是木质结构，几经修复又被洪水冲毁。2008年西江修建的风雨桥有五座，现所修建的风雨桥全采用水泥和木材的混合结构，使得风雨桥的坚实性和抵御洪水的能力大大增加。', '4', '1503307717');
INSERT INTO `menu` VALUES ('8', 'diet', '酸汤鱼', 'images/suantangyu.jpg', '酸汤鱼，苗族独有的食品，入口酸味鲜美，辣劲十足，令人胃口大开。一般是先加入特产糟辣椒和本地许多有营养的中草药，借番茄酸烹出自然酸汤，然后将清洗的活鱼下锅煮。酸汤是用烧开的米泔水酿制而成的，上好的酸汤应为白色。清酸汤味酸而清香，但醇厚味略差些，另加上用西红柿泡制的红酸汤，味道就更加完美了。如再加些黄豆芽、小竹笋和野葱作辅料，说到酸汤鱼，不能不提到酸汤。到贵州，不能不吃酸汤鱼。', '4', '1503307717');
INSERT INTO `menu` VALUES ('9', 'diet', '鼓藏肉', 'images/guzangrou.jpg', '鼓藏肉是苗家在过十三年一次鼓藏节时少不了的一道菜，鼓藏肉寓意着“金银财富”，每当过鼓藏节时大家都会带着充满神秘的“鼓藏语”在祝福和劝酒声中“大称分金，小称分银，大块吃肉，大碗喝酒”。苗家有这样一句俗语：“过这十三年一次鼓藏节，吃肉就要吃一坨坨，喝酒也要喝一碗碗”。', '4', '1503307717');
INSERT INTO `menu` VALUES ('10', 'diet', '苗王鱼', 'images/miaowangyu.jpg', '这是苗家宴请客人的名菜。苗王鱼味美肉鲜，许多外国游客吃后都称赞“到西江不吃苗王鱼等于到北京不吃北京烤鸭一样会终身遗憾”！', '4', '1503307717');
INSERT INTO `menu` VALUES ('12', 'custom', '歌圩', 'images/gexu.jpg', '壮族人民能歌善唱，右江一带称为“欢”，左江一带称为“诗”，桂北一带称为“比”和“欢”，都是唱山歌的意思。有定期举行的唱山歌会，称为歌圩。歌圩日期各地不同。以农历三月初三为最隆重。大山歌圩有万人以上参加。内容有请歌、求歌、激歌、对歌、客气歌、推歌、盘歌、点更歌、离别歌、情歌、送歌等。歌圩期间，还举行男女间的抛绣球、“碰蛋”等娱乐活动。这期间，各家各户吃五色糯米饭。过去，壮族一年种一造（即一季）水稻，三月初三是备耕时间，歌圩是为春耕农忙做物质的和精神的准备。吃五色饭、五色蛋，是预祝五谷丰登的意思。', '1', '1503307717');
INSERT INTO `menu` VALUES ('13', 'buliding', '干栏', 'images/ganlan.jpg', '居住在坝区和城镇附近的壮族，其房屋多为砖木结构，外墙粉刷白灰，屋檐绘有装饰图案。居住在边远山区的壮族，其村落房舍则多数是土木结构的瓦房或草房，建筑式样一般有半干栏式和全地居式两种。干栏，也叫木楼、吊脚楼。一般干栏都依山傍水，面向田野。一个寨子一个群落，既雄伟又壮观。有些村寨，家家相通，连成一体，就像一个大家庭。居室格局，各处自有特点。', '1', '1503307717');
INSERT INTO `menu` VALUES ('14', 'history', '\"那\"文化之都', 'images/na.jpg', '隆安以稻神山为中心的罗兴江、渌水江、右江三角洲区域，旧石器时代和新石器时代的稻作生产、生活和文化的遗址众多，形成了独特的稻作历史文化遗址景观，学术界认定为我国栽培稻的重要起源地之一。远古时，壮族先民古骆越人在这一区域因地制宜创造了“依潮水上下”而耕作的“雒田”生产方式，开辟了我国最早的有相当耕作规模和完备灌溉系统的水稻田，创造了石器时代稻作生产的专门工具大石铲，形成了许多流传至今的具有独特风情的稻神祭祀习俗和生产生活民俗，成为壮族标志性的稻作农业历史文化景观。', '1', '1503307717');
INSERT INTO `menu` VALUES ('15', 'dress', '服饰', 'images/longan-fushi.jpg', '壮族妇女擅长纺织和刺绣，所织的壮布和壮锦，均以图案精美和色彩艳丽著称，还有风 格别致的“蜡染”也为人们所称道。在服饰上男子与汉族无多大区别，女子则多姿多彩，特别喜欢在鞋、帽、胸兜上用五色丝线绣上花纹，人物、鸟兽、花卉，五花八门，色彩斑斓。', '1', '1503307717');
INSERT INTO `menu` VALUES ('16', 'diet', '五花饭', 'images/wuhuafan.jpg', '“五花饭”分天然色、黄色、黑色、红色、紫色，均选用天然植物提取色素，配以隆安特产“香糯米”精工制作而成，产品色泽鲜艳，清香透亮，食用时用温水浸泡产品五分钟，入锅或炉蒸软，取出可调入蜂蜜或香葱、麻油等配料食用，柔软爽口、花香四溢。每年清明前后，广西山区温热瘴痧气衍生，壮族先人选用具有清热解毒、祛湿、生津并且色彩艳丽的天然保健植物，制成五色饭，全族老幼欢聚食用，有喜庆、保健的意义，是集美食、保健于一体的民族传统食品。', '1', '1503307717');
INSERT INTO `menu` VALUES ('17', 'diet', '布泉酸鱼', 'images/buquansuanyu.jpg', '布泉酸鱼是广西壮族自治区南宁市隆安县南圩镇布泉乡的一道当地特色美食，酸爽可口，是夏季很好的一道开胃菜，正宗的酸鱼，是选用新鲜的布泉河鱼精心腌制而成的，开盖即可食用。上好的酸鱼有些发白，鱼腥被酸味中和殆尽，而更强化了鱼的鲜味。细细咀嚼，鱼肉软而不酥，略有韧性，很有嚼头；味道酸中微咸，使人回味无穷。', '1', '1503307717');
INSERT INTO `menu` VALUES ('18', 'artwork', '绣球', 'images/xiuqiu.jpg', '绣球是壮族男女表达爱慕之情的信物。每逢春节、三月三、中秋节等传统佳节，壮族青年男女相邀会集村边、野外，分成男女两方对歌。对歌中，男女双方相互越来越了解，姑娘们会把手中的绣球掷向自己中意的小伙子。小伙子接住绣球欣赏品味一番后又向姑娘抛回去。经过数次往返抛接，如果小伙子看上这位姑娘，就在绣球上系上自己的小礼物，抛回馈赠女方。姑娘若收下小伙子的礼物，即表示接受小伙子的追求。', '1', '1503307717');
INSERT INTO `menu` VALUES ('19', 'diet', '米花饭', 'images/mihuafan.jpg', '首先上好的糯米淘净晒干，同时到山里采摘各种有利于身体的植物熬成红、黄、蓝、橙、黑等颜色，之后将洗净的糯米分别浸泡于各类植物染料中，待各种鲜艳的色彩已深深浸透米质，米的颜色已彻底改变，再将它拿到水边淘洗干净，然后放到甄子里蒸熟。此时，满甄子红、黄、蓝、橙、黑，鲜艳的色彩在浓浓蒸气中熠熠闪烁，纯粹的香味满屋飘溢。面对如此色鲜味美的食物，即使你酒饱饭足，也禁不住要尝上几口。', '4', '1503307717');
INSERT INTO `menu` VALUES ('20', 'diet', '折耳根炒腊肉', 'images/zheergen.jpeg', '说折耳根的话，很多人都不熟悉，如果告诉你其实折耳根就是鱼腥草的根，是不是就如雷贯耳了？与别的地方用鱼腥草的叶做菜不同，在贵州多半用的是它的根。很细很长的浅白色茎状物，吃起来粉粉的，炒熟了以后腥味没那么重，不习惯的人还是能嚼得出来。腊肉也是从贵州运来的土法腌制的腊肉，肉色明显比市面上看到的更深，尤其是边缘较硬的一圈。有点发紫的腊肉喷香浓郁。', '4', '1503307717');
INSERT INTO `menu` VALUES ('21', 'diet', '米豆腐', 'images/midoufu.jpg', '米豆腐是湘黔川鄂地区著名的小吃。它是用大米淘洗浸泡后加水磨成米浆，然后加碱熬制，冷却，形成块状“豆腐”即成。食用时切成小片放入凉水中再捞出，盛入容器后，将切好的大头菜、盐菜、酥黄豆、酥花生、葱花等适合个人味口的不同佐料末与汤汁放于米豆腐上即可。', '4', '1503307717');
INSERT INTO `menu` VALUES ('23', 'artwork', '手工刺绣', './Uploads/img/201709/24/466191da86bf0dbf8fa0af737e1cf1e2.jpg', '手工刺绣是苗族的一种传统手工艺品，做工为纯手工，花草虫鱼，动物，植物，自然山水，都可以通过灵巧的手变成绣品上的景致。', '4', '1506253691');

-- ----------------------------
-- Table structure for menu_judge
-- ----------------------------
DROP TABLE IF EXISTS `menu_judge`;
CREATE TABLE `menu_judge` (
  `mj_id` int(11) NOT NULL AUTO_INCREMENT,
  `mj_type` varchar(20) NOT NULL,
  `mj_title` varchar(20) NOT NULL,
  `mj_imgurl` varchar(255) DEFAULT NULL,
  `mj_content` varchar(255) NOT NULL,
  `mj_ispass` varchar(20) NOT NULL,
  `t_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `position` varchar(30) NOT NULL,
  `timestamp` int(20) NOT NULL,
  PRIMARY KEY (`mj_id`),
  KEY `t_id3` (`t_id`),
  KEY `u_id5` (`u_id`),
  CONSTRAINT `t_id3` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id5` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu_judge
-- ----------------------------

-- ----------------------------
-- Table structure for nation
-- ----------------------------
DROP TABLE IF EXISTS `nation`;
CREATE TABLE `nation` (
  `n_id` int(11) NOT NULL,
  `n_name` varchar(20) NOT NULL,
  `color` varchar(20) NOT NULL,
  `p_id` int(11) NOT NULL,
  PRIMARY KEY (`n_id`),
  KEY `p_id1` (`p_id`),
  CONSTRAINT `p_id1` FOREIGN KEY (`p_id`) REFERENCES `province` (`p_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nation
-- ----------------------------
INSERT INTO `nation` VALUES ('1', '壮族', '#d64444', '1');
INSERT INTO `nation` VALUES ('2', '布依族', '#e28f53', '2');
INSERT INTO `nation` VALUES ('3', '侗族', '#d2b650', '2');
INSERT INTO `nation` VALUES ('4', '苗族', '#4aad8d', '2');
INSERT INTO `nation` VALUES ('5', '水族', '#4a88ad', '3');
INSERT INTO `nation` VALUES ('6', '黎族', '#6d679c', '4');
INSERT INTO `nation` VALUES ('7', '土家族', '#a65b8f', '5');
INSERT INTO `nation` VALUES ('8', '朝鲜族', '#b16767', '6');
INSERT INTO `nation` VALUES ('9', '满族', '#a6c7a5', '7');
INSERT INTO `nation` VALUES ('10', '蒙古族', '#afb193', '8');
INSERT INTO `nation` VALUES ('11', '回族', '#f59450', '9');
INSERT INTO `nation` VALUES ('12', '高山族', '#565ebd', '10');
INSERT INTO `nation` VALUES ('13', '藏族', '#7278c3', '11');
INSERT INTO `nation` VALUES ('14', '维吾尔族', '#c198e0', '12');
INSERT INTO `nation` VALUES ('15', '哈萨克族', '#c74a4a', '13');
INSERT INTO `nation` VALUES ('16', '白族', '#329c5d', '2');
INSERT INTO `nation` VALUES ('17', '傣族', '#eadb21', '3');
INSERT INTO `nation` VALUES ('18', '哈尼族', '#d22e2e', '3');
INSERT INTO `nation` VALUES ('19', '彝族', '#4caf50', '3');

-- ----------------------------
-- Table structure for people
-- ----------------------------
DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `person_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of people
-- ----------------------------
INSERT INTO `people` VALUES ('330281196402081002', '张丽丽', '女', '53', 'images/2.jpg');
INSERT INTO `people` VALUES ('330281197605051004', '陈晓', '女', '41', 'images/4.jpg');
INSERT INTO `people` VALUES ('330281198701011234', '敏敏', '女', '30', 'images/1.jpg');
INSERT INTO `people` VALUES ('330281199608061001', '赵六', '男', '21', 'images/3.jpg');
INSERT INTO `people` VALUES ('330281199701011001', '张三', '男', '20', 'images/head.jpg');
INSERT INTO `people` VALUES ('330281199701011008', '王五', '男', '20', 'images/head.jpg');
INSERT INTO `people` VALUES ('330281199701161002', '李四', '男', '20', 'images/head.jpg');
INSERT INTO `people` VALUES ('330281199701181003', '小红', '女', '20', 'images/head.jpg');
INSERT INTO `people` VALUES ('330281199909011003', '李华', '男', '18', 'images/head.jpg');

-- ----------------------------
-- Table structure for province
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `p_id` int(11) NOT NULL,
  `p_name` varchar(20) NOT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', '广西省');
INSERT INTO `province` VALUES ('2', '贵州省');
INSERT INTO `province` VALUES ('3', '云南省');
INSERT INTO `province` VALUES ('4', '海南省');
INSERT INTO `province` VALUES ('5', '湖南省');
INSERT INTO `province` VALUES ('6', '吉林省');
INSERT INTO `province` VALUES ('7', '辽宁省');
INSERT INTO `province` VALUES ('8', '内蒙古自治区');
INSERT INTO `province` VALUES ('9', '宁夏自治区');
INSERT INTO `province` VALUES ('10', '福建省');
INSERT INTO `province` VALUES ('11', '西藏自治区');
INSERT INTO `province` VALUES ('12', '新疆省');
INSERT INTO `province` VALUES ('13', '甘肃省');

-- ----------------------------
-- Table structure for todayperson
-- ----------------------------
DROP TABLE IF EXISTS `todayperson`;
CREATE TABLE `todayperson` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `person_id` bigint(20) NOT NULL,
  `t_id` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `person_id1` (`person_id`),
  KEY `t_id10` (`t_id`),
  CONSTRAINT `person_id1` FOREIGN KEY (`person_id`) REFERENCES `people` (`person_id`) ON DELETE CASCADE,
  CONSTRAINT `t_id10` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todayperson
-- ----------------------------
INSERT INTO `todayperson` VALUES ('1', '330281199701011001', '1', '1505883637');

-- ----------------------------
-- Table structure for touristarea
-- ----------------------------
DROP TABLE IF EXISTS `touristarea`;
CREATE TABLE `touristarea` (
  `t_id` int(11) NOT NULL,
  `t_name` varchar(20) NOT NULL,
  `t_renwen` varchar(255) NOT NULL,
  `t_yinshi` varchar(255) NOT NULL,
  `t_jianzhu` varchar(255) NOT NULL,
  `t_youji` varchar(255) DEFAULT NULL,
  `t_cardimg` varchar(20) DEFAULT NULL,
  `longitude` double(20,10) unsigned zerofill NOT NULL,
  `latitude` double(20,10) NOT NULL,
  `n_id` int(11) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  PRIMARY KEY (`t_id`),
  KEY `n_id1` (`n_id`),
  CONSTRAINT `n_id1` FOREIGN KEY (`n_id`) REFERENCES `nation` (`n_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of touristarea
-- ----------------------------
INSERT INTO `touristarea` VALUES ('1', '隆安县', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000107.8655910000', '23.0087570000', '1', '1505122111', '2');
INSERT INTO `touristarea` VALUES ('2', '玉岗村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000106.8927460000', '26.7826710000', '2', '1504099236', '4');
INSERT INTO `touristarea` VALUES ('3', '高定村', './Uploads/img/201709/24/298ad0e5e102b49a5a9132ff0bfb07ad.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000109.4811490000', '25.9850500000', '3', '1506233999', '3');
INSERT INTO `touristarea` VALUES ('4', '西江千户苗寨', './Uploads/img/201709/24/b1acf4dd5bf8fcca64a9e7b014c78080.jpg', 'images/xijiang-yinshi.jpg', 'images/xijiang-jianzhu.jpeg', 'images/xijiang-youji.jpeg', 'images/xijiang.jpeg', '000000108.1745400000', '26.4933920000', '4', '1506257004', '1');
INSERT INTO `touristarea` VALUES ('5', '古敢水族乡', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000104.8014560000', '25.2184610000', '5', '1503047159', '7');
INSERT INTO `touristarea` VALUES ('6', '什运乡', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000109.6079590000', '18.9920170000', '6', '1503047159', '9');
INSERT INTO `touristarea` VALUES ('7', '永顺县双凤村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000109.7520000000', '28.9718000000', '7', '1503047159', '10');
INSERT INTO `touristarea` VALUES ('8', '金达莱民俗村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000129.0808390000', '42.6885460000', '8', '1503047159', '8');
INSERT INTO `touristarea` VALUES ('9', '赫图阿拉村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000124.8613910000', '41.7054300000', '9', '1503047159', '5');
INSERT INTO `touristarea` VALUES ('10', '西乌素图村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000111.5662810000', '40.8333550000', '10', '1503047159', '6');
INSERT INTO `touristarea` VALUES ('11', '塔桥村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000106.3039580000', '38.4228730000', '11', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('12', '松坑村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000117.6905780000', '25.0351080000', '12', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('13', '达东村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000091.0326010000', '29.5143470000', '13', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('14', '麻扎村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000089.6928800000', '42.8566270000', '14', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('15', '红柳湾村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000094.3400100000', '39.6356000000', '15', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('16', '木寨村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000105.6355340000', '27.3506140000', '16', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('17', '曼滩村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000101.5571200000', '22.4275630000', '17', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('18', '阿撒村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000102.3932820000', '23.2243180000', '18', '1503047159', '0');
INSERT INTO `touristarea` VALUES ('19', '红万村', 'images/longan-renwen.jpg', 'images/longan-yinshi.jpg', 'images/longan-jianzhu.jpg', 'images/longan-youji.jpg', 'images/longan.jpg', '000000103.2695800000', '24.3896300000', '19', '1503047159', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `u_id` int(11) NOT NULL,
  `u_name` varchar(20) NOT NULL,
  `u_password` int(11) NOT NULL,
  `u_avatar` varchar(20) NOT NULL,
  `sex` varchar(5) NOT NULL,
  `hobby` varchar(30) NOT NULL,
  `backimg` varchar(20) NOT NULL,
  `sign` varchar(20) NOT NULL,
  `timestamp` int(20) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '李华', '123456', 'images/3.jpg', '男', '写作', 'images/homepage.jpg', '今天天气真不错', '1503307717');
INSERT INTO `user` VALUES ('2', 'cxh', '123456', 'images/1.jpg', '女', '写作;阅读', 'images/homepage.jpg', '啦啦啦啦啦啦啦', '1503307717');
INSERT INTO `user` VALUES ('3', 'hdd', '123456', 'images/2.jpg', '男', '美食', 'images/homepage.jpg', '我不管，我最酷', '1503307717');

-- ----------------------------
-- Table structure for w_go
-- ----------------------------
DROP TABLE IF EXISTS `w_go`;
CREATE TABLE `w_go` (
  `u_id` int(11) NOT NULL,
  `t_id` int(11) NOT NULL,
  PRIMARY KEY (`u_id`,`t_id`),
  KEY `t_id6` (`t_id`),
  CONSTRAINT `t_id6` FOREIGN KEY (`t_id`) REFERENCES `touristarea` (`t_id`) ON DELETE CASCADE,
  CONSTRAINT `u_id4` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_go
-- ----------------------------
INSERT INTO `w_go` VALUES ('1', '1');
INSERT INTO `w_go` VALUES ('1', '4');
