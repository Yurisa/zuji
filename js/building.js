$(document).ready(function () {
    var t_id = getQueryString("t_id");
    var type = getQueryString("type");

    /**
     * 得到景区信息
     */

    $.get('index.php?c=Main&a=gettouristareabyid',{"t_id":t_id},res=>{
        console.log(res)
       let tour = res.body.touristarea;
       console.log(tour);
       let province = tour.p_name;
       let nation = tour.n_name;
       let touristarea = tour.t_name;
       $("#jianzhuimg").css("background","url("+tour.t_jianzhu+")");
       $("#jianzhuimg").css("background-size","100% 100%");
       $("#province").html(province);
       $("#nation").html(nation);
       $("#position").html(touristarea);
   },"json");


   $.get('index.php?c=Main&a=gettourmenu',{"t_id":t_id,"type":type},res=>{
        console.log(res);
        menu = res.body.menu;
        $("#building").html("");
        for(item of menu){
         $("#building").append("<div class='box secondLayer' menu_id="+item.menu_id+" ><div class='left-img'><a href=''><img src="+item.menu_imgurl+"></a></div><div class='right-info'><span>"+item.menu_title+"</span><p>"+item.menu_content+"</p></div>");
        }
        if($("#building").find(".secondLayer").length === 0){
            $("#building").find(".empty").show();
        }else{
            $("#building").find(".empty").hide();
        }
 },"json");
 


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
});