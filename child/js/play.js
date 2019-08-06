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
	//当前时间展示；
	var timestamp=new Date().getTime();//当前时间戳
	$(".times").html(getMyDate(timestamp,1));
	$(".more").click(function(){
		$(".cons").prepend(`<div>999</div>`);
		$(".watch").animate({scrollTop:0},10);
	})
	$(".aa").html("做人，无需去羡慕别人，也无需去花时间去羡慕别人是如何成功的，想的只要是自己如何能战胜自己，如何变得比昨天的自己强大就行。自己的磨练和坚持，加上自己的智慧和勤劳，会成功的。终将变成石佛那样受到大家的尊敬。");
	$(".bb").html("1111111111111111111111");
	/**
	 * 表情
	 */
	 var say = '请输入你的评论...';
	$("#page_emotion").hide();
	if ($("#form_article").html() === "") {
		$("#form_article").html(say);
	}
	$("#form_article").click(function(){
        if($("#form_article").html() == say){
           	$("#form_article").html("");
        }
    });
    $("#page_emotion").click(function(event){
     	event.stopPropagation();
     })
    $("#page_emotion dd").click(function(){//表情
        $("#form_article").html( $("#form_article").html().replace(say, '') );
    });
    $(document).click(function(){
    	$("#page_emotion").hide();
    })
    $(".expression").click(function(event){
    	$("#page_emotion").toggle();
    	event.stopPropagation();
    })
	
	
	
})
