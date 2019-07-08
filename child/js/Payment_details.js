$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
	var call_chart=JSON.parse(localStorage.getItem('call_chart'));//转为对象
	var ak=call_chart.yuegong.toFixed(2);
	function formatCurrencyTenThou(num) { 
	　　num = num.toString().replace(/\$|\,/g,''); 
	　　if(isNaN(num)) 
	　　num = "0"; 
	　　sign = (num == (num = Math.abs(num))); 
	　　num = Math.floor(num*10+0.50000000001); 
	　　num = Math.floor(num/10).toString(); 
	　　for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) 
	　　num = num.substring(0,num.length-(4*i+3))+','+ 
	　　num.substring(num.length-(4*i+3)); 
	　　return (((sign)?'':'-') + num ); 
	}
	$(".money").html(formatCurrencyTenThou(ak.split(".")[0])+"."+ak.split(".")[1]);
	$(".money_title>li").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
	})
//	for(var i=0;i<100;i++){
//		$(".money_conts").append(`<li>${i+1}</li>`);
//	}
})

