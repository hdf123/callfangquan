$(function(){
	var b1=$(".experts_tab").offset().top;
	var headers=$("header")[0].getBoundingClientRect().height;
	var b2=$(".experts_tab")[0].getBoundingClientRect().height;
	//var b3=b1-headers;
	$(".box").css({"top":b1+"px"});
	$('.contents video').attr("src","http://1252583354.vod2.myqcloud.com/2985ef10vodtranscq1252583354/fc36d2ea5285890780451231863/v.f30.mp4");
	
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
	var inds=0,staging=0;
	$('.experts_tab>li').on('click', function() {
		inds=$(this).index();
		if($(this).index()!=3) staging=$(this).index();
		fff();
	})
	function fff(){
		$('.experts_tab>li').eq(inds).addClass("act").siblings().removeClass("act");
		var mm=8.5+(100/4*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			if(inds==3){
				$(".box>div").eq(inds).show();
			}else{
				$(".box>div").eq(inds).show().siblings().hide();
			}
		});
	}
	
	
	$(".box>div").hide();
	$(".comments_box").show();
	//当前时间展示；
	var timestamp=new Date().getTime();//当前时间戳
	$(".times").html(getMyDate(timestamp,1));
	$(".more").click(function(){
		$(".cons").prepend('<div>999</div>');
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
	//点赞、发送
	$(".btn>i").click(function(){
		if($(this).is(".icon-dianzan")){
			$(this).removeClass("icon-dianzan").addClass("icon-zan2");
		}else{
			$(this).removeClass("icon-zan2").addClass("icon-dianzan");
		}
	})
	$('#form_article').on('keypress', function (e){
	    var keycode = e.keyCode;
	　　	//keycode是键码，13也是电脑物理键盘的 enter
	    if(keycode == '13') {
	    	e.preventDefault();
	    	console.log($("#form_article").html());
	    }
	});
	//关注更多
	$('.more_box').click(function(){
		$(this).hide();
		inds=staging;
		fff();
	})
    $(".more_box>div").click(function(event){
     	event.stopPropagation();
    })
})
