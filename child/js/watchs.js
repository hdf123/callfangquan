$(function(){
	/**
	 * tab切换
	 */
	$('.experts_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var inds=$(this).index();
		var mm=21+(100/2*inds);
		$('.experts_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".contents>div").eq(inds).show().siblings().hide();
		});
	})
	$(".contents>div").hide();
	$(".contents>div:eq(1)").show();
	/**
	 * 全部内容显示隐藏
	 */
	$(".Introduction>i").click(function(){
		if($(this).prev().is(".yy")){
			
			$(this).addClass("rotating");
			$(this).prev().removeClass("yy");
			$(this).prev().css({"height":"auto"});
		}else{
			$(this).removeClass("rotating");
			$(this).prev().addClass("yy");
			$(this).prev().css({"height":"0.5rem"});
		}
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
			dom+=`<li>${i+1}</li>`
		}
		$('.Introduction_box').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.Introduction_box').scroll(function() {
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
	/**
	 * 展开
	 */
	$(".comments_box").on("click",".comments_content",function(){
		if($(this).is(".ycs")){
			$(this).removeClass("ycs");
			$(this).css({"height":"auto"});
		}else{
			$(this).addClass("ycs");
			$(this).css({"height":"1.066rem"});
		}
	})
    /**
     * 发送
     */
    $(".btn").click(function(){
    	
    	$(".comments_box>ul").append(`<li class="lists">
						<div class="comments_title">
							<div>
								<img src="" alt="" />
								<div>
									<div>戴琳juri</div>
									<p>05-25  16:04</p>
								</div>
							</div>
							<div class="iconfont">
								&#xe61d;<span>666</span>
							</div>
						</div>
						<div class="comments_content ycs">${$(".inputs input").val()}</div>
					</li>`);
    	
    })
})
