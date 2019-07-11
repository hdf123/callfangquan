$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
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
	$(".more>li").click(function(){
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
			$(this).html(`√已关注`);
		}
	})
	$(".tab_box>ul").hide();
	$(".tab_box>ul:eq(0)").show();
	/**
	 * tab切换
	 */
	$('.experts_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var inds=$(this).index();
		var mm=12.5+(100/3*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".tab_box>ul").eq(inds).show().siblings().hide();
		});
	})
	/**
	 * 关注、粉丝
	 */
	$(".heat>li:eq(0)").click(function(){
		location.href="Focus.html"
	})
	$(".heat>li:eq(1)").click(function(){
		location.href="Focus.html"
	})
})
