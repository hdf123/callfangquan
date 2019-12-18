$(function(){
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
			$(this).html('收起 <i class="iconfont icon-shangla"></i>');
		}else{
			kk=true;
			$(this).prev().css({"height":"2.5rem"});
			$(this).html('查看共3条回复 <i class="iconfont icon-xiala1"></i>');
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
	$('.inp').on('keypress', function (e){
	    var keycode = e.keyCode;
	　　	//keycode是键码，13也是电脑物理键盘的 enter
	    if(keycode == '13') {
	    	e.preventDefault();
	    	reply();
	    }
	});
	$(".footers>div").click(function(){
		reply();
	})
	function reply(){
		if(names==""){
			return alert("请选择要回复的对象");
		}
		var inp=$(".footers>input").val();
		console.log(inp);
		var ulli=$(".discuss_box>li");
		console.log(ulli.length);
		for(var i=0;i<ulli.length;i++){
			if($(".discuss_box>li").eq(i).attr("nam")==names){
				$(".discuss_box>li").eq(i).find(".reply_box>ul").append('<li>'+inp+'</li>');
			}
		}
	}
	/**
	 * 滚动事件
	 */
	$(".contents").scroll(function(){
		var headHeight=$(".headers").outerHeight()+5;
		var sk=$(".contents").scrollTop();
		var he=$(".images").outerHeight()-headHeight;
		var bai=(sk/he).toFixed(1);
		$(".headers").css({"background-color":"rgba(255,255,255,"+bai+")"});
		if(bai>1){
			$(".headers").css({"border-bottom":"1px solid #e5e5e5"});
		}else{
			$(".headers").css({"border-bottom":"none"});
		}
	})
})