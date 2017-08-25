$(document).ready(function () {
var t_id = getQueryString("t_id");
var type = getQueryString("type");
var currentitemindex = 0;
// console.log(t_id)
// console.log(type);
$.get('index.php?c=main&a=gettouristareabyid',{"t_id":t_id},res=>{
    // console.log(res)
    let tour = res.body.toursitarea;
    console.log(tour.t_renwen)
    let province = tour.p_name;
    let nation = tour.n_name;
    let touristarea = tour.t_name;
    $("#renwenimg").css("background","url("+tour.t_renwen+")");
    $("#province").html(province);
    $("#nation").html(nation);
    $("#position").html(touristarea);
    $("#province-add").html(province);
    $("#nation-add").html(nation);
    $("#positon-add").html(touristarea);
    $("#menu-add").html("人文");
},"json");
$.get('index.php?c=main&a=gettourmenu',{"t_id":t_id,"type":type},res=>{
   $menu = res.body.menu;
   $(".content .secondLayer").html("");
   for(item of $menu){
         if(item.menu_type == "custom"){
             $("#custom").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else if(item.menu_type == "history"){
            $("#history").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else if(item.menu_type == "dress"){
            $("#dress").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }else{
            $("#artwork").append($("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>"))
         }
   }
   $(".content").each(function(index,item){
	console.log($(".content").eq(index).find(".secondLayer"));
	if($(".content").eq(index).find(".secondLayer").length === 0){
		$(".content").eq(index).find(".empty").show();
	}else{
		$(".content").eq(index).find(".empty").hide();
	}
});
},"json");


$('#add').click(function(){
	var menu2 = $(".menu-2 ul li").eq(currentitemindex).text();
	console.log(menu2)
	$('.theAddArea').show();
	$("#menu2-add").html(menu2)
});
$('.empty-btn').click(function(){
	var menu2 = $(".menu-2 ul li").eq(currentitemindex).text();
	console.log(menu2)
	$('.theAddArea').show();
	$("#menu2-add").html(menu2)
});
$('#close').click(function(){
	$('.theAddArea').hide();
})
// if ($('.secondLayer').val() == null) {
// 	$('.empty').show();
// }else {
// 	$('.empty').hide();
// }
$(".menu-2 ul li").click(function(){
	currentitemindex = $(this).index();
	console.log(currentitemindex)
	$(".menu-2 ul li").css("border-bottom", "0px");
	$(this).css("border-bottom", "5px solid #0E6EB8");
	$(".content").hide();
	$(".content").eq(currentitemindex).show();
});
// $(".content").each(function(index,item){
// 	console.log($(".content").eq(index).find(".secondLayer"));
// 	if($(".content").eq(index).find(".secondLayer").length === 0){
// 		$(".content").eq(index).find(".empty").show();
// 	}else{
// 		$(".content").eq(index).find(".empty").hide();
// 	}
// });

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

});

