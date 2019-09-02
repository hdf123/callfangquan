$(function(){
	var call_record = JSON.parse(localStorage.getItem('call_record'));
	var shows=true,ksk=3;
	console.log(call_record);
	if(call_record==null){
		var call_record=[];
		$(".results").hide();//搜索结果
	}else{
		console.log(111111);
		$(".without").hide();//历史为空
		$(".results").hide();//搜索结果
		var record="";
		for(i in call_record){
			record+='<li class="record">'+call_record[i]+'</li>';
		}
		$(".contents").append('<div class="contents_box">'
								+'<div>'
									+'<div>搜索历史</div>'
									+'<i class="iconfont removek">&#xe646;</i>'
								+'</div>'
								+'<ul class="record_box">'+record+'</ul>'
							+'</div>')
	}
	//清除历史记录
	$(".contents").on("click",".removek",function(){
		$(".contents_box").hide();//历史记录
		localStorage.removeItem('call_record');
		$(".without").show();
	})
	$('.headers input').on('keypress', function (e){
	    var keycode = e.keyCode;
	　　	//keycode是键码，13也是电脑物理键盘的 enter
	    if(keycode == '13') {
	    	e.preventDefault();
	    	console.log("texts="+$(this).val());
	    	call_record.push($(this).val())
	    	//数组去重
	    	call_record=heavy(call_record);
	    	call_record=call_record.slice(-100);//只保存100条记录
	    	localStorage.setItem('call_record', JSON.stringify(call_record));
	    	search($(this).val());
	    }
	});
	$(".contents").on("click",".record",function(){
		search($(this).html());
	})
	
	function search(ss){
		$(".without").hide();//历史为空
	    $(".contents_box").hide();//历史记录
	    $(".contents>ul").show();//搜索结果
  		var sd= $(".results").find('h3:contains('+ ss +')').closest(".connoisseur_box");
  		console.log(sd.length);
  		if(sd.length<1){
  			alert("没有你要搜索的结果，请重新输入");
  		}
  		$(".results").html(sd);
	}
	/**
	 * 隐藏相关推荐
	 */
	$(".contents").on("click",".control",function(){
		if(shows){
			shows=false;
			$(this).children("img").attr("src","../img/c2.png")
			$(this).closest(".connoisseur_box").find(".recommended_box").hide();
		}else{
			shows=true;
			$(this).children("img").attr("src","../img/c1.png")
			$(this).closest(".connoisseur_box").find(".recommended_box").show();
		}
	})
	/**
	 * 关注
	 */
	$(".contents").on("click",".guanzhu",function(event){
		event.stopPropagation();
		if($(this).is(".cancel")){
			$(this).removeClass("cancel").addClass("Care_about");
			$(this).html('关注');
			//清除当前行家
			$(this).closest(".connoisseur_box").remove();
			//清除当前行家相关推荐
			//$(this).closest(".connoisseur_box").find(".recommended_box").remove();
			
		}else{
			$(this).removeClass("Care_about").addClass("cancel");
			$(this).closest(".connoisseur_box").children(".questions").before('<div class="recommended_box">'
						+'<p>相关推荐</p>'
						+'<div class="recommended">'
							+'<ul class="recommended">'
								+'<li class="recommended_child">'
									+'<div>'
										+'<img src="" alt="" />'
								    	+'<h3>孙家财1</h3>'
								    	+'<p>和昌集团郑州公司</p>'
								    	+'<p>总经理</p>'
								    	+'<div class="guanzhus Care_about">'
								    		+'<img src="../img/duis.png" alt="" />关注</div>'
								    	+'<i class="iconfont deletes">&#xe65b;</i>'
							    	+'</div>'
								+'</li>'
							+'</ul>'
						+'</div>'	
					+'</div>');
						
			$(this).parent().html('<div class="guanzhu cancel">'
									+'<img src="../img/dui.png" alt="" />已关注'
								+'</div>'
								+'<div class="control">'
									+'<img src="../img/down.png" alt="" />'
								+'</div>');
		}
	})
	$(".contents").on("click",".deletes",function(event){
		var _this=$(this).closest(".recommended");
		$(this).closest(".recommended_child").remove();
		funk(_this);
		event.stopPropagation();
	})
	function funk(_this){
		var len=_this.children("li").length;
		console.log(len);
		if(len<1){
			alert("添加已关注行家数据");
		}else{
			ksk+=1;
			//alert("重新进行相关推荐数据请求");
			_this.append('<li class="recommended_child">'
							+'<div>'
								+'<img src="" alt="" />'
						    	+'<h3>孙家财'+ksk+'</h3>'
						    	+'<p>和昌集团郑州公司</p>'
						    	+'<p>总经理</p>'
						    	+'<div class="guanzhus Care_about">'
						    		+'<img src="../img/duis.png" alt="" />关注'
						    	+'</div>'
						    	+'<i class="iconfont deletes">&#xe65b;</i>'
							+'</div>'
						+'</li>');
		}
	}
	$(".contents").on("click",".guanzhus",function(){
		var _this=$(this).closest(".recommended");
		$(this).closest(".recommended_child").remove();
		funk(_this);
	})
	/**
	 * 专家
	 */
	$(".contents").on("click",".connoisseur",function(event){
		location.href="../child/experts.html";
		event.stopPropagation();
	})
	/**
	 * 咨询、回答
	 */
	$(".contents").on("click",".questions>div:eq(0)",function(){
		location.href="../child/WantConsulting.html";
	})
	$(".contents").on("click",".questions>div:eq(1)",function(){
		location.href="../child/answer.html";
	})
})