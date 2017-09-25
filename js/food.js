$(document).ready(function () {
     var t_id = getQueryString("t_id");
     var type = getQueryString("type");
    //点击食物出现介绍
    $(document).on("click", ".right-name div", function () {
        $(".introduce").show();
        $(".left-img a img").attr("src",$(this).attr("imgsrc"));
        $(".right-info").children("span").html("")
        $(".right-info").children("span").html($(this).html());
        $(".right-info").children("p").html($(this).attr("content"));
        // window.location.href = "food.html?menu_content=" + $(".right-info").children("p").attr("menu_content");
    });
    $(".close").click(function () {
        $(".introduce").hide();
    });
    
    /**
     * 点击图片出现介绍
     */
    
    $(document).on("click", ".yinshiimg", function () {
        $(".introduce").show();
        $(".left-img a img").attr("src",$(this).children("img").attr("src"));
        $(".right-info").children("span").html("");
        $(".right-info").children("p").html("");
        $(".right-info").children("span").html($(this).children("p").html());
        $(".right-info").children("p").html($(this).attr("content"));
        // window.location.href = "food.html?menu_content=" + $(".right-info").children("p").attr("menu_content");
    });
    $(".close").click(function () {
        $(".introduce").hide();
    });
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
       $("#yinshiimg").css("background","url("+tour.t_yinshi+")");
       $("#yinshiimg").css("background-size","100% 100%");
       $("#province").html(province);
       $("#nation").html(nation);
       $("#position").html(touristarea);
   },"json");

    //图片轮播

    var scrollDiv=document.getElementsByClassName('scroll_div')[0];
    $.get('index.php?c=Main&a=gettourmenu',{"t_id":t_id,"type":type},res=>{
        console.log(res)
        let menu = res.body.menu;
        $(".right-name").html("");
        for(let m of menu){
           $(".right-name").append("<div class='menutitle' content="+m.menu_content+" imgsrc="+m.menu_imgurl+">"+m.menu_title+"</div>")
        }
            //食物名字出现位置随机

        for(var i=0;i<$(".right-name").children().length;i++){
            var left = Math.ceil(Math.random() * 9);//产生随机数0-9之间的整数
            var right = Math.ceil(Math.random() * 5);//产生随机数0-5之间的整数
            $(".right-name").children().eq(i).css("margin-left", "30" * left);
            // $(".right-name").children().eq(i).css("margin-right", "50" * right);
        }
        var data = menu.concat(menu);//c=[1,2,3,4,5,6]
        console.log(data);
        scrollDiv.style.width=300*(data.length+1)+"px";
        
            for(var i=0;i<data.length;i++){
                // var myDiv=document.createElement('div');
                // myDiv.setAttribute("class","yinshiimg");
                //在每个div里面添加img和p标签（图片和标题）
                $(".scroll_div").append('<div class="yinshiimg" menu_id="'+data[i].menu_id+'" content="'+data[i].menu_content+'"><img  src="'+data[i].menu_imgurl+'" > <p>'+data[i].menu_title+'</p></div>');
                //把创建的div放进scroll-div里面
                // scrollDiv.appendChild(myDiv);
            }
            //定义初始值
            var left=0;
            function move(){
                //创建定时器 滚动一张图片
                var timer=setInterval(function(){
                    //让初始值逐渐减小
                    left-=4;
                    //当left对300取余等于0时 清除定时器（每张图片的宽度是300）
                    if(left%300==0){
                        clearInterval(timer);
                        timer=null;
                    }
                    //把left值 赋值给scrollDiv的marginLeft属性 以改变他的位置
                    scrollDiv.style.marginLeft=left+"px";
                },20);}
            //创建定时器 每个固定时间滚动一张图片
            setInterval(function(){
                //图片头接尾
                if(left<=-1800){
                    left=0;
                }
                //每3秒调用滚动一张图片的函数
                move();
            },3000);
        
     },"json");


     
    // var data=[
    //     {url:'images/suantangyu.jpg',title:'酸汤鱼'},
    //     {url:'images/guzangrou.jpg',title:'鼓藏肉'},
    //     {url:'images/miaowangyu.jpg',title:'苗王鱼'},
    //     {url:'images/mihuafan.jpg',title:'米花饭'},
    //     {url:'images/zheergen.jpeg',title:'折耳根炒腊肉'},
    //     {url:'images/midoufu.jpg',title:'米豆腐'},
    //     {url:'images/suantangyu.jpg',title:'酸汤鱼'},
    //     {url:'images/guzangrou.jpg',title:'鼓藏肉'},
    //     {url:'images/miaowangyu.jpg',title:'苗王鱼'},
    //     {url:'images/mihuafan.jpg',title:'米花饭'},
    //     {url:'images/zheergen.jpeg',title:'折耳根炒腊肉'},
    //     {url:'images/midoufu.jpg',title:'米豆腐'}];
    
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
