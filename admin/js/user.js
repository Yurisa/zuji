$(document).ready(function(){
  function getuserlist(curr){
      $.get('../index.php?c=Main&a=getuserlist',{"page":curr},res=>{
        let userlist = res.body.user;
        $("#items").html("");
        for(let u of userlist){
            $("#items").append("<div class='list' u_id="+u.u_id+"><div><img src="+'../'+u.u_avatar+"></div><div>"+u.u_name+"</div><div>12:00  17-08-26</div><div>"+u.articlenum+"</div><div class='layui-btn-group'><button class='layui-btn'>发送消息</button><button class='layui-btn'>查看</button><button class='layui-btn'>限制</button></div></div>");
        }
        laypage({
            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    getuserlist(obj.curr);
                }
            }
        });
      },"json");
  }
  getuserlist();
});