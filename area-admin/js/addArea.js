$(document).ready(function () {
    console.log(geoCoordMap);
    //点击不同标签呈现不同样式

    $("#sign div:nth-child(n+2)").click(function () {
        $("#sign div:nth-child(n+3)").css("border-top","5px solid #FFFFFF");
        $(this).css("border-top","5px solid #3366FF");
        $("#content").hide();
        $("#detailPart").hide();
        $("#humanity").hide();
        $("#diet").hide();
        $("#build").hide();
    });
    $("#sign div:nth-child(2)").click(function () {
        $("#content").show();
        // $("#back div").css("margin-left","12%");
    });
    $("#sign div:nth-child(n+3)").click(function () {
        $("#detailPart").show();
        // $("#back div").css("margin-left","15%");
    });
    $("#sign div:nth-child(3)").click(function () {
        $("#humanity").show();
    });
    $("#sign div:nth-child(4)").click(function () {
        $("#diet").show();
    });
    $("#sign div:nth-child(5)").click(function () {
        $("#build").show();
    });

    // 点击添加 跳出弹窗

    $(".add").click(function () {
        $("#imageUpload").show();
        for(let i=2;i<=6;i++){
          createUploader(i);
        }
        $(".close").click(function () {
            $("#imageList")[0].reset();
            $("#imageUpload").hide();
        });
    });
    $(".commitimg").click(function(){
        $("#imageUpload").hide();
    });
    // 点击编辑 跳出弹窗
    $(document).on("click", ".updatearea", function () {
        // console.log(1);
        window.location.href = "addArea.html?t_id=" + $(this).parent().parent().attr("t_id");
    });
    $(document).on("click",".mup",function () {
        createUploader("1");
        $("body").attr("id",$(this).parent().parent().parent().attr("menu_id"));
        $("#detailMes").show();
        $.get("../index.php?c=Main&a=getmenubymenuid",{"menu_id":$(this).parent().parent().parent().attr("menu_id")},res=>{
            let menu = res.body.onemenu;
            $(".menu_title").val(menu.menu_title);
            $(".menu_content").val(menu.menu_content);
        },"json");
        $(".close").click(function () {
            $("#revise")[0].reset();
            $("#detailMes").hide();
        });
    });
    $(".madd").click(function(){
        createUploader("1");
        $("body").attr("menutype",$(this).attr("menutype"));
        $("body").attr("id",-1);
        $("#detailMes").show();
        $(".close").click(function () {
        $("#revise")[0].reset();
        $("#detailMes").hide();
        $("body").removeAttr("type");
    })
});
    // $(document).on("click",".madd",function () {
    //     //  $("#detailMes").attr("type",$(this).attr("type"));
    //     //  $("#detailMes").attr("id",-1);
    //     $("#detailMes").show();
    //     $(".close").click(function () {
    //         $("#revise")[0].reset();
    //         $("#detailMes").hide();
    //         // $("#detailMes").removeAttr("type");
    //     });
    // });
    
    $(document).on("click",".commit",function () {
        console.log($("body").attr("id"))
        if($("body").attr("id") !== '-1'){
            let data = {
                "menu_id":$("body").attr("id"),
                "menu_title":$(".menu_title").val(),
                "menu_content":$(".menu_content").val(),
                "menu_imgurl":$(".progressbar1").attr("imgpath"),
            }
            $.post("../index.php?c=Main&a=adminupdatemenu",{"menu":data},res=>{
                // window.location.href="../admin/addArea.html?t_id="+t_id;
                $("#revise")[0].reset();
                $("#detailMes").hide();
            },"json");
        }else{
            console.log("2222")
        let data = {
            "menu_type":$("body").attr("menutype"),
            "menu_title":$(".menu_title").val(),
            "menu_content":$(".menu_content").val(),
            "menu_imgurl":$(".progressbar1").attr("imgpath"),
            "t_id":t_id,
        }
        $.post("../index.php?c=Main&a=addmenu",{"menu":data},res=>{
               window.location.href="../admin/addArea.html?t_id="+t_id;
        },"json");
        }
    });
    var t_id = getQueryString("t_id");
    console.log(t_id);
    var tour = [];
    var nationid = ""
    // var currmenuitem = {
    //     "menu_id":-1,
    //     "menu_title":'',
    //     "menu_content":'',
    //     "menu_imgurl":'',
    // }

     /**
      * 提交地区信息
      */
    
      layui.use('form', function(){  
        layui.form.on('select(nation)', function(data){
            // console.log(data.elem); //得到select原始DOM对象
            // console.log(data.value); //得到被选中的值
            // console.log(data.othis); //得到美化后的DOM对象
            nationid = data.value;
        });
      });
    $('.committour').click(function(){

        console.log(nationid)
        $data={
            "n_id":nationid,
            "t_name":$(".area").val(),
            "longitude":$(".longitude").val(),
            "latitude":$(".latitude").val(),
            "t_cardimg":$(".progressbar2").attr("imgpath"),
            "t_renwen":$(".progressbar3").attr("imgpath"),
            "t_yinshi":$(".progressbar4").attr("imgpath"),
            "t_jianzhu":$(".progressbar5").attr("imgpath"),
            "t_youji":$(".progressbar6").attr("imgpath"),
            "t_id":t_id,

        }
        $.post("../index.php?c=Main&a=updatetouristarea",{"touristarea":$data},res=>{
            console.log(res);
            if(res.code === 1){
                //  alert('更新成功');
                layui.use('layer', function(){
                    var layer = layui.layer;
                    layer.open({
                        title: '提示'
                        ,content: '修改成功'
                      });
                    // layer.msg('修改成功');
                  setTimeout(function(){
                    location.href = "addArea.html?t_id="+t_id;
                  },1000);  
                  });  
                
            }
        },"json");
    })

     /**
      * 生成景区所有信息
      */

     $.get("../index.php?c=Main&a=gettouristareabyid",{"t_id":t_id},res=>{
           
              tour = res.body.touristarea;
             console.log(tour)
            let custom = res.body.custom;
            let history = res.body.history;
            let dress = res.body.dress;
            let artwork = res.body.artwork;
            let building = res.body.building;
            let diet = res.body.diet;
            let area = tour.p_name+"-"+tour.n_name+"-"+tour.t_name;
            getprovince(tour);
            $("#name").html("当前： "+area);
            $(".area").val(tour.t_name);
            $(".longitude").val(tour.longitude);
            $(".latitude").val(tour.latitude);
            $(".custom").html("")
            custom.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".custom").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
            $(".history").html("")
            history.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".history").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
            $(".dress").html("")
            dress.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".dress").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
            $(".artwork").html("")
            artwork.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".artwork").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
            $(".diet").html("")
            diet.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".diet").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
            $(".building").html("")
            building.forEach(function(item){
                let date = getLocalTime(item.timestamp);
                $(".building").append($("<tr menu_id="+item.menu_id+" ><td>"+item.menu_title+"</td><td>"+item.menu_content+"</td><td><img src="+'../'+item.menu_imgurl+"></td><td>管理员</td><td>"+date+"</td><td><div class='layui-btn-group'><button class='layui-btn layui-btn-small mup'><i class='layui-icon'>&#xe642;</i></button><button class='layui-btn layui-btn-small mdel'><i class='layui-icon'>&#xe640;</i></button></div></td></tr>"))
            });
                
            let onearea={
                "name":area,
                "value":[tour.longitude,tour.latitude,111],
            }
            geoCoordMap.push(onearea);
            console.log(geoCoordMap);
            myChart.setOption(option);
            var ecConfig = echarts.config;
            console.log(echarts)
            console.log(ecConfig)
            // function eConsole(params){
            //    alert(option.series[0].data[param.dataIndex].name);
            //    window.location.href="https://www.baidu.com/";
            // }
            // myChart.on("click", eConsole);  
        //     myChart.on("click", function (param){ 
        //    alert(param.dataIndex+':'+option.series[0].data[param.dataIndex].name);
        //    window.location.href="../index.php?c=Main&a=showtouristarea&t_id="+option.series[0].data[param.dataIndex].value[2];
        //    });
     },"json");

     /**
      * 
      * 得到所有省份 
      */
     function getprovince(tour){
        $.get("../index.php?c=Main&a=getprovince",res=>{
            let province = res.body.province;
             console.log(province)
            $(".city").html("");
            console.log(tour)
            for(let p of province){
                 if(tour.p_id ===  p.p_id){
                    $(".city").append("<option value="+p.p_id+" selected>"+p.p_name+"</option>");
                    getnation(tour.p_id)
                 }else{
                     $(".city").append("<option value="+p.p_id+">"+p.p_name+"</option>");
                }
                
            }
            layui.use('form', function(){
                layui.form.render(); //更新全部
                layui.form.render('select'); //刷新select选择框渲染
             })
            
         },"json");
     }

     /**
      * 二级联动得到省份民族
      */

     layui.use('form', function(){  
        layui.form.on('select(province)', function(data){
            getnation(data.value);
        });
      });

    /**
     * 
     * 得到省份下所有民族 
     */
    function getnation(p_id){
        $.get("../index.php?c=Main&a=getnationbypid",{"p_id":p_id},res=>{
            let nation = res.body.nation;
            console.log(nation)
            $(".nation").html("");
            for(let n of nation){
                if(tour.n_id === n.n_id){
                    $(".nation").append("<option value="+n.n_id+" selected>"+n.n_name+"</option>")
                }else{
                    $(".nation").append("<option value="+n.n_id+">"+n.n_name+"</option>")
                }
            }
            layui.form.render('select'); //这个很重要
         },"json");
    }

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    /**
    * 
    * 时间戳转日期格式 
    */
    function getLocalTime(nS) {
        return new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm");
    }
    Date.prototype.Format = function (fmt) { //author: meizz   
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "h+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    
    /**
     * 创建上传对象
     */

    function createUploader(itemnum){
        let uploader = new plupload.Uploader({
            runtimes : 'html5,flash,silverlight,html4',
            browse_button : 'pickfiles'+itemnum, // you can pass an id...
            // container: document.getElementById('uploadposition'+itemnum), // ... or DOM Element itself
            url : '../index.php?c=index&a=uploadImg&width=1519.2',
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
                    // plupload.each(files, function(file) {
                    //     $("#oneadd"+itemnum+" .preimage").append($("<span class='filename' style='margin-left:44px;margin-right:30px;'>"+file.name+"</span><div class='layui-progress layui-progress-big' lay-showPercent='yes' style='display:inline-block;width:30%;margin-top:-18px'><div class='layui-progress-bar layui-bg-green progressbar' lay-percent='0%'><span class='layui-progress-text'>0%</span></div></div><script>layui.use('element', function(){var element = layui.element;});</script>"));
                    // });
                },
        
                UploadProgress: function(up, file) {
                    // console.log("11111")
                    // console.log(file.percent);
                    layui.use('element', function(){var element = layui.element;});
                    $(".progressbar"+itemnum+" .layui-bg-green").css("width",file.percent+'%');
                    $(".progressbar"+itemnum+" .layui-progress-text").html(file.percent+'%');
                },
                FileUploaded: function(up, file, info) {
                    var data = strToJson(info.response);
                    console.log(data)
                    if(data.code === 1){
                        alert("上传成功");
                    }
                    $(".progressbar"+itemnum).attr("imgpath",data.body.file);
                },
                Error: function(up, err) {
                    document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
                }
            }
        });
        uploader.init();
    }
    
/**
 * 
 * 字符串转json
 */

function strToJson(str){
    return JSON.parse(str);
}
});