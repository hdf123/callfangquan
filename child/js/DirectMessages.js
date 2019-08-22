$(function(){
	var call_name = JSON.parse(localStorage.getItem('call_name'));
	$(".centers").html(call_name);
	$(".puba").focus();
	//输入数量限制
	var len=0,total=200,states=false;
	$('.puba').on('input propertychange', function (e){
	    var texts=$(this).val();
		if(texts.length>total){
			len=total;
		}else{
			len=texts.length;
		}
	    $(".review_box>div").html(len+'/'+total);
		numks();
	});
	function numks(){
		if($(".image_box .imgs").length<=0&&len==0){
			$(".rights").css({"color":"#333333"});
		}else{
			states=true;
			$(".rights").css({"color":"#0099ff"});
		}
	}
	/**
	 * 发送
	 */
	$(".rights").click(function(){
		if($(".puba").val().trim().length<1){
			return alert("发送内容不可为空");
		}
		console.log($(".puba").val());
	})
})
