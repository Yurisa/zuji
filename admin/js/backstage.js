$(document).ready(function () {

    $("#user").click(function () {
        //数据分析-用户
        window.location.href = "user.html";
    });
    $("#travels").click(function () {
        //数据分析-游记
        window.location.href = "travels.html";
    });
    $("#area").click(function () {
        //数据分析-特色地区
        window.location.href = "area.html";
    });
    $("#nation").click(function () {
        //数据分析-少数民族
        window.location.href = "nation.html";
    });
     
    $.get('../index.php?c=Main&a=countnum',res=>{
        let body = res.body;
        $("#user").children().eq(1).html(body.usernum);
        $("#travels").children().eq(1).html(body.articlenum);
        $("#area").children().eq(1).html(body.touristareanum);
        $("#nation").children().eq(1).html(body.nationnum);
        },"json")
});
