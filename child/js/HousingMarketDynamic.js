$(function(){
	$(".contents").on("click",".lists",function(){
		var name=$(this).find(".name").html();
		location.href="../child/Dynamic_details.html?name="+name;
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
			dom+='<div>'+i+'</div>'
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