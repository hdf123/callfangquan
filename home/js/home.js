$(function(){
//	$("body").show();
	var call_logins=true;//登录状态
	localStorage.setItem('call_logins', JSON.stringify(call_logins));
	
	
	var mySwiper1 = new Swiper('.swiper1', {
		loop : true,
		autoplay: 2000,//可选选项，自动滑动
		centeredSlides : true,
		spaceBetween :10,
		pagination : '.swiper-pagination',
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
	})
	/**
	 * 滚动通知
	 */
    var num=$(".ul1").find("li").length;
    if (num>1) {
        setInterval(function(){ 
        	$('.ul1').animate({
            	marginTop:"-1.1rem"
        	},300,function(){
            	$(this).css({marginTop : "0"}).find("li:first").appendTo(this);
        	});
    	},2000);
    }
    $(".ul1>li").click(function(){
    	console.log($(this).attr("ind"));
    	location.href="../child/dynamic.html";
    })
    /**
     * 热门问题
     */
    $(".hot>div").click(function(){
    	location.href="../child/HotIssue.html";
    })
    $(".problem_box").on("click",".views",function(){
    	location.href="../child/details.html";
    })
	//地产动态
    $(".provide_box").on("click",".lists",function(){
    	var name=$(this).find("div").html();
    	//var ind=$(this).attr("ind");
    	location.href="../child/Dynamic_details.html?name="+name;
    })
    $(".provide>div").click(function(){
    	location.href="../child/HousingMarketDynamic.html";
    })
    //推荐
    $(".recommended_box").on("click",".recommended",function(){
    	location.href="../child/buildings.html";
    })
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
    	$(".loading_box").show(10,function(){
    		$('.loadings').shCircleLoader();
    	});
		setTimeout(function(){//假设请求成功后取消loading动画
			$(".loading_box").hide();
			$('.loadings').shCircleLoader('destroy');
		}, 1000);
		console.log(data);
	    var dom = '';
	    for (i in data) {
	    	var ska="",skb="",states="";
	    	for(j in data[i].region){
	    		ska+='<div>'+data[i].region[j]+'</div>';
	    	}
	    	for(j in data[i].features){
	    		skb+='<div>'+data[i].features[j]+'</div>';
	    	}
	    	if(data[i].state=="在售"){
	    		states='<div class="sell">在售</div>';
	    	}else if(data[i].state=="待售"){
	    		states='<div class="waiting">待售</div>';
	    	}else{
	    		states='<div>售罄</div>';
	    	}
	        dom +='<li class="recommended">'
				+'<img src='+data[i].img+' alt="" />'
				+'<div class="details">'
					+'<div>'+data[i].name+'</div>'
					+'<div class="environment">'
						+'<div>'+ska+'</div>'
						+'<div>'+data[i].area+'</div>'
					+'</div>'
					+'<div class="situation">'
						+states+skb
					+'</div>'
					+'<div>'+data[i].price+'</div>'
				+'</div>'
			+'</li>';
	    }
	  	$('.recommended_box').append(dom);
	    off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	              off_on = false;
	              page++;
	              console.log("第"+page+"页");
	              LoadingDataFn();  //调用执行上面的加载方法
	        }
	    }
	});
})
