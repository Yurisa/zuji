$(document).ready(function () {

    // 搜索样式显示

    $(".search-list ul li").click(function () {
        $(".search-list ul li").css("border-bottom", "0px");
        $(this).css("border-bottom", "5px solid #3366FF");
        var i = $(".search-list ul li").index(this);
        $(".search-show").hide();
        $(".search-show").eq(i).show();
    });


    $(".search-ways ul li").click(function () {
        $(".search-ways ul li").css("background-color","#FFFFFF");
        $(".search-ways ul li").css("color","#000000");
        $(this).css("background-color","#3366FF");
        $(this).css("color","#FFFFFF");
    });

});