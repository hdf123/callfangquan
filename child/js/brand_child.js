$(function(){
	//品牌类型
	var call_typew = JSON.parse(localStorage.getItem('call_typew'));
	$(".centers").html(call_typew)
	$(".lists>li").click(function(){
		var ind=$(this).index();
		console.log(ind);
		localStorage.setItem('call_enterprise', JSON.stringify(ind));
		location.href="brand_enterprise.html";
	})
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		var dom='';
		for(var i=0;i<30;i++){
			dom+=`<div>${i+1}</div>`
		}
		$('.contents').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function(){
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
