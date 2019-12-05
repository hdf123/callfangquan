$(function(){
	var b1=$(".experts_tab").offset().top;
	var headers=$("header")[0].getBoundingClientRect().height;
	var b2=$(".experts_tab")[0].getBoundingClientRect().height;
	//var b3=b1-headers;
	$(".box").css({"top":b1+"px"});
	
	
	$(".Introduction>i").click(function(){
		if($(this).closest(".Introduction").find(".as").is(".yy")){
			$(this).addClass("rotating");
			$(this).closest(".Introduction").find(".as").removeClass("yy");
			$(this).closest(".Introduction").find(".as").css({"height":"auto"});
		}else{
			$(this).removeClass("rotating");
			$(this).closest(".Introduction").find(".as").addClass("yy");
			$(this).closest(".Introduction").find(".as").css({"height":"0.5rem"});
		}
		var b1=$(".experts_tab").offset().top;
		var headers=$("header")[0].getBoundingClientRect().height;
		var b2=$(".experts_tab")[0].getBoundingClientRect().height;
		var b3=b1+b2-headers;
		$(".box").css({"top":+b3+"px"});
	})
	/**
	 * tab切换
	 */
	var inds=0,staging=0;
	$('.experts_tab>li').on('click', function() {
		inds=$(this).index();
		if($(this).index()!=3) staging=$(this).index();
		fff();
	})
	function fff(){
		$('.experts_tab>li').eq(inds).addClass("act").siblings().removeClass("act");
		var mm=8.5+(100/4*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			if(inds==3){
				$(".box>div").eq(inds).show();
			}else{
				$(".box>div").eq(inds).show().siblings().hide();
			}
		});
	}
/**
 * 发表的评论
 */
    var datask=[
    	{name:"小明",con:"111",id:1},
    	{name:"花花",con:"真好看",id:2},
    	{name:"秀儿",con:"666",id:3},
    	{name:"小明",con:"是的",id:1},
    	{name:"小虎",con:"是吗",id:4},
    ]
	$(document).ready(function(){//页面刚开始加载的数据
		funa(1);
	})
	function funa(n){
//		datask.reverse();
		var ns=0;
		console.log(n);
		if(n==1){
			ns=4;
		}else{
			ns=datask.length;
		}
		console.log(ns);
		for(var i=0;i<ns;i++){
			if(datask[i].id!=1){
				$(".cons").append('<div class="other">'
										+'<div>'
											+'<img src="" alt="" />'
											+'<div>'
												+'<p>name</p>'
												+'<div class="aa">${datask[i].con}</div>'
											+'</div>'
										+'</div>'
									+'</div>');
			}else{
				$(".cons").append('<div class="mys">'
									+'<div>'
										+'<div>'
											+'<p> </p>'
											+'<div class="bb">${datask[i].con}</div>'
										+'</div>'
										+'<img src="" alt="" />'
									+'</div>'
								+'</div>');
			}
		}
	}
	$(".box>div:eq(0)").hide();
	$(".comments_box").show();
	//当前时间展示；
	var timestamp=new Date().getTime();//当前时间戳
	$(".times").html(getMyDate(timestamp,1));
	/**
	 * 表情
	 */
	 var say = '请输入你的评论...';
	$("#page_emotion").hide();
	if ($("#form_article").html() === "") {
		$("#form_article").html(say);
	}
	$(".inputs img").click(function(event){
		$("#page_emotion").show();
		event.stopPropagation();
	})
	$("#form_article").click(function(){
        if($("#form_article").html() == say){
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
	$(".more").click(function(){//查看更多
		$(".cons").empty();
		funa(2);

	})
	//点赞、发送
	$(".btn>i").click(function(){
		if($(this).is(".icon-dianzan")){
			$(this).removeClass("icon-dianzan").addClass("icon-zan2");
		}else{
			$(this).removeClass("icon-zan2").addClass("icon-dianzan");
		}
	})
	$(".btn div").click(function(){
		send();
	})
	$('#form_article').on('keypress', function (e){
	    var keycode = e.keyCode;
	　　	//keycode是键码，13也是电脑物理键盘的 enter
	    if(keycode == '13') {
	    	e.preventDefault();
	    	send();
	    }
	});
	function send(){
		var sd={
			name:"小明",
			con:$("#form_article").html(),
			id:1
		}
		datask.push(sd);//讲发送的内容添加到数据库
//		datask.reverse();
		console.log(datask);
    	$(".cons").append('<div class="mys">'
							+'<div>'
								+'<div>'
									+'<p> </p>'
									+'<div class="bb">${$("#form_article").html()}</div>'
								+'</div>'
								+'<img src="" alt="" />'
							+'</div>'
						+'</div>');
		var scrollHeight = $('.cons').prop("scrollHeight");
      	$('.watch').scrollTop(scrollHeight,300);
//    	$(".watch").animate({scrollTop:"100%"},10);
	}
/**
 * 实况直播
 */
	function funa(){
		$(".live_box").append('<div class="live">'
						+'<div>'
							+'<div>'
								+'<div><p></p></div>'
								+'<div>2019-04-17  14:51:26</div>'
							+'</div>'
						+'</div>'
						+'<div>'
							+'<div>'
								+'<p>试乘直升机的客户难掩激动心情，纷纷拍照或录小视频</p>'
								+'<img src="" alt="" />'
							+'</div>'
						+'</div>'
					+'</div>');
	}
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		console.log("上拉加载");
		var dom='';
		funa();
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.live_box').scroll(function() {
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
	//关注更多
	$('.more_box').click(function(){
		$(this).hide();
		inds=staging;
		fff();
	})
    $(".more_box>div").click(function(event){
     	event.stopPropagation();
    })
})
