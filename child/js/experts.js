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
	$(".more>li:eq(0)").click(function(){
		console.log($(this).index());
		location.href="alias.html";
	})
	/**
	 * 关注
	 */
	$(".contents").on("click",".guanzhu",function(){
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html(`<i class="iconfont">&#xe609;</i>关注`);
			$(this).closest(".connoisseur_box").find(".recommended_box").remove();
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).html(`<i class="iconfont icon-duihao"></i>已关注`);
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
})
