$(function(){
	/**
	 * tab切换
	 */
	$('.experts_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var inds=$(this).index();
		var mm=21+(100/2*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".tab_box>ul").eq(inds).show().siblings().hide();
		});
	})
	$(".tab_box>ul").hide();
	$(".tab_box>ul:eq(0)").show();
	/**
	 * 多行显示隐藏
	 */
	$(".Introduction>i").click(function(){
		if($(this).prev().is(".yy")){
			$(".Introduction>i").rotate({"animateTo": "180","duration":"500"})
			$(this).prev().removeClass("yy");
			$(this).prev().css({"height":"auto"});
		}else{
			$(this).prev().addClass("yy");
			$(this).prev().css({"height":"0.5rem"});
		}
	})
})
