$(document).ready(function(){
    function getarticlelist(curr){
        $.get('../index.php?c=Main&a=getarticlebylist',{"page":curr},res=>{
          let articlelist = res.body.article;
          $("#items").html("");
          for(let a of articlelist){
              let date = getLocalTime(a.timestamp)
              $("#items").append("<div class='list'><div>"+a.a_title+"</div><div>"+a.n_name+"</div><div>"+a.t_name+"</div><div>"+a.u_name+"</div><div>"+date+"</div><div class='layui-btn-group'><button class='layui-btn'>删除</button></div></div>");
          }
          laypage({
              cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
              pages: res.body.totalnum, //通过后台拿到的总页数
              curr: curr || 1, //当前页
              skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
              jump: function (obj, first) { //触发分页后的回调
                  if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                      getarticlelist(obj.curr);
                  }
              }
          });
        },"json");
    }
    getarticlelist();
 
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
  });