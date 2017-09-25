$(document).ready(function(){
    var t_id = getQueryString("t_id");
    $.get('index.php?c=Main&a=gettouristareabyid',{"t_id":t_id},res=>{
        console.log(res)
       let tour = res.body.touristarea;
       console.log(tour);
       let province = tour.p_name;
       let nation = tour.n_name;
       let touristarea = tour.t_name;
    //    $("#renwenimg").css("background","url("+tour.t_renwen+")");
       $("#province").html(province);
       $("#nation").html(nation);
       $("#position").html(touristarea);
       $("#province-add").html(province);
       $("#nation-add").html(nation);
       $("#positon-add").html(touristarea);
       $("#menu-add").html("人文");
   },"json");
   $('.singleMenu ul li').eq(0).click(function(){
       window.location.href = "culture.html?t_id="+t_id+"&type=humanities";
   });
   $('.singleMenu ul li').eq(1).click(function(){
    window.location.href = "food.html?t_id="+t_id+"&type=diet";
   });
   $('.singleMenu ul li').eq(2).click(function(){
    window.location.href = "building.html?t_id="+t_id+"&type=building";
   });
   $('.singleMenu ul li').eq(3).click(function(){
    window.location.href = "notes.html?t_id="+t_id;
   });

   function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
$.get("index.php?c=Main&a=gettouristareabyid",{"t_id":t_id},res=>{
    console.log(res);
    let tour = res.body.touristarea;
    $(".culture").find("img").attr("src",tour.t_renwen);
    $(".food").find("img").attr("src",tour.t_yinshi);
    $(".building").find("img").attr("src",tour.t_jianzhu);
    $(".notes").find("img").attr("src",tour.t_youji);
},"json");
});


var index = 1;
var windowWidth = $(window).width();
$('.theMenuArea ul li').width(windowWidth);
$('.theMenuArea ul').css('transition', 'none');
$('.theMenuArea ul').css('left', -windowWidth);
var timeImg = window.setInterval("set()", 4000);
var a = document.getElementsByClassName('singleMenu')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
var singleColor = function(index) {
  var singleMenu_ul_li = $('.singleMenu ul').children('li');
  singleMenu_ul_li.css('background-color', '#e2e2e2');
  if(index === 5 || index === 6) {
    index = 1;
  }
  a[index-1].style.backgroundColor = 'grey'; 
}
singleColor(index);
var set = function() {
  var formattedWidth = 0;
  $('.theMenuArea ul').css('transition', 'left 2s');
  formattedWidth = -(++index) * windowWidth;
  singleColor(index);
  if (index === 6) {
    formattedWidth = -windowWidth;
    $('.theMenuArea ul').css('transition', 'none');
    index = 1;
  }
  $('.theMenuArea ul').css('left', formattedWidth);

}
