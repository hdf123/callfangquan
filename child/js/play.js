$(function(){
	var b1=$(".experts_tab").offset().top;
	var headers=$("header")[0].getBoundingClientRect().height;
	var b2=$(".experts_tab")[0].getBoundingClientRect().height;
//	var b3=b1-headers;
	$(".box").css({"top":b1+"px"});
	
	
	$(".Introduction>i").click(function(){
		if($(this).closest(".Introduction").find(".as").is(".yy")){
			$(this).addClass("rotating");
			$(this).closest(".Introduction").find(".as").removeClass("yy");
			$(this).closest(".Introduction").find(".as").css({"height":"auto"});
		}else{
			$(this).removeClass("rotating");
			$(this).closest(".Introduction").find(".as").addClass("yy");
			$(this).closest(".Introduction").find(".as").css({"height":"0.5rem"});
		}
		
		
		var b1=$(".experts_tab").offset().top;
		var headers=$("header")[0].getBoundingClientRect().height;
		var b2=$(".experts_tab")[0].getBoundingClientRect().height;
		var b3=b1+b2-headers;
		$(".box").css({"top":+b3+"px"});
		
		
	})
	/**
	 * tab切换
	 */
	$('.experts_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var inds=$(this).index();
		sessionStorage.setItem('call_inds001',JSON.stringify(inds));//转为json字符串
		func();
	})
	function func(){
		var inds=JSON.parse(sessionStorage.getItem('call_inds001'));//转为对象
		console.log(inds);
		var mm=8.5+(100/4*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			
		});
	}
	
})
