/**
 * 引入子页面，点击返回上一页
 */
document.addEventListener('plusready', function() {
	var webview = plus.webview.currentWebview();
	plus.key.addEventListener('backbutton', function() {
		webview.canBack(function(e){
			if(e.canBack) {
				webview.back();
			} else {
				webview.close(); //hide,quit按手机返回键直接退出APP
				//plus.runtime.quit();
			}
		})
	});
});
/**
 * 登录状态
 */
if($.cookie('call_logins')==undefined||JSON.parse($.cookie('call_logins'))==false){
	location.href="../home/home.html";
}