$(document).ready(function(){
  var a_id = getQueryString("a_id");
  console.log(a_id);
  $.get('index.php?c=Main&a=getarticlebyaid',{"a_id":a_id},res=>{
     console.log(res);
     let article = (res.body.article)[0];
     let date =  getLocalTime(article.timestamp);
     $(".avatar").attr("u_id",article.u_id);
     $(".avatar img").attr("src",article.u_avatar);
     $(".title").html(article.a_title);
     $(".info span").eq(1).html(article.u_name);
     $(".info span").eq(2).html(article.browse_num);
     $(".info span").eq(3).html(date);
     $(".article_zan").html(article.a_zan);
     $('.article_collect').html(article.collectnum);
     $('.maincontent').append(article.a_content);
     $('.theMainImg').css("background","url("+article.a_cover+")");
     $(".theMainImg").css("background-size","100% 100%");
     $(".edittime").html(getLocalTime(article.timestamp));
  },"json");


  /**
   * 增加浏览次数
   */

   $.get("index.php?c=Main&a=addarticlebrowsenum",{"a_id":a_id},res=>{
       console.log(res.body.browse_num)
    $(".info span").eq(2).html(res.body.browse_num);
   },"json");

  /**
   * 评论分页展示
   */
  
  function showcomment(curr){
    $.get('index.php?c=Main&a=getcommentbyaid',{"a_id":a_id,"page":curr||1},res=>{
        // console.log(curr)
        let comment = res.body.comment;
        let pagesize = 4;
        let currnum = 1;
        if(curr){
            currnum = (curr-1)*pagesize+1
        }
        $('.article_response').html(comment.commentnum);
        // console.log(comment.commentlist.length);
        if(comment.commentlist.length > 0){
           $(".note-response").html("");
           comment.commentlist.forEach(function(c,index){
               let date2 = getLocalTime(c.timestamp);
               $(".note-response").append($("<div c_id="+c.c_id+" class='user-response'><span class='r-avatar'><a href=''><img src="+c.u_avatar+"></a></span><span class='r-info'><span id='userName'>"+c.u_name+"</span><span class='deliverTime'><span>发表于&nbsp;</span><span>"+date2+"</span></span><span class='floor'><span>"+currnum+"</span><span>L</span></span></span><span class='r-content'>"+c.c_content+"</span><span class='r-report'>举报</span><span class='r-response'>回复</span></div>"));   
               currnum++;
            });
           laypage({
            cont: 'page1', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: res.body.totalnum, //通过后台拿到的总页数
            curr: curr || 1, //当前页
            skin: 'yahei', //加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    showcomment(obj.curr);
                }
            }
        });
        }
    },"json")
  }
  
showcomment()

  /**
   * 
   * 发布评论
   */

  $('.send').click(function(){
      if(u_id !== -1){
        console.log($('.commentmsg').val())
        var data = {
            "c_content":$('.commentmsg').val(),
            "a_id":a_id,
         }
         console.log(data);
         $.post('index.php?c=Main&a=addcomment',data,res=>{
             console.log(res);
             $('.commentmsg').val("");
             showcomment();
         },"json");
      }else{
        layui.use('layer', function(){
			layer.open({
				title: '提示'
				,content: '请先登录'
			  });
			});
       } 
   })

   /**
    * 收藏
    */

   $(".article_collect").click(function(){
       if(u_id !== -1){
        $(this).toggleClass('icon-heart');
        $(this).toggleClass('icon-heart-h');
        // console.log($(this).attr("class"))
        if($(this).attr("class") === "article_collect icon-heart-h"){
            // console.log("111")
            $.get("index.php?c=Main&a=addcollect",{"a_id":a_id},res=>{
                $(".article_collect").html(parseInt($(".article_collect").html())+1);
                console.log(res)
            },"json");
        }else{
            $.get("index.php?c=Main&a=deletecollect",{"a_id":a_id},res=>{
                console.log(res);
                $(".article_collect").html(parseInt($(".article_collect").html())-1);
            },"json")
        }
       }else{
        layui.use('layer', function(){
			layer.open({
				title: '提示'
				,content: '请先登录'
			  });
			});
       }
    
});

  /**
   * 得到用户收藏id
   */
  if(u_id !== -1){
  $.get("index.php?c=Main&a=getallcollectid",res=>{
    console.log(res)

        let a_idlist = res.body.a_idlist;
        for(let a of a_idlist){
            if(a.a_id == a_id){
                $(".article_collect").attr("class","article_collect icon-heart-h");
                return;
            }
        } 
   },"json");
  }
   /**
    * 点赞
    * 
    */

    $(".article_zan").click(function(){
        $(this).toggleClass('icon-point-up');
        $(this).toggleClass('icon-point-up-h');
        // console.log($(this).attr("class"))
        if($(this).attr("class") === "article_zan icon-point-up-h"){
            // console.log("111")
            $.get("index.php?c=Main&a=addarticlezan",{"a_id":a_id},res=>{
                $(".article_zan").html(res.body.a_zan);
                console.log(res)
            },"json");
        }else{
            $.get("index.php?c=Main&a=cancelarticlezan",{"a_id":a_id},res=>{
                console.log(res);
                $(".article_zan").html(res.body.a_zan);
            },"json")
        }
        
    });


  function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

    /**
    * 
    * 时间戳转日期格式 
    */
    function getLocalTime(nS) {
        return new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm");
    }
    Date.prototype.Format = function (fmt) { //author: meizz   
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "h+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
});