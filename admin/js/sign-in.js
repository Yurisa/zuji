function checkSignIn(){
	var data = {
		"ad_id":$("#adminName").val(),
		"ad_password":$("#password").val(),
    }
    $.post('../index.php?c=AdminReg&a=loginUser',data,res=>{
        console.log(res);
        if(res.code == 0){
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.msg(res.result);
              });  
         }else{
            layui.use('layer', function(){
            layer.open({
                title: '提示'
                ,content: '登陆成功'
              });
            });
            setTimeout(function(){
                window.location.href = "backstage.html"
            },1000);
         }
    
    },"json");
}
$('.signUpButton').click(function(){
    checkSignIn();
})