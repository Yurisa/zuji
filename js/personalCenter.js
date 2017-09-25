
$(document).ready(function () {


    //鼠标移动到用户名字处出现二级菜单

    // $(".nav-items a:nth-child(1)").hover(function () {
    //     $("#nav-personal").slideDown(200);
    //     $("#nav-personal").mouseleave(function () {
    //         $("#nav-personal").slideUp(100);
    //     });
    // });
    $(".nav-items li:nth-child(2)").mouseover(function () {
        $("#nav-personal").slideDown(200);
    });
    $(".top-style1").mouseleave(function () {
        $("#nav-personal").slideUp(100);
    });

    // 个人中心各部分样式显示

    $(".my-part ul li").click(function () {
        $(".my-part ul li").css("border-bottom", "0px");
        $(this).css("border-bottom", "5px solid #3366FF");
        var i = $(".my-part ul li").index(this);
        $(".personal-show").hide();
        $(".personal-show").eq(i).show();
    });

    // 二级菜单对应个人中心各部分

    $("#nav-personal ul li").click(function(){
        // console.log("11111");
        var i = $(this).index();
        // console.log(i)
        $(".my-part ul li").css("border-bottom", "0px");
        $(".my-part ul li").eq(i).css("border-bottom", "5px solid #3366FF");
        $(".personal-show").hide();
        $(".personal-show").eq(i).show();
    })
    //关注 显示

    $(".my-follow").click(function () {
        $(".my-part ul li").css("border-bottom", "0px");
        $(".my-part ul li:nth-child(6)").css("border-bottom", "5px solid #3366FF");
        $(".personal-show").hide();
        $("#myData").parent().parent().show();
        $(".note-part").nextAll().hide();
        $("#my-follow").show();
        $("#myData").prev().nextAll().css("color","#3366FF");
        $("#myFollow").css("color","#000000");
        $(".number").css("color","#000000");
    });

    //粉丝 显示

    $(".my-fans").click(function () {
        $(".my-part ul li").css("border-bottom", "0px");
        $(".my-part ul li:nth-child(6)").css("border-bottom", "5px solid #3366FF");
        $(".personal-show").hide();
        $("#myData").parent().parent().show();
        $(".note-part").nextAll().hide();
        $("#my-fans").show();
        $("#myData").prev().nextAll().css("color","#3366FF");
        $("#myFans").css("color","#000000");
        $(".number").css("color","#000000");
    });

    //个人中心-游记 各部分样式显示

    $("#myNote").click(function () {
        $(this).css("color","#000000");
        $("#myDraft").css("color","#3366FF");
        $("#myCollection").css("color","#3366FF");
        $(".my-note").show();
        $(".my-draft").hide();
        $(".my-collection").hide();
    });
    $("#myDraft").click(function () {
        $(this).css("color","#000000");
        $("#myNote").css("color","#3366FF");
        $("#myCollection").css("color","#3366FF");
        $(".my-draft").show();
        $(".my-note").hide();
        $(".my-collection").hide();
    });
    $("#myCollection").click(function () {
        $(this).css("color","#000000");
        $("#myNote").css("color","#3366FF");
        $("#myDraft").css("color","#3366FF");
        $(".my-collection").show();
        $(".my-note").hide();
        $(".my-draft").hide();
    });


    //个人中心-个人设置 各部分样式显示

    $("#myData").prev().nextAll().click(function () {
        $("#myData").prev().nextAll().css("color","#3366FF");
        $(this).css("color","#000000");
        $(".number").css("color","#000000");
    });
    $("#myData").click(function () {
        $(".note-part").nextAll().hide();
        $("#my-data").show();
    });
    $("#myPassword").click(function () {
        $(".note-part").nextAll().hide();
        $("#my-password").show();
    });
    $("#myHead").click(function () {
        $(".note-part").nextAll().hide();
        $("#my-head").show();
    });
    $("#myFollow").click(function () {
        $(".note-part").nextAll().hide();
        $("#my-follow").show();
    });
    $("#myFans").click(function () {
        $(".note-part").nextAll().hide();
        $("#my-fans").show();
    });


    //对去过的地区进行评价

    // $(".asses").click(function () {
    //     $("#scoreList").show();
    //     $(".close").click(function () {
    //         // $("#asses-score")[0].reset();
    //         $("#scoreList").hide();
    //     });
    // });
    $(document).on("click", ".asses", function () {
        $("#scoreList").show();
        price = 4.0;
        traffic = 4.0;
        service = 4.0;
        environment = 4.0;
        $("#scoreList").attr("t_id",$(this).parent().parent().attr("t_id"));
        $(".close").click(function () {
            // $("#asses-score")[0].reset();
            $("#scoreList").hide();
            $("#scoreList").removeAttr("t_id");
        });
    });
    $(".submit").click(function(){
        console.log($(this).parent().parent().parent().parent())
        let data = {
            "t_id":$(this).parent().parent().parent().parent().attr("t_id"),
            "price":price,
            "service":service,
            "traffic":traffic,
            "environment":environment
        }
        $.post("index.php?c=Main&a=userevaluate",data,res=>{
            layui.use('layer', function(){
                var layer = layui.layer;
                
                layer.open({
                    title: '提示'
                    ,content: '评价成功'
                  });     
                    
              }); 
            $("#scoreList").hide();
        });
        
    });
    
    //评分
    var price = 4.0;
    var traffic = 4.0;
    var service = 4.0;
    var environment = 4.0;

    $('#function-demo1').raty({
        number: 5, //多少个星星设置
        score: 4, //初始值是设置
        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '.hint1',
        cancel: false,
        targetKeep: true,
        precision:true, //是否包含小数
        click: function(score, evt) {
            price = score;
            // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });
    $('#function-demo2').raty({
        number: 5, //多少个星星设置
        score: 4, //初始值是设置
        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '.hint2',
        cancel: false,
        targetKeep: true,
        precision:true, //是否包含小数
        click: function(score, evt) {
            traffic = score;
            // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });
    $('#function-demo3').raty({
        number: 5, //多少个星星设置
        score: 4, //初始值是设置
        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '.hint3',
        cancel: false,
        targetKeep: true,
        precision:true, //是否包含小数
        click: function(score, evt) {
            service = score;
            // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });
    $('#function-demo4').raty({
        number: 5, //多少个星星设置
        score: 4, //初始值是设置
        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
        path: 'raty-master/demo/images',
        cancelOff: 'cancel-custom-off.png',
        cancelOn: 'cancel-custom-on.png',
        size: 24,
        starHalf: 'star-half.png',
        starOff: 'star-off.png',
        starOn: 'star-on.png',
        target: '.hint4',
        cancel: false,
        targetKeep: true,
        precision:true, //是否包含小数
        click: function(score, evt) {
            environment = score;
            // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
        }
    });

    /**
     * 展示用户个人信息
     * 
     */

    function showuserdata(){
    $.get("index.php?c=Main&a=getuser",res=>{
        console.log(res)
        var user = res.body.user;
        $('.my-name').html(user.u_name);
        $('.top-name').html(user.u_name);
        $('.sign').html(user.sign);
        $('.pageImage img').attr("src",user.backimg);
        $('.my-head-picture img').attr("src",user.u_avatar);
    },"json");
    }

    /**
     * 
     * 列出用户想去
     */

    function showwannago(curr){
        $.ajax({
        type: "GET",
        data: {
            "page": curr || 1,
        },
        url: "index.php?c=Main&a=getw_gotourist",
        dataType: "json",
        success: function (data) {
            var Json1 = data.body.touristarea;
            $("#wannaGo").html("");
            $("#wnum").html(data.body.tournum);
            for (var i = 0; i < Json1.length; i++) {
                var obj = Json1[i];
                $("#wannaGo").append($("<li t_id="+obj.t_id+"><a href=''>"+obj.t_name+"</a><img src="+obj.t_cardimg+"><i class='layui-icon deletewg' >&#x1006;</i><>"));
            }
            laypage({
                cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: data.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showwannago(obj.curr);
                    }
                }
            });
        }
    });
    }
    
    /**
     * 删除用户想去
     */

    $(document).on("click", ".deletewg", function () {
                // console.log(1);
                // window.location.href = "product-detail.html?f_id=" + $(this).attr("f_id");
                let t_id = $(this).parent().attr("t_id");
                console.log(t_id)
                $.get("index.php?c=Main&a=removew_gotourist",{"t_id":t_id},res=>{
                    //  console.log(res);
                    //  showwannago();
                    $(this).parent().remove();
                 })
            });

    /**
     * 
     * 列出用户去过
     */

    function showhavego(curr){
        $.ajax({
            type: "GET",
            data: {
                "page": curr || 1,
            },
            url: "index.php?c=Main&a=geth_gotourist",
            dataType: "json",
            success: function (data) {
                var Json1 = data.body.touristarea;
                $("#haveGo").html("");
                $("#hnum").html(data.body.tournum);
                for (var i = 0; i < Json1.length; i++) {
                    var obj = Json1[i];
                    $("#haveGo").append(" <li t_id="+obj.t_id+"><img src="+obj.t_cardimg+"><a href=''>" + obj.t_name + "</a><span class='footprint-score'><span class='demo'><span id=target"+obj.t_id+" class='target-demo'></span><span id=hint"+ obj.t_id +" class='hint'></span></span></span> <div class='footprint-asses'><input class='asses' type='button' value='评价' name=''></div></li>");
                }
                Json1.forEach(function(obj){
                     $('#target' + obj.t_id).raty({
                            number: 5, //多少个星星设置
                            score: obj.score, //初始值是设置
                            targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
                            path: 'raty-master/demo/images',
                            cancelOff: 'cancel-custom-off.png',
                            cancelOn: 'cancel-custom-on.png',
                            size: 24,
                            starHalf: 'star-half.png',
                            starOff: 'star-off.png',
                            starOn: 'star-on.png',
                            target: '#hint' + obj.t_id,
                            cancel: false,
                            targetKeep: true,
                            precision: true, //是否包含小数
                            click: function (score, evt) {
                                // alert('ID: ' + $(this).attr('id') + "\nscore: " + score + "\nevent: " + evt.type);
                                $.get("index.php?c=Main&a=updatescore",{"score":score,"t_id":obj.t_id},res=>{
                                         console.log(res);
                                });
                            }
                        });
                 })
             laypage({
                cont: 'page2', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: data.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showhavego(obj.curr);
                    }
                }
            });
        }
    });
    }

    /**
     * 
     *列出用户游记
     */

    function showarticle(curr){
        $.ajax({
        type: "GET",
        data: {
            "page": curr || 1,
        },
        url: "index.php?c=Main&a=getarticlebyuid",
        dataType: "json",
        success: function (data) {
            var Json1 = data.body.article;
            $("#mynote").html("");
            $("#mynotenum").html(data.body.articlenum);
            for (var i = 0; i < Json1.length; i++) {
                var obj = Json1[i];
                console.log(obj.timestamp)
                let date =  getLocalTime(obj.timestamp);
                console.log(date);
                $("#mynote").append($("<li a_id="+obj.a_id+"><img src="+obj.a_cover+"><a href=''>"+obj.a_title+"</a><span>"+date+"</span><input type='button' value='修改' name=''><input class='deletearticle' type='button' value='删除' name=''></li>"));
            }
            laypage({
                cont: 'page3', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: data.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showarticle(obj.curr);
                    }
                }
            });
        }
    });
    }

    /**
     * 删除用户游记
     */
    
    $(document).on("click", ".deletearticle", function () {
                // console.log(1);
                // window.location.href = "product-detail.html?f_id=" + $(this).attr("f_id");
                let a_id = $(this).parent().attr("a_id");
                console.log(a_id)
                $.get("index.php?c=Main&a=removearticle",{"a_id":a_id},res=>{
                    //  console.log(res);
                    //  showarticle();
                    $(this).parent().remove();
                 })
            });

    /**
     * 
     * 列出用户草稿
     */

    function showdraft(curr){
        $.ajax({
        type: "GET",
        data: {
            "page": curr || 1,
        },
        url: "index.php?c=Main&a=getdraftbyuid",
        dataType: "json",
        success: function (data) {
            var Json1 = data.body.draft;
            $("#mydraft").html("");
            $("#mydraftnum").html(data.body.draftnum);
            for (var i = 0; i < Json1.length; i++) {
                var obj = Json1[i];
                console.log(obj.timestamp)
                let date =  getLocalTime(obj.timestamp);
                console.log(date);
                $("#mydraft").append($("<li d_id="+obj.d_id+"><img src='images/pic1.jpg'><a href=''>"+obj.d_title+"</a><span>"+date+"</span><input type='button' class='updatedraft' value='修改' name=''><input class='deletedraft' type='button' value='删除' name=''></li>"));
            }
            laypage({
                cont: 'page4', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: data.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showdraft(obj.curr);
                    }
                }
            });
        }
    });
    }

    /**
     * 更新草稿
     */

    $(document).on("click", ".updatedraft", function () {
        window.location.href="write.html?d_id="+$(this).parent().attr("d_id");  
    });

    /**
     * 删除用户草稿
     */
     
    $(document).on("click", ".deletedraft", function () {
                // console.log(1);
                // window.location.href = "product-detail.html?f_id=" + $(this).attr("f_id");
                let d_id = $(this).parent().attr("d_id");
                // console.log(a_id)
                $.get("index.php?c=Main&a=deletedraft",{"d_id":d_id},res=>{
                    //  console.log(res);
                    //  showarticle();
                    $(this).parent().remove();
                 })
            });

    /**
     * 列出用户消息
     */

     function showmessage(curr){
         $.get("index.php?c=Main&a=getusermessage",{"page":curr||1},res=>{
            let comment = res.body.commentlist;
            $("#my-message ul").html("");
            for(let c of comment){
               $("#my-message ul").append($("<li c_id="+c.c_id+"><img src="+c.u_avatar+"><p>"+c.u_name+"</p><p>发表评论</p><a href=''>"+c.a_title+"</a><p>"+c.c_content+"</p><input type='button' value='回复'><input type='button' class='deletecomment' value='删除'></li>"));
            }
            laypage({
                cont: 'page7', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: res.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showmessage(obj.curr);
                    }
                }
            });
         },"json");
     }
     
     $(document).on("click", ".deletecomment", function () {
       $.get("index.php?c=Main&a=deleteusercomment",{"c_id":$(this).parent().attr("c_id")},res=>{
          console.log(res);
          $(this).parent().remove();
       },"json");
     });
     showmessage();

    /**
     * 列出用户贡献
     * 
     */

     function showcontribution(curr){
        $.get("index.php?c=Main&a=getusercontribution",{"page":curr||1},res=>{
                var num = 1;
                let  mjlist = res.body.menu_judge;
                $("#contribution").html("");
            for(let mj of mjlist){
                let date =  getLocalTime(mj.timestamp);
                $("#contribution").append($("<tr><td>"+num+"</td><td>"+mj.position+"</td><td></td><td>"+mj.mj_ispass+"</td><td>查看</td></tr>"));
               num++;
            }
            laypage({
                cont: 'page6', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: res.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showcontribution(obj.curr);
                    }
                }
            });
        },"json");
     }
     showcontribution();
     
    /**
     * 
     * 列出用户收藏
     */

    function showcollection(curr){
        $.ajax({
        type: "GET",
        data: {
            "page": curr || 1,
        },
        url: "index.php?c=Main&a=getcollectarticle",
        dataType: "json",
        success: function (data) {
            var Json1 = data.body.article;
            $("#mycollection").html("");
            $("#mycollectnum").html(data.body.articlenum);
            for (var i = 0; i < Json1.length; i++) {
                var obj = Json1[i];
                var articlecontent = "";
                let content = "<div>"+obj.a_content+"</div>";
                // console.log($(content).find("p").eq(0));
                for(let i = 0;i<$(content).find("p").length;i++){
                   articlecontent = articlecontent+$(content).find("p").eq(0).text()
                }
                console.log(obj.timestamp)
                let date =  getLocalTime(obj.timestamp);
                console.log(date);
                $("#mycollection").append($(" <li a_id="+obj.a_id+"><img src="+obj.a_cover+"><img src="+obj.u_avatar+"><a href=''>"+obj.a_title+"</a><a href=''>"+obj.u_name+"</a><p>"+articlecontent+"</p><i class='layui-icon deletecollect' >&#x1006;</i></li>"));
            }
            omit();
            laypage({
                cont: 'page5', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                pages: data.body.totalnum, //通过后台拿到的总页数
                curr: curr || 1, //当前页
                skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                jump: function (obj, first) { //触发分页后的回调
                    if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        showcollection(obj.curr);
                    }
                }
            });
        }
    });
    }

    /**
     * 省略文章内容
     */
    function omit(){
        $("#mycollection").find("p").attr("style","width: 300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;");
        // $("#mycollection").find("span").attr("style","width: 300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;");
    }
    
    /**
     * 删除用户收藏
     * 
     */

    $(document).on("click", ".deletecollect", function () {
                // console.log(1);
                // window.location.href = "product-detail.html?f_id=" + $(this).attr("f_id");
                let a_id = $(this).parent().attr("a_id");
                console.log(a_id)
                $.get("index.php?c=Main&a=deletecollect",{"a_id":a_id},res=>{
                    //  console.log(res);
                    //  showarticle();
                    $(this).parent().remove();
                 })
            });


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
    showuserdata();
    showwannago();
    showhavego();
    showarticle();
    showdraft();
    showcollection();
    
    $("#exit a").click(function(){
        $.get("index.php?c=Reg&a=loginOut",res=>{
           window.location.href = "home.html";
        });
    })

});