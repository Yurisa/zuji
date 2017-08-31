$(document).ready(function(){
    var t_id = getQueryString("t_id");
    $.get('index.php?c=main&a=gettouristareabyid',{"t_id":t_id},res=>{
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

})