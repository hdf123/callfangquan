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
			localStorage.setItem('call_enterprise', JSON.stringify(ind));
			location.href="brand_enterprise.html";
		} 
	})
	//精选品牌:0;人气品牌:1;新锐品牌:2;
	$(".btn").click(function(){
		var ind=$(this).attr("typew");
		localStorage.setItem('call_typew', JSON.stringify(ind));
		location.href="brand_child.html";
	})
	$(".sentiments>li,.newks>li").click(function(){
		var ind=$(this).index();
		localStorage.setItem('call_enterprise', JSON.stringify(ind));
		location.href="brand_enterprise.html";
	})
})
