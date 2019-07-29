$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	$(".tensile>div").click(function(){
		console.log(111);
		$(this).prev().css({"-webkit-line-clamp":"999"});
	})
	/**
	 * 滚动事件
	 */
	$(".contents").scroll(function(){
		var sk=$(".contents").scrollTop();
		console.log(sk);
		var he=$(".images").outerHeight();
		console.log("he---"+he);
		var bai=(sk/he).toFixed(1);
		console.log("百分比---"+(sk/he).toFixed(1));
		$(".headers").css({"background-color":"rgba(255,255,255,"+bai+")"});
	})
})