function showadmindata(){
    $.get('../index.php?c=Admin&a=getadmindata',res=>{
      console.log(res);
      if(res.code === 1){
        let admin = res.body.admin;
        $('#administrators').html(admin.ad_name);
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
showadmindata();

$("#exit").click(function(){
    $.get('../index.php?c=AreaadminReg&a=loginOut',res=>{
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
});