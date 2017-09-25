$(document).ready(function (curr) {
    function shownation(curr){
       $.get("../index.php?c=Main&a=getallnation",{"page":curr||1},res=>{
         console.log(res);
         $("#items").html("");
         let nation = res.body.nationlist;
         console.log(nation)
         for(let n of nation){
            let tournum = n.touristarealist; 
            // console.log(tournum);
            $("#items").append($("<div class='list'><div>"+n.nation_name+"</div><div>"+tournum.length+"</div><div>12:00  17-08-29</div><div class='layui-btn-group'><button class='layui-btn'>修改</button><button class='layui-btn'>删除</button></div></div>"));   
         }
         laypage({
            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    shownation(obj.curr);
                }
            }
        });
       },"json"); 
    }
    shownation();
});