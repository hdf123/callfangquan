$(function(){
	/**
	 * 更多
	 */
	$(".rights").click(function(){
		$(".cover").css({"display":"block"});
		$(".more").css({"display":"block"});
	})
	$(".cover").click(function(){
		$(".cover").css({"display":"none"});
		$(".more").css({"display":"none"});
	})
	//名片
	$(".more>li:eq(0)").click(function(){
		console.log($(this).index());
		location.href="alias.html?ind=1";
	})
	/**
	 * 关注
	 */
	$(".contents").on("click",".guanzhu",function(){
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html('<i class="iconfont">&#xe609;</i>关注');
			$(this).closest(".connoisseur_box").find(".recommended_box").remove();
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).html('<i class="iconfont icon-duihao"></i>已关注');
		}
	})
	/**
	 * tab切换
	 */
	$(".tab_box>ul").hide();
	$(".tab_box>ul:eq(0)").show();
	$('.experts_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var inds=$(this).index();
		var mm=12.5+(100/3*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".tab_box>ul").eq(inds).show().siblings().hide();
		});
	})
    $(".consulting").on("click",".views",function(){
    	location.href="details.html";
    })
	/**
	 * 关注、粉丝、帮助
	 */
	$(".heat>li:eq(0)").click(function(){
		location.href="Focus.html";
	})
	$(".heat>li:eq(1)").click(function(){
		location.href="fans.html";
	})
	$(".heat>li:eq(2)").click(function(){
		location.href="answer.html";
	})
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		var dom='';
		for(var i=0;i<30;i++){
			dom+='<div>'+(i+1)+'</div>'
		}
		$('.consulting').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function(){
	    LoadingDataFn();
	});
	$('.consulting').scroll(function() {
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
