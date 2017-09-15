var t_id = getQueryString("t_id");


$.get('../index.php?c=main&a=gettouristareabyid',{"t_id":t_id},res=>{
    console.log(res)
   let tour = res.body.touristarea;
   console.log(tour);
   $("#administrators").html(tour.t_name);
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