$(function(){
    /**
     * 点评
     */
    $(".review_box").on("click",".praise",function(){
    	var muns=parseInt($(this).children("div:eq(0)").text());
    	if($(this).children("div:eq(0)").is(".act")){
    		$(this).children("div:eq(0)").removeClass("act");
    		$(this).find("img").attr("src","../img/aa.png");
    		$(this).children("div:eq(0)").text(muns-1);
    	}else{
    		$(this).children("div:eq(0)").addClass("act");
    		$(this).find("img").attr("src","../img/ab.png");
    		$(this).children("div:eq(0)").text(muns+1);
    	}
    })
	/**
	 * 懒加载
	 */
	var page = 1,off_on = false;
	//加载数据
	var LoadingDataFn = function() {
    	$(".loading_box").show(10,function(){
    		$('.loadings').shCircleLoader();
    	});
		setTimeout(function(){//假设请求成功后取消loading动画
			$(".loading_box").hide(10,function(){
				$('.loadings').shCircleLoader('destroy');
			});
		}, 1000);
	    var dom = '';
	    for (var i =1; i <31; i++) {
	        dom+='<div>'+i+'</div>';
	    }
		$('.contents>div').append(dom);
	    off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents>div').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        if (off_on) {
	            off_on = false;
	            page++;
	            console.log("第"+page+"页");
	            LoadingDataFn();
	        }
	    }
	});
})