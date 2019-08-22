$(function(){
	var mys=false;
	if(mys){
		$(".rights,.experts>.guanzhu").hide();
	}else{
		$(".rights,.experts>.guanzhu").show();
	}
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
	$(".contents").on("click",".guanzhus",function(){
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html('<i class="iconfont">&#xe609;</i>关注');
			$(this).closest(".connoisseur_box").find(".recommended_box").remove();
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).html('<i class="iconfont">&#xe608;</i>互相关注');
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
		var mm=14+(100/3*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".tab_box>ul").eq(inds).show().siblings().hide();
		});
	})
	$(".tab_box>ul").hide();
	$(".tab_box>ul:eq(0)").show();
})
