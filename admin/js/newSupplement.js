$(document).ready(function(){

    /**
     * 
     * 分页展示所有要审核的补充
     */

    function getmenujudge(curr){
        $.get("../index.php?c=Main&a=getallmenujudge",{"page":curr||1},res=>{
            console.log(res)
             let mjlist = res.body.menu_judge;
             $(".mjbody").html("");
             for(let m of mjlist){
                 let date = getLocalTime(m.timestamp);
                 $(".mjbody").append($("<tr mj_id="+m.mj_id+"><td>"+m.u_name+"</td><td>"+m.position+"</td><td>"+m.mj_title+"</td><td>"+m.mj_content+"</td><td><img src="+'../'+m.mj_imgurl+"></td></td><td>"+date+"</td><td class='operate'><button class='layui-btn pass'>审核通过</button><button class='layui-btn fail'>审核失败</button></td><td class='result'></td></tr>"));
             }
             laypage({
                 cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
                 pages: res.body.totalnum, //通过后台拿到的总页数
                 curr: curr || 1, //当前页
                 skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
                 jump: function (obj, first) { //触发分页后的回调
                     if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        getmenujudge(obj.curr);
                     }
                 }
             });
        },"json");
     }
     getmenujudge();
     $(document).on("click",".pass",function () {
       let mj_id = $(this).parent().parent().attr("mj_id");
       $.get("../index.php?c=Main&a=menupass",{"mj_id":mj_id},res=>{
            $(this).parent().parent().find(".result").html("通过");
            $(this).parent().html("已操作");
       });
    });

    $(document).on("click",".fail",function () {
        let mj_id = $(this).parent().parent().attr("mj_id");
        $.get("../index.php?c=Main&a=menufail",{"mj_id":mj_id},res=>{
             $(this).parent().parent().find(".result").html("未通过");
             $(this).parent().html("已操作");
        });
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
    
})