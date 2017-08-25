var currentitemindex = 0;
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
$(".content").each(function(index,item){
	console.log($(".content").eq(index).find(".secondLayer"));
	if($(".content").eq(index).find(".secondLayer").length === 0){
		$(".content").eq(index).find(".empty").show();
	}else{
		$(".content").eq(index).find(".empty").hide();
	}
});

