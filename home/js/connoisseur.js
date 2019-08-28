$(function(){
	/**
	 * 搜索
	 */
	$(".search").click(function(){
//		location.href="../child/search.html";
	})
	var mySwiper = new Swiper('.swiper1', {
		slidesPerView :7,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
		onClick: function(swiper) {
			var ind=swiper.clickedSlide.attributes["ind"].nodeValue;
			$(".swiper1 .swiper-slide").eq(ind).addClass("act").siblings().removeClass("act");
		} 
	})
	$(".more").hide();
	$(".swiper1").on("click",".morek",function(){
		$(".more").toggle();
	})
	$(".more>div").click(function(){
		console.log($(this).index());
		$(this).children().addClass("act").parent().siblings().children().removeClass("act");
	})
	/**
	 * 隐藏相关推荐
	 */
	$(document).click(function(){
		$(".recommended_box").hide();
	})
	/**
	 * 关注
	 */
	$(".contents").on("click",".guanzhu",function(event){
		event.stopPropagation();
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html('<i class="iconfont">&#xe609;</i>关注');
			$(this).closest(".connoisseur_box").remove();
//			$(this).closest(".connoisseur_box").find(".recommended_box").remove();
			
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).html('<i class="iconfont icon-duihao"></i>已关注');
			
			$(this).closest(".connoisseur_box").children("div:eq(0)").after('<div class="recommended_box">'
						+'<p>相关推荐</p>'
						+'<ul class="recommended">'
							+'<li class="">'
						    	+'<img src="" alt="" />'
						    	+'<h3>孙家财1</h3>'
						    	+'<p>和昌集团郑州公司</p>'
						    	+'<p>总经理</p>'
						    	+'<div class="guanzhus Care_about">'
						    		+'<i class="iconfont">&#xe609;</i>关注'
						    	+'</div>'
						    	+'<i class="iconfont deletes">&#xe65b;</i>'
						   +'</li>'
						+'</ul>'
					+'</div>')
		}
	})
	$(".contents").on("click",".deletes",function(event){
		$(this).parent().remove();
		event.stopPropagation();
	})
	$(".contents").on("click",".questions",function(event){
		event.stopPropagation();
	})
	$(".contents").on("click",".guanzhus",function(){
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html('<i class="iconfont">&#xe609;</i>关注');
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).html('<i class="iconfont icon-duihao"></i>已关注');
		}
	})
	/**
	 * 专家
	 */
	$(".contents").on("click",".connoisseur",function(){
		location.href="../child/experts.html";
	})
	/**
	 * 咨询、回答
	 */
	$(".contents").on("click",".questions>div:eq(0)",function(){
		location.href="../child/WantConsulting.html";
	})
	$(".contents").on("click",".questions>div:eq(1)",function(){
		location.href="../child/answer.html";
	})
	//输入底部隐藏
    var mHeight = $(document).height();
    $(window).resize(function () {//对浏览器窗口调整大小进行显示隐藏
        if($(document).height() < mHeight){
            $(".footers").hide();
            $("section").css({"bottom":0});
        }else{
            $(".footers").show();
            $("section").css({"bottom":"2.5rem"});
        }
    });
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
			$(".loading_box").hide();
			$('.loadings').shCircleLoader('destroy');
		}, 1000);
		console.log("上拉加载");
		var dom='';
		for(var i=0;i<30;i++){
			dom+='<div>'+(i+1)+'</div>'
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
})
