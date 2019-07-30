$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
	$(".connoisseur").click(function(){
		location.href="../child/certification.html";
	})
})
