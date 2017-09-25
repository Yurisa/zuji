$(document).ready(function () {
    var t_id = getQueryString("t_id");
 $.get('index.php?c=Main&a=gettouristareabyid',{"t_id":t_id},res=>{
        console.log(res)
    let tour = res.body.touristarea;
    console.log(tour.t_renwen);
    let province = tour.p_name;
    let nation = tour.n_name;
    let touristarea = tour.t_name;
    $("#youjiimg").css("background","url("+tour.t_youji+")");
    $("#youjiimg").css("background-size","100% 100%");
    $("#province").html(province);
    $("#nation").html(nation);
    $("#position").html(touristarea);
    },"json");
    
/**
 * 列出景区所有游记
 * @param {*} curr 
 */
 function gettourarticle(curr){
   $.get('index.php?c=Main&a=getarticlebytid',{"t_id":t_id,"page":curr||1},res=>{
          console.log(res)
          let articlelist = res.body.article;
          console.log(articlelist)
          $("#notelist").html("");
          for(article of articlelist){
            let date =  getLocalTime(article.timestamp);
            console.log(date);
          $("#notelist").append($("<li a_id="+article.a_id+"><div class='note'><div class='note-photo'><a href="+'note-detail.html?a_id='+article.a_id+"><img src="+article.a_cover+"></a></div><div class='note-inner'><div class='note-info'><span class='note-avatar'><a href=''><img src="+article.u_avatar+"></a></span><span class='note-userName'>"+article.u_name+"</span></div><div class='note-title'><span><a href=''>"+article.a_title+"</a></span></div><div class='note-bottom'><span class='icon-s icon-eye'>"+article.browse_num+"</span><span class='icon-s icon-clock'>"+date+"</span></div></div></div></li>"))
          }
          laypage({
            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    gettourarticle(obj.curr);
                }
            }
        });
  
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
    gettourarticle(); 
})

