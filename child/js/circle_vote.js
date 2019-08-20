$(function(){
	$(".tensile>div").click(function(){
		if($(this).children("i").is(".icon-xiala1")){
			$(".tensile>p").removeClass("omit");
			$(this).children("i").removeClass("icon-xiala1").addClass("icon-shangla");
			$(this).children("span").html("收起");
		}else{
			$(".tensile>p").addClass("omit");
			$(this).children("i").removeClass("icon-shangla").addClass("icon-xiala1");
			$(this).children("span").html("展开");
		}
	})
	$(".proportion").hide();
	if($(".tetragonals").text()==$(".anti-sides").text()){
		$(".score>li:eq(0)").css({"width":"50%"});
		$(".score>li:eq(1)").css({"width":"50%"});
	}else{
		$(".score>li:eq(0)").css({"width":$(".tetragonals").text()+"%"});
		$(".score>li:eq(1)").css({"width":$(".anti-sides").text()+"%"});
	}
	$(".tetragonal").click(function(){
		$(".tetragonals").attr("mun",Number($(".tetragonals").attr("mun"))+1);
		func();
	})
	$(".anti-side").click(function(){
		$(".anti-sides").attr("mun",Number($(".anti-sides").attr("mun"))+1);
		func();
	})
	function func(){
		$(".proportion").show();
		$(".vote_box>div:eq(1)").hide();
		var zheng=Number($(".tetragonals").attr("mun"));
		var fan=Number($(".anti-sides").attr("mun"));
		var sum=zheng+fan;
		$(".tetragonals").text(Math.round(zheng/sum*100));
		$(".score>li:eq(0)").css({"width":$(".tetragonals").text()+"%"});
		$(".anti-sides").text(100-$(".tetragonals").text());
		$(".score>li:eq(1)").css({"width":$(".anti-sides").text()+"%"});
	}
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
	//点赞
	var state=false;
	$(".contents").on("click",".praise",function(){
		if(!state){
			state=true;
			$(this).children("img").attr("src","../img/ab.png");
			$(this).children("span").text(Number($(this).children("span").text())+1)
		}else{
			state=false;
			$(this).children("img").attr("src","../img/aa.png");
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