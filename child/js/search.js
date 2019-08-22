$(function(){
	var call_record = JSON.parse(localStorage.getItem('call_record'));
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
})