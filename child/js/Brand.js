$(function(){
	/**
	 * 精选品牌
	 */
	var mySwiper = new Swiper('.swiper1', {
		slidesPerView :3.5,
		spaceBetween: 10,
		onClick: function(swiper) {
			var ind=swiper.clickedSlide.attributes["ind"].nodeValue;
			console.log(ind);
			$.cookie('call_enterprise', JSON.stringify(ind), { expires: 7, path: '/' });
			location.href="brand_enterprise.html";
		} 
	})
	//精选品牌:0;人气品牌:1;新锐品牌:2;
	$(".btn").click(function(){
		var ind=$(this).attr("typew");
		$.cookie('call_typew', JSON.stringify(ind), { expires: 7, path: '/' });
		console.log(ind);
		location.href="brand_child.html";
	})
	$(".sentiments>li,.newks>li").click(function(){
		var ind=$(this).index();
		console.log(ind);
		$.cookie('call_enterprise', JSON.stringify(ind), { expires: 7, path: '/' });
		location.href="brand_enterprise.html";
	})
})
