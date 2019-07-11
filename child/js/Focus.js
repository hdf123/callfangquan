$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
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
	
})
