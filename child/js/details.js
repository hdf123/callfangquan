$(function(){
	$(".answer").hide();
	$(".btn").click(function(){
		$(this).hide(10,function(){
			$(".answer").show();
		})
	})
})
