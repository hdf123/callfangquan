$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
	/**
	 * 渲染利率
	 */
	for(i in interest_rate){
		for(j in interest_rate[i].arr1){
			var rate=(interest_rate[i].rate*10000)*(interest_rate[i].arr1[j]*10000)/100000000;
			$(".lists").append(`<li rate=${rate}><p>${interest_rate[i].arr2[j]}</p></li>`)
		}
	}
	$(".lists>li:first-child").append(`<i class="iconfont">&#xe73b;</i>`);
	/**
	 * 获取利率
	 */
	$('.inputk input').on('keypress', function (e){
	    var keycode = e.keyCode;
	    var texts=$(this).val();
	　　//keycode是键码，13也是电脑物理键盘的 enter 
	    if(keycode == '13') {
	    	e.preventDefault();
	    	console.log("texts="+texts);
	    }
	});
	$(".lists li").click(function(){
		$(this).append(`<i class="iconfont">&#xe73b;</i>`);
		$(this).siblings().children().remove("i");
		$(".inputk input").val($(this).attr("rate"));
	})
	$(".rights").click(function(){
		var rate=$(".inputk input").val();
		console.log(rate);
		localStorage.setItem('call_rate',JSON.stringify(rate));
		location.href="mortgage.html";
	})
	/*
	$(document).on("keypress",function(e){
		var keycode = e.keyCode;
		if(keycode == '13'){
			console.log(111);
			e.preventDefault();
		}
	})
	*/
})
