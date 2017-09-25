t_id = getQueryString("t_id");

$('.inputId').keydown(function(e){
    if(e.keyCode==13){
    //    $('#FormId').submit(); //处理事件  
     $.post('../index.php?c=Main&a=checkinandout',{"personid":$('.inputId').val(),"t_id":t_id},res=>{
        $('.inputId').val("");
        showtodayperson();
        showhistoryperson();
     })
    }
    });

 
    /**
     * 
     * 分页展示今日游客
     */
    function showtodayperson(curr){
        $.get('../index.php?c=Main&a=gettodayperson',{"t_id":t_id,"page":curr||1},res=>{
           let personlist = res.body.personlist;
           $(".personlist").html("");
           for(let p of personlist){
               let date = getLocalTime(p.timestamp)
               $(".personlist").append($("<tr><td>"+p.person_id+"</td><td>"+p.name+"</td><td><img src="+'../'+p.img+"></img></td><td>"+p.sex+"</td><td>"+p.age+"</td><td>"+date+"</td></tr>"));
           }
           laypage({
            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    showtodayperson(obj.curr);
                }
            }
        });
        },"json");
    }

   /**
    * 
    * 分页展示历史游客
    */

    function showhistoryperson(curr){
        $.get('../index.php?c=Main&a=gethistoryperson',{"t_id":t_id,"page":curr||1},res=>{
           let personlist = res.body.personlist;
           $(".h_personlist").html("");
           for(let p of personlist){
               let date1 = getLocalTime(p.starttime);
               let date2 = getLocalTime(p.endtime);
               $(".h_personlist").append($("<tr><td>"+p.person_id+"</td><td>"+p.name+"</td><td><img src="+'../'+p.img+"></img></td><td>"+p.sex+"</td><td>"+p.age+"</td><td>"+date1+"</td><td>"+date2+"</td></tr>"));
           }
           laypage({
            cont: 'page2', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    showhistoryperson(obj.curr);
                }
            }
        });
        },"json");
    }
    showhistoryperson();
    showtodayperson();

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