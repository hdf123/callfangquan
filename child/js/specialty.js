$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	/**
	 * 专长
	 */
	$(".specialty div").click(function(){
		if($(this).is(".act")){
			$(this).removeClass("act");
		}else{
			$(this).addClass("act");
		}
	})
	$(".btns").click(function(){
		$(".screen").show();
	})
	/**
	 * 协议
	 */
	$(".screen").hide();
	var agreement=true;
	$(".agreement_box>p").click(function(){
		if(agreement){
			$(this).children("img").attr("src","../img/choose_b.png");
			agreement=false;
		}else{
			$(this).children("img").attr("src","../img/choose_a.png");
			agreement=true;
		}
	})
	$(".popup,.agreement").click(function(event){
		event.stopPropagation();
	})
	$(".btn>div:eq(0),.screen").click(function(){
		$(".screen").hide();
	})
	$(".btn>div:eq(1)").click(function(){
		var arr=[];
		for(var i=0;i<$(".specialty li").length;i++){
			if($(".specialty>li:eq("+i+")>div").is(".act")){
				arr.push($(".specialty>li:eq("+i+")>div").html());
			}
		}
		console.log(arr);
		console.log($(".money").val());
		$(".screen").hide();
	})
})
