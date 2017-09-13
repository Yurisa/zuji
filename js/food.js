$(document).ready(function () {

    //食物名字出现位置随机

    for(var i=0;i<$(".right-name").children().length;i++){
        var left = Math.ceil(Math.random() * 9);//产生随机数0-9之间的整数
        var right = Math.ceil(Math.random() * 5);//产生随机数0-5之间的整数
        $(".right-name").children().eq(i).css("margin-left", "50" * left);
        $(".right-name").children().eq(i).css("margin-right", "50" * right);
    }
    //点击食物出现介绍

    //图片轮播

    var scrollDiv=document.getElementsByClassName('scroll_div')[0];
    var data=[
        {url:'images/suantangyu.jpg',title:'酸汤鱼'},
        {url:'images/guzangrou.jpg',title:'鼓藏肉'},
        {url:'images/miaowangyu.jpg',title:'苗王鱼'},
        {url:'images/mihuafan.jpg',title:'米花饭'},
        {url:'images/zheergen.jpeg',title:'折耳根炒腊肉'},
        {url:'images/midoufu.jpg',title:'米豆腐'},
        {url:'images/suantangyu.jpg',title:'7'},];
    scrollDiv.style.width=300*(data.length+1)+"px";

    for(var i=0;i<data.length;i++){
        var myDiv=document.createElement('div');

        //在每个div里面添加img和p标签（图片和标题）
        myDiv.innerHTML='<img src="'+data[i].url+'"> <p>'+data[i].title+'</p>';

        //把创建的div放进scroll-div里面
        scrollDiv.appendChild(myDiv);
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
        if(left<=-300){
            left=0;
        }
        //每3秒调用滚动一张图片的函数
        move();
    },3000);

});
