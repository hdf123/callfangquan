$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	$(".identity").click(function(){
		location.href="IndividualTopic.html";
	})
	/**
	 * 评论
	 */
	var kk=true;
	$(".discuss_box").on("click",".btns",function(){
		if(kk){
			kk=false;
			$(this).prev().css({"height":"auto"});
			$(this).html(`收起<i class="iconfont icon-shangla"></i>`);
		}else{
			kk=true;
			$(this).prev().css({"height":"2.5rem"});
			$(this).html(`查看共3条回复<i class="iconfont icon-xiala1"></i>`);
		}
	})
	var names="";
	$(".contents").on("click",".reply",function(){
		names=$(this).closest(".discuss").attr("nam");
		$(".inp").attr("placeholder","回复"+names+"~");
	})
	
	$(".contents").on("click",".praise",function(){
		if($(this).children("i").is(".icon-dianzan")){
			$(this).children("i").removeClass("icon-dianzan").addClass("icon-zan2");
			$(this).children("span").text(Number($(this).children("span").text())+1)
		}else{
			$(this).children("i").removeClass("icon-zan2").addClass("icon-dianzan");
			$(this).children("span").text(Number($(this).children("span").text())-1)
		}
	})
	/**
	 * 发表
	 */
	$(".footers>div").click(function(){
		if(names==""){
			return alert("请选择要回复的对象");
		}
		var inp=$(".footers>input").val();
		console.log(inp);
		var ulli=$(".discuss_box>li");
		console.log(ulli.length);
		for(var i=0;i<ulli.length;i++){
			if($(".discuss_box>li").eq(i).attr("nam")==names){
				console.log(111);
				$(".discuss_box>li").eq(i).find(".reply_box>ul").append(`<li>${inp}</li>`);
			}
		}
	})
	/**
	 * 滚动事件
	 */
	$(".contents").scroll(function(){
		var headHeight=$(".headers").outerHeight()+5;
		var sk=$(".contents").scrollTop();
		var he=$(".images").outerHeight()-headHeight;
		var bai=(sk/he).toFixed(1);
//		console.log(sk);
//		console.log(he);
//		console.log(bai);
		$(".headers").css({"background-color":"rgba(255,255,255,"+bai+")"});
		if(bai>1){
			$(".headers").css({"border-bottom":"1px solid #e5e5e5"});
		}else{
			$(".headers").css({"border-bottom":"none"});
		}
	})
})