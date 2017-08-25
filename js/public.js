$('#add').click(function(){
	$('.theAddArea').show();
});
$('.empty-btn').click(function(){
	$('.theAddArea').show();
});
$('#close').click(function(){
	$('.theAddArea').hide();
})
if ($('.secondLayer').val() == null) {
	$('.empty').show();
}else {
	$('.empty').hide();
}