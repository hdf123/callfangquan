$(function(){
	/**
	 * 上拉加载
	 */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
    	$(".loading_box").show(10,function(){
    		$('.loadings').shCircleLoader();
    	});
		setTimeout(function(){//假设请求成功后取消loading动画
			$(".loading_box").hide(10,function(){
				$('.loadings').shCircleLoader('destroy');
			});
		}, 1000);
		var dom='';
		for(var i=0;i<3;i++){
			dom+='<div class="lists">'
					+'<div class="message_title">'
						+'<div>'
							+'<img src="" alt="" />'
							+'<div>'
								+'<div class="name">戴琳jur</div>'
								+'<p>19-05-13  16:27</p>'
							+'</div>'
						+'</div>'
						+'<div class="reply">回复</div>'
					+'</div>'
					+'<div class="message_content">'
						+(i+1)+'筑美好人居 享丰盛人生筑美好人居 享丰盛人生'
						+'筑美好人居 享丰盛人生筑美好人居 享丰盛人生'
						+'筑美好人居 享丰盛人生筑美好人居 享丰盛人生'
					+'</div>'
					+'<div class="reply_box">'
						+'<img src="" alt="" />'
						+'<div>'
							+'<div>'
								+'<div>name</div>'
								+'<div>19-05-13  16:27</div>'
							+'</div>'
							+'<div>'
								+'回复<span>戴琳jur</span>：筑美好人居 享丰盛人生筑美好人居 享丰盛人生'
							+'</div>'
						+'</div>'
					+'</div>'
				+'</div>';
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
	var say = '回复留言...',names="",ks='';
	$(".footers").hide();
	$(".contents").on("click",".reply",function(){
		names=$(this).closest(".message_title").find(".name").html();
		
		ks=$(this).closest(".lists");
		
		
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
    	ks.append('<div class="reply_box">'
					+'<img src="" alt="" />'
					+'<div>'
						+'<div>'
							+'<div>name</div>'
							+'<div>19-05-13  16:27</div>'
						+'</div>'
						+'<div>'
							+'回复<span>戴琳jur</span>：'+$(".inputs article").html()
						+'</div>'
					+'</div>'
				+'</div>')
    	
    	names="";
    	ks='';
    	$("#form_article").html(say);
    })
})
