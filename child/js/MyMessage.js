$(function(){
	/**
	 * 上拉加载
	 */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		var dom='';
		for(var i=0;i<30;i++){
			dom+='<li>'+(i+1)+'</li>';
		}
		$('.contents').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	              off_on = false;
	              page++;
	              console.log("第"+page+"页");
	              LoadingDataFn();  //调用执行上面的加载方法
	        }
	    }
	});
	//选择回复
	var say = '回复留言...',names="";
	$(".footers").hide();
	$(".contents").on("click",".reply",function(){
		names=$(this).closest(".message_title").find(".name").html();
		$("#form_article").html("回复"+names+"：");
		$(".footers").show();
		$(".contents").css({"bottom":"1.307rem"});
	})
	
	$("#page_emotion").hide();
	if ($("#form_article").html() === "") {
		$("#form_article").html(say);
	}
	$("#form_article").click(function(){
		console.log(names);
        if($("#form_article").html() == say||$("#form_article").html()=="回复"+names+"："){
           	$("#form_article").html("");
        }
    });
    $("#page_emotion").click(function(event){
     	event.stopPropagation();
     })
    $("#page_emotion dd").click(function(){//表情
        $("#form_article").html( $("#form_article").html().replace(say, '') );
    });
    $(document).click(function(){
    	$("#page_emotion").hide();
    })
    $(".expression").click(function(event){
    	$("#page_emotion").toggle();
    	event.stopPropagation();
    })
    $(".btn").click(function(){
    	console.log($(".inputs article").html());
    })
})
