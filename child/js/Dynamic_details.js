$(function(){
	console.log(getRequest().name);
	$(".centers>div").html(getRequest().name);
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
    	$(".footers").css({"height":"auto"});
    	event.stopPropagation();
    })
    $(".praise").click(function(){
    	if($(this).is(".icon-aixin")){
    		$(this).removeClass("icon-aixin").addClass("icon-icon4");
    	}else{
    		$(this).removeClass("icon-icon4").addClass("icon-aixin");
    	}
    })
    
    function myInput(en){
    	console.log(en);
    }
    
//	$('.headers input').on('keypress', function (e){
//	    var keycode = e.keyCode;
//	　　	//keycode是键码，13也是电脑物理键盘的 enter
//	    if(keycode == '13') {
//	    	e.preventDefault();
//	    	console.log("texts="+$(this).val());
//	    	call_record.push($(this).val())
//	    	//数组去重
//	    	call_record=heavy(call_record);
//	    	call_record=call_record.slice(-100);//只保存100条记录
//	    	localStorage.setItem('call_record', JSON.stringify(call_record));
//	    	search($(this).val());
//	    }
//	});
})
