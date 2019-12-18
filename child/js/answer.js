$(function(){
	/**
	 * 展开
	 */
	$(".contents .conts").each(function(){
		var len=105;
		var ctn =$(this);  //获取div对象
        var content =$(this).html();        //获取div里的内容
        var span=$("<span>"+content.substring(0,len)+"</span>");
		var as=$("<a></a>");
		as.html(content.length>len?"...":"");  ////判断显示的字数是否大于默认显示的字数    来设置a的显示       
		var span1=$("<span>展开</span>");
		as.append(content.length>len?span1:"");
		as.attr("href","javascript:void(0)");
		as.css({"color":"black"});
		span1.css({"color":"blue"});
		as.click(function(){
	        if(as.html().indexOf("展开")>0){      //如果a中含有"展开"则显示"收起"
	          as.html("<<&nbsp;收起");
	          as.css({"color":"red"});
	          span.html(content);
	        }else{
	        	var span1=$("<span>展开</span>");
	            as.html("...");
	           	as.append(span1);
	           	as.css({"color":"black"});
	           	span1.css({"color":"blue"});
	           	span.html(content.substring(0,len));
	        }
		})
		ctn.html("");
		ctn.append(span);
		ctn.append(as);
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
			$(".loading_box").hide(10,function(){
				$('.loadings').shCircleLoader('destroy');
			});
		}, 1000);
		var dom='';
		for(var i=0;i<30;i++){
			dom+='<div>'+(i+1)+'</div>'
		}
		$('.contents>ul').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents>ul').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	              off_on = false;
	              page++;
	              console.log("第"+page+"页");
	              LoadingDataFn();  //调用执行上面的加载方法
	        }
			var _ele=document.querySelector(".uu");
	    	_ele.style.transform ='translateY(-500)px)';
	    }else{
	    	
	    }
	});
})