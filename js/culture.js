$(document).ready(function () {
var t_id = getQueryString("t_id");
var type = getQueryString("type");
var currentitemindex = 0;
//$(".one-add1").append($("<span class='filename' style='margin-left:44px;margin-right:30px;'>"+file.name+"</span><div class='layui-progress layui-progress-big' lay-showPercent='yes' style='display:inline-block;width:30%;margin-top:-18px'><div class='layui-progress-bar layui-bg-green progressbar' lay-percent='0%'></div></div><script>layui.use('element', function(){var element = layui.element;});</script>"));
// console.log(t_id)
// console.log(type);
$.get('index.php?c=Main&a=gettouristareabyid',{"t_id":t_id},res=>{
     console.log(res)
    let tour = res.body.touristarea;
    console.log(tour);
    let province = tour.p_name;
    let nation = tour.n_name;
    let touristarea = tour.t_name;
    $("#renwenimg").css("background","url("+tour.t_renwen+")");
    $("#renwenimg").css("background-size","100% 100%");
    $("#province").html(province);
    $("#nation").html(nation);
    $("#position").html(touristarea);
    $("#province-add").html(province);
    $("#nation-add").html(nation);
    $("#positon-add").html(touristarea);
    $("#menu-add").html("人文");
},"json");
$.get('index.php?c=Main&a=gettourmenu',{"t_id":t_id,"type":type},res=>{
   menu = res.body.menu;
   $(".content .secondLayer").html("");
   for(item of menu){
         if(item.menu_type == "custom"){
             $("#custom").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else if(item.menu_type == "history"){
            $("#history").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else if(item.menu_type == "dress"){
            $("#dress").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else{
            $("#artwork").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }
   }
   $(".content").each(function(index,item){
	console.log($(".content").eq(index).find(".secondLayer"));
	if($(".content").eq(index).find(".secondLayer").length === 0){
		$(".content").eq(index).find(".empty").show();
	}else{
		$(".content").eq(index).find(".empty").hide();
	}
});
},"json");


$('#add').click(function(){
	var menu2 = $(".menu-2 ul li").eq(currentitemindex).text();
	console.log(menu2)
	$('.theAddArea').show();
    $("#menu2-add").html(menu2);
    $("#menu-add").attr("type",$(".menu-2 ul li").eq(currentitemindex).attr("type"));
});
$('.empty-btn').click(function(){
	var menu2 = $(".menu-2 ul li").eq(currentitemindex).text();
	console.log(menu2)
	$('.theAddArea').show();
	$("#menu2-add").html(menu2)
});
$('#close').click(function(){
	$('.theAddArea').hide();
})

$(".menu-2 ul li").click(function(){
	currentitemindex = $(this).index();
	console.log(currentitemindex)
	$(".menu-2 ul li").css("border-bottom", "0px");
	$(this).css("border-bottom", "5px solid #0E6EB8");
	$(".content").hide();
	$(".content").eq(currentitemindex).show();
});
var itemnum = 1;

$('.plus').click(function(){
    itemnum++;
    console.log(itemnum)
    $('.addarea').append($("<div class='oneadd' id="+'oneadd'+itemnum+"><div class='add-num'>"+itemnum+"</div><div class='add-right'><input type='text' class='title-add' name='title-add' placeholder='请输入主题'><hr/><div class='box addOut'><div class='addImgArea'><span class='addImg icon-images'><img src=''></span><div id="+'uploadposition'+itemnum+" class='updateposition'><button  class='layui-btn layui-btn-big' style='width: 100px;height: 10px;' id="+'pickfiles'+itemnum+" href='javascript:;'>选择图片</button><button  class='layui-btn layui-btn-big' style='width: 100px;height: 10px;' id="+'uploadfiles'+itemnum+" href='javascript:;'>开始上传</button></div></div><div class='infoOut'><textarea class='info-add' placeholder='请输入文字介绍...'></textarea></div></div><div class='preimage box box-top guage'></div></div></div></div>"));
    createUploader(itemnum);

})
$('.minus').click(function(){
    if(itemnum==1){
        // alert("已经是最后一条");
        layui.use('layer', function(){
            var layer = layui.layer;
            
            layer.open({
                title: '提示'
                ,content: '已经是最后一条'
              });     
                
          }); 
    }else{
        itemnum--;
        console.log(itemnum);
        console.log( $('.oneadd').eq(itemnum));
        // debugger;
        $('.oneadd').eq(itemnum).remove();
    }
})
createUploader(itemnum);

/**
 * 批量添加菜单
 */

 $('#addmenu').click(function(){
     let data = {
         menulist:[],
     }
    let menulist = $(".oneadd");
    for(let i = 0;i<menulist.length;i++){
        console.log(menulist.eq(i).find(".title-add").val());
        console.log(menulist.eq(i).attr("imgpath"))
        if(menulist.eq(i).find(".title-add").val().length == 0||menulist.eq(i).find(".info-add").val().length == 0||typeof(menulist.eq(i).attr("imgpath"))=='undefined'){
            // alert("请填写完整信息");
            layui.use('layer', function(){
                var layer = layui.layer;
                
                layer.open({
                    title: '提示'
                    ,content: '请填写完整信息'
                  });     
                    
              }); 
        }else{
            let menu = { 
                "menu_type":$("#menu-add").attr("type"),
               "menu_title":menulist.eq(i).find(".title-add").val(),
               "menu_content":menulist.eq(i).find(".info-add").val(),
               "menu_imgurl":menulist.eq(i).attr("imgpath"),
               "position":$("#province-add").html()+"-"+$("#nation-add").html()+"-"+$("#positon-add").html()+"-"+$("#menu-add").html()+"-"+$("#menu2-add").html(),
               "t_id":t_id,
               };
           data.menulist.push(menu);   
           console.log(data);
        $.post("index.php?c=Main&a=useraddmenu",data,res=>{
          console.log(res);
        //   alert("添加成功");
        layui.use('layer', function(){
            var layer = layui.layer;
            
            layer.open({
                title: '提示'
                ,content: '已提交审核'
              });     
                
          }); 
          $(".addarea").empty();
          itemnum = 1;
          $(".addarea").append($("<div class='oneadd' id='oneadd1'><div class='add-num'>1</div><div class='add-right'><input type='text' class='title-add' name='title-add' placeholder='请输入主题'><hr/><div class='box addOut'><div class='addImgArea'><span class='addImg icon-images'><img src=''></span><div id='uploadposition1' class='updateposition'><button  class='layui-btn layui-btn-big' style='width: 100px;height: 10px;' id='pickfiles1' href='javascript:;'>选择图片</button><button  class='layui-btn layui-btn-big' style='width: 100px;height: 10px;' id='uploadfiles1' href='javascript:;'>开始上传</button></div></div><div class='infoOut'><textarea class='info-add' placeholder='请输入文字介绍...'></textarea></div></div><div class='preimage box box-top guage'></div></div></div></div>"));
          console.log($('.theAddArea'));
          $('.theAddArea').hide();
        },"json");
        }
    }

 });

/**
 * 创建pluploader对象并初始化
 */

function createUploader(itemnum){
    let uploader = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        browse_button : 'pickfiles'+itemnum, // you can pass an id...
        // container: document.getElementById('uploadposition'+itemnum), // ... or DOM Element itself
        url : 'index.php?c=index&a=uploadImglittlewater&width=800',
        flash_swf_url : 'js/plup/Moxie.swf',
        silverlight_xap_url : 'js/plup/Moxie.xap',
    
    
        filters : {
            max_file_size : '10mb',
            mime_types: [
                {title : "Image files", extensions : "jpg,gif,png"},
                {title : "Zip files", extensions : "zip"}
            ]
        },
    
        init: {
            PostInit: function() {
                document.getElementById('uploadfiles'+itemnum).onclick = function() {
                    uploader.start();
                    return false;
                };
            },
    
            FilesAdded: function(up, files) {
                plupload.each(files, function(file) {
                    $("#oneadd"+itemnum+" .preimage").append($("<span class='filename' style='margin-left:44px;margin-right:30px;'>"+file.name+"</span><div class='layui-progress layui-progress-big' lay-showPercent='yes' style='display:inline-block;width:30%;margin-top:-18px'><div class='layui-progress-bar layui-bg-green progressbar' lay-percent='0%'><span class='layui-progress-text'>0%</span></div></div><script>layui.use('element', function(){var element = layui.element;});</script>"));
                });
            },
    
            UploadProgress: function(up, file) {
                // console.log("11111")
                // console.log(file.percent);
                layui.use('element', function(){var element = layui.element;});
                $("#oneadd"+itemnum+" .progressbar").css("width",file.percent+'%');
                $("#oneadd"+itemnum+" .layui-progress-text").html(file.percent+'%');
            },
            FileUploaded: function(up, file, info) {
                layui.use('layer', function(){
                    var layer = layui.layer;
                    
                    layer.msg('上传成功');
                  });  
                var data = strToJson(info.response);
                console.log(data)
                $("#oneadd"+itemnum).attr("imgpath",data.body.file);
                $("#oneadd"+itemnum).find(".addImg").attr("class","addImg");
                $("#oneadd"+itemnum).find("img").attr("src",data.body.file);
            },
            Error: function(up, err) {
                document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
            }
        }
    });
    uploader.init();
}

/**
 * 字符串转json
 */

function strToJson(str){
    return JSON.parse(str);
}

/**
 * 得到url中的参数
 */

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// console.log($(".webfont").eq(0))

});

