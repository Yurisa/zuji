$(document).ready(function () {
   var keyword = decodeURI(getQueryString("searchContent"));
   console.log(keyword);
   $(".keyword").val((keyword));
//    if (getQueryString("searchContent") == null) {
//        bindData('', _PageSize, 0, isPrice, lowPrice, highPrice, orderStr, atrType, level);
//    }
//    else {
//        bindData(decodeURI(getQueryString("searchContent")), _PageSize, 0, isPrice, lowPrice, highPrice, orderStr, atrType, level);
//    }
//    $(".keyword").val(keyword);

   
    var curritem = 0
    // 搜索样式显示

    $(".search-list ul li").click(function () {
        $(".search-list ul li").css("border-bottom", "0px");
        $(this).css("border-bottom", "5px solid #3366FF");
        curritem = $(".search-list ul li").index(this);
        $(".search-show").hide();
        $(".search-show").eq(curritem).show();
    });


    $(".search-ways ul li").click(function () {
        $(".search-ways ul li").css("background-color","#FFFFFF");
        $(".search-ways ul li").css("color","#000000");
        $(this).css("background-color","#3366FF");
        $(this).css("color","#FFFFFF");
    });
    if(keyword){
        getarea($(".keyword").val());
     
    $("#search-diqu").click(function(){
       getarea($(".keyword").val());
    });
    
    $("#search-renwen").click(function(){
        getmenu("humanities",$(".keyword").val());
    });

    $("#search-yinshi").click(function(){
       getmenu("diet",$(".keyword").val());
    });
    $("#search-jianzhu").click(function(){
        getmenu("building",$(".keyword").val());
     });
     $("#search-youji").click(function(){
       getarticle($(".keyword").val());
     });
    }
    function getarea(nationname,curr){
        $.get('index.php?c=Main&a=searchtouristarea',{"nationname":nationname,"page":curr||1},res=>{
            let tour = res.body.touristarea;
            $("#area ul").html("");
            for(let t of tour){
                $("#area ul").append($("<li t_id="+t.t_id+"><img src="+t.t_cardimg+"><a href="+'menu.html?t_id='+t.t_id+">"+t.t_name+"</a></li>"));
            }
            laypage({
                cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: res.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        getarea(obj.curr);
                    }
                }
            });
        },"json");
    }


    function getmenu(type,keyword,curr){
        $.get('index.php?c=Main&a=searchmenu',{"type":type,"keyword":keyword,"page":curr||1},res=>{
            let menu = res.body.menu;
            if(type == 'humanities'){
                $("#humanity ul").html("");
                for( let m of menu){
                    $("#humanity ul").append($("<li><img src="+m.menu_imgurl+"><a href="+'culture.html?t_id='+m.t_id+'&type=humanities'+" >"+m.menu_title+"</a></a><span style='width: 45%; float: left;color: #333333;font-size: 16px;text-align: left;margin-left: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>"+m.menu_content+"</span></li>"));
                }
                laypage({
                    cont: 'page2', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                    pages: res.body.totalnum, //通过后台拿到的总页数
                    curr: curr || 1, //当前页
                    skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    jump: function (obj, first) { //触发分页后的回调
                        if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                            getmenu(obj.type,obj.keyword,obj.curr);
                        }
                    }
                });
            }else if(type == "diet"){
                $("#diet ul").html("");
                for(let m of menu){
                    $("#diet ul").append($("<li><img src="+m.menu_imgurl+"><a href="+'food.html?t_id='+m.t_id+'&type=diet'+" >"+m.menu_title+"</a></a><span style='width: 45%; float: left;color: #333333;font-size: 16px;text-align: left;margin-left: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>"+m.menu_content+"</span></li>"));
                    laypage({
                        cont: 'page3', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                        pages: res.body.totalnum, //通过后台拿到的总页数
                        curr: curr || 1, //当前页
                        skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                        jump: function (obj, first) { //触发分页后的回调
                            if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                                getmenu(obj.type,obj.keyword,obj.curr);
                            }
                        }
                    });
                }
            }else if(type == "building"){
                $("#building ul").html("");
                for(let m of menu){
                    $("#building ul").append($("<li><img src="+m.menu_imgurl+"><a href="+'building.html?t_id='+m.t_id+'&type=building'+" >"+m.menu_title+"</a></a><span style='width: 45%; float: left;color: #333333;font-size: 16px;text-align: left;margin-left: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>"+m.menu_content+"</span></li>"));
                    laypage({
                        cont: 'page4', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                        pages: res.body.totalnum, //通过后台拿到的总页数
                        curr: curr || 1, //当前页
                        skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                        jump: function (obj, first) { //触发分页后的回调
                            if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                                getmenu(obj.type,obj.keyword,obj.curr);
                            }
                        }
                    });
            }
        }
           
        },"json");
    }

    function getarticle(keyword,curr){
        $.get('index.php?c=Main&a=searcharticle',{"keyword":keyword,"page":curr||1},res=>{
            let article = res.body.article;
            $("#travels ul").html("");
            for(let a of article){
                var articlecontent = "";
                let content = "<div>"+a.a_content+"</div>";
                // console.log($(content).find("p").eq(0));
                for(let i = 0;i<$(content).find("p").length;i++){
                   articlecontent = articlecontent+$(content).find("p").eq(0).text()
                }
                let date = getLocalTime(a.timestamp);
                $("#travels ul").append($("<li><img src="+a.a_cover+"><a href="+'note-detail.html?a_id='+a.a_id+">"+a.a_title+"</a><a u_id="+a.u_id+" style=''>"+a.u_name+"</a><span class='partial-content' style='width: 45%; float: left;color: #333333;font-size: 16px;text-align: left;margin-left: 50px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;'>"+articlecontent+"</span><div class='note-bottom'><span class='icon-s icon-eye'>"+a.browse_num+"</span><span class='icon-s icon-clock'>"+date+"</span></div></li>"));
                laypage({
                    cont: 'page5', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                    pages: res.body.totalnum, //通过后台拿到的总页数
                    curr: curr || 1, //当前页
                    skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                    jump: function (obj, first) { //触发分页后的回调
                        if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                            getarticle(obj.keyword,obj.curr);
                        }
                    }
                });
        }
        },"json");
    }

    /**
     * 解析游记内容
     */
    
    //  function analyze(tag){
    //     // var str ="<div id=result_box dir=ltr>you are so talented!</div>" ;
    //     var pat= /<(\w+) .*>(.*)<\/\1>/gi;
    //     var re = new RegExp("<("+tag+") .*>(.*)<\/\1>","gi");
    //     var str2=str.replace(pat,"$2");
    //     alert(str2);
    //  }

    
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

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return (r[2]);
        }
        return null;
    }
});