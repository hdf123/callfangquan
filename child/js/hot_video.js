$(function(){
	//视频类型
	var call_videow = JSON.parse(localStorage.getItem('call_videow'));
	if(call_videow==0) $(".centers").html("热门视频")
	else if(call_videow==1) $(".centers").html("我的关注")
	else location.href="../home/home.html";
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
		for(var i=0;i<8;i++){
			dom+='<li class="list">'
					+'<img src="" alt="" />'
					+'<div>'
						+'<div>'+(i+1)+'换房必看!先卖旧房还是先买新房？</div>'
						+'<p>2019-05-28</p>'
					+'</div>'
				+'</li>'
		}
		$('.contents ul').append(dom);
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
	    }
	});
	$(".contents").on("click",".list",function(){
		location.href="watchs.html";
	})
})
