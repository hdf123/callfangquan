$(function(){
	//更多
	$(".more").hide();
	$(".rights>h3:eq(0)").click(function(){
		location.href="personal.html";
	})
	$(".rights>h3:eq(1)").click(function(){
		$(".more").toggle();
	})
	var mySwiper1 = new Swiper('.swiper1', {
		loop : true,
		autoplay: 2000,//可选选项，自动滑动
		centeredSlides : true,
		spaceBetween :10,
		pagination : '.swiper-pagination',
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
	})
	//我要上传
	$(".upload_video").click(function(){
		location.href="upload_video.html";
	})
	//添加好友
	$(".Add_buddy").click(function(){
		location.href="Add_buddy.html";
	})
	//我的消息
	$(".MyMessage").click(function(){
		location.href="MyMessage.html";
	})
	//热门视频:0;我的关注:1;
	$(".btn").click(function(){
		var ind=$(this).attr("videow");
		$.cookie('call_videow', JSON.stringify(ind), { expires: 7, path: '/' });
		location.href="hot_video.html";
	})
	/**
	 * 观看
	 */
	$(".cafe_cont>li").click(function(){
		location.href="watchs.html";
	})
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		console.log("上拉加载");
		var dom='';
		for(var i=0;i<30;i++){
			dom+=`<div>${i+1}</div>`
		}
		$('.contents').append(dom);
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
	$(".cafe_cont>li").click(function(){
		location.href="watchs.html";
	})
})
