$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	var kk=true;
	$(".discuss_box").on("click",".btns",function(){
		if(kk){
			kk=false;
			$(this).prev().append(`<li>666</li>`);
			$(this).prev().css({"height":"auto"});
			$(this).html(`收起<i class="iconfont icon-shangla"></i>`);
		}else{
			kk=true;
			$(this).prev().css({"height":"2.5rem"});
			$(this).html(`查看共3条回复<i class="iconfont icon-xiala1"></i>`);
		}
	})
	/**
	 * 滚动事件
	 */
	$(".contents").scroll(function(){
		var sk=$(".contents").scrollTop();
		var he=$(".images").outerHeight();
		var bai=(sk/he).toFixed(1);
		$(".headers").css({"background-color":"rgba(255,255,255,"+bai+")"});
		if(bai>1){
			$(".headers").css({"border-bottom":"1px solid #e5e5e5"});
		}else{
			$(".headers").css({"border-bottom":"none"});
		}
	})
})