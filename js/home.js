$(document).ready(function () {

    function fetch(){
        $.when(
            $.get("index.php?c=Main&a=randomtouristarea",res=>{
                console.log(res);
                $("#tour").html("");
               let tour = res.body.touristarea;
               $("#tour").append("<div class='item'><a href="+'menu.html?t_id='+tour.t_id+"><div class='img'><img src="+tour.t_cardimg+"><div class='tag'><span><i class='icon-eye'></i></span><span class='bt'>景点</span></div></div></a><div class='info'><div class='subtitle'><a href="+'menu.html?t_id='+tour.t_id+"><p>"+tour.name+"</p></a></div><div class='bottom'><a href="+'menu.html?t_id='+tour.t_id+"><span class='h_position'>"+tour.name+"</span><span class='h_renking'>当前景点排名第"+res.body.rank+"</span></a></div></div></div>")
            },"json"),
            $.get("index.php?c=Main&a=randomculture",res=>{
                console.log(res);
                $("#culture").html("");
                console.log("11111")
               let c = res.body.culture[0];
               $("#culture").append("<div class='item'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><div class='img'><img src="+c.menu_imgurl+"><div class='tag'><span><i class='icon-eye'></i></span><span class='bt'>人文</span></div></div></a><div class='info'><div class='subtitle'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><p>"+c.menu_title+"</p></a></div><div class='bottom'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><span class='h_position'>"+c.t_name+"</span><span class='h_renking'>当前景点排名第"+c.rank+"</span></a></div></div></div>")
            },"json"),
            $.get("index.php?c=Main&a=randomdiet",res=>{
                console.log(res);
                $("#diet").html("");
                console.log("2222")
               let c = res.body.diet[0];
               $("#diet").append("<div class='item'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><div class='img'><img src="+c.menu_imgurl+"><div class='tag'><span><i class='icon-eye'></i></span><span class='bt'>饮食</span></div></div></a><div class='info'><div class='subtitle'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><p>"+c.menu_title+"</p></a></div><div class='bottom'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><span class='h_position'>"+c.t_name+"</span><span class='h_renking'>当前景点排名第"+c.rank+"</span></a></div></div></div>")
            },"json"),
            $.get("index.php?c=Main&a=randomarticle",res=>{
                console.log(res);
                $("#note").html("");
                console.log("333333")
               let c = res.body.article[0];
               $("#note").append("<div class='item'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><div class='img'><img src="+c.a_cover+"><div class='tag'><span><i class='icon-eye'></i></span><span class='bt'>游记</span></div></div></a><div class='info'><div class='subtitle'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><p>"+c.a_title+"</p></a></div><div class='bottom'><a href="+'culture.html?t_id='+c.t_id+'&type=humanities'+"><span class='h_position'>"+c.t_name+"</span><span class='h_renking'>当前景点排名第"+c.rank+"</span></a></div></div></div>")
            },"json"),
        );
    }
    fetch();
    $(".loop").click(function(){
        fetch();
    })
    async function test(){
          try {
              let res = await  $.get("index.php?c=Main&a=randomtouristarea");
              return JSON.parse(res);
          } catch (error) {
            console.log(`ERROR: ${error.stack}`);
          }
    }
    test().then(res => {console.log("这是测试的")
      console.log(res)
 })
});