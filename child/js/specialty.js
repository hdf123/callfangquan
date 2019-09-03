$(function(){
	/**
	 * 专长
	 */
	$(".specialty li").click(function(){
		var arr=[];
		var ind=$(this).index();
		if($(this).children("div").is(".act")){
			$(this).children("div").removeClass("act");
		}else{
			$(this).children("div").addClass("act");
		}
		for(var i=0;i<$(".specialty li").length;i++){
			if($(".specialty>li:eq("+i+")>div").is(".act")){
				arr.push($(".specialty>li:eq("+i+")>div").html());
			}
		}
		if(arr.length>6){
			$(".specialty li").children("div").eq(ind).removeClass("act");
			alert('选择太多了');
		}
	})
	
	$(".btns").click(function(){
		$(".screen").show();
	})
	/**
	 * 协议
	 */
	$(".screen").hide();
	var agreement=false;
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
		var arr1=[];
		for(var i=0;i<$(".specialty li").length;i++){
			if($(".specialty>li:eq("+i+")>div").is(".act")){
				arr1.push($(".specialty>li:eq("+i+")>div").html());
			}
		}
		if(arr1.length<1) return alert("认证领域选择不能为空");
		if($(".money").val()=="") return alert("支付金额不能为空");
		console.log(arr1);
		console.log($(".money").val());
		$(".screen").hide();
		location.href="../home/my.html";
	})
})
