$(function(){
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
})
