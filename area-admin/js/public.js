var t_id = getQueryString("t_id");
function showarea_admindata(){
    $.get('../index.php?c=Admin&a=getarea_admindata',res=>{
      console.log(res);
      if(res.code === 1){
        // let admin = res.body.admin;
        // $('#administrators').html(admin.ad_name);
      }else{
        layui.use('layer', function(){
            layer.open({
                title: '提示'
                ,content: '请先登录'
              });
            });
          setTimeout(function(){
            window.location.href = "sign-in.html";
          },1000);
      }
    },"json");
}
showarea_admindata();

$.get('../index.php?c=Main&a=gettouristareabyid',{"t_id":t_id},res=>{
    console.log(res)
   let tour = res.body.touristarea;
   console.log(tour);
   $("#administrators").html(tour.t_name);
},"json");

$("#navigation a").eq(0).attr("href","backstage.html?t_id="+t_id);
$("#navigation a").eq(1).attr("href","checkin.html?t_id="+t_id);
$("#navigation a").eq(2).attr("href","addArea.html?t_id="+t_id);
$("#navigation a").eq(3).attr("href","newSupplement.html?t_id="+t_id);

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

$("#exit").click(function(){
    $.get('../index.php?c=AdminReg&a=loginOut',res=>{
       console.log(res);
       layui.use('layer', function(){
        layer.open({
            title: '提示'
            ,content: '安全退出'
          });
        });
      setTimeout(function(){
        window.location.href = "sign-in.html";
      },1000);
    });
})