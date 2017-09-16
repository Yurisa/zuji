//搜索框的淡入淡出
$(document).ready(function () {
    $(".icon-search").mouseover(function () {
        $(".nav-search").fadeIn(800);
    });
    $(".search-icon").mouseover(function () {
        $(".nav-search").fadeIn(800);
    });
    $(".top-style1").mouseleave(function () {
        $(".nav-search").fadeOut(500);
    });
});

function showuserdata(){
    $.get("index.php?c=main&a=getuser",res=>{
        console.log(res)
        var user = res.body.user;
        $('.top-name').html(user.u_name);
        $('.login').html(user.u_name+" / 退出");
    },"json");
    }
showuserdata();
var t_id = getQueryString("t_id");
$.get("index.php?c=main&a=getw_gotid",res=>{
	console.log(res)
	let t_idlist = res.body.t_idlist;
	for(let t of t_idlist){
		if(t.t_id == t_id){
			$(".webfont").eq(0).attr("class","webfont icon-gift-h");
			return;
		}
	} 
},"json");

$.get("index.php?c=main&a=geth_gotid",res=>{
	console.log(res)
	let t_idlist = res.body.t_idlist;
	for(let t of t_idlist){
		if(t.t_id == t_id){
			$(".webfont").eq(1).attr("class","webfont icon-spinner5-h");
			return;
		}
	} 
},"json");

$(".webfont").eq(0).click(function(){
	$(this).toggleClass('icon-gift');
	$(this).toggleClass('icon-gift-h');
	// console.log($(this).attr("class"))
	if($(this).attr("class") === "webfont icon-gift-h"){
		// console.log("111")
		$.get("index.php?c=main&a=addw_go",{"t_id":t_id},res=>{
          console.log(res)
		});
	}else{
		$.get("index.php?c=main&a=removew_gotourist",{"t_id":t_id},res=>{
			console.log(res);
		})
	}
    
});

$(".webfont").eq(1).click(function(){
	$(this).toggleClass('icon-spinner5');
	$(this).toggleClass('icon-spinner5-h');
	if($(this).attr("class") === "webfont icon-spinner5-h"){
		$.get("index.php?c=main&a=addh_go",{"t_id":t_id},res=>{
          console.log(res)
		});
	}else{
		$.get("index.php?c=main&a=removeh_gotourist",{"t_id":t_id},res=>{
			console.log(res);
		})
	}
    
});

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
console.log($(".webfont").eq(0))

