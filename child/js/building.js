$(function(){
	/**
	 * 搜索
	 */
	$('.search input').on('keypress', function (e){
	    var keycode = e.keyCode;
	    if(keycode == '13') {
	    	e.preventDefault();
			alert($(this).val())
	    }
	});
	/**
	 * tab切换
	 */
	$(".tab_title>div").click(function(){
		$(".swiper1").css({"display":"block"});
	    var zuobiao=$(this).index();
	    $(".tab_title>div").eq(zuobiao).addClass("act");
	    $(".tab_title>div").eq(zuobiao).siblings().removeClass("act");
	    mySwiper1.slideTo(zuobiao,500,false);
	})
	var mySwiper1= new Swiper('.swiper1', {
//		initialSlide :3,//初始显示
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
		onSlideChangeStart:function(swiper){
			var zuobiao=swiper.activeIndex;
	        $(".tab_title>div").eq(zuobiao).addClass("act");
	    	$(".tab_title>div").eq(zuobiao).siblings().removeClass("act");
	   }
	})
	$(".swiper1 .swiper-slide:eq(0)").css({"display":"block"});
	/**
	 * 条件选择
	 */
	var arr1=[],arr2=[],arr3=[],arrs1=[],arrs2=[],arrs3=[],arrs4=[];
	$(".ch1>label").bind("click",function(e){
		var _this=$(this);
		noLimit(e,_this,$(".region_limit"),"region",1);
	}); 
	$(".ch2>label").bind("click",function(e){
		var _this=$(this);
		noLimit(e,_this,$(".price_limit"),"price",2);
	});
	$(".ch3>label").bind("click",function(e){
		var _this=$(this);
		noLimit(e,_this,$(".door_limit"),"door",3);
	}); 
	function noLimit(e,_this,limit,names,nums){
	    if(e.target.tagName!="INPUT") return;
	    if(_this.find("input").is(':checked')){
	    	_this.find("span").addClass("act");
	    	limit.find("span").removeClass("act");
	    }else{
	    	_this.find("span").removeClass("act");
	    	//如果所有的都不被选中，就不限制条件
	    	var notChecked =$('[name='+names+']:checkbox:checked');//获取所有被选中的
	    	if(notChecked.length==0){
	    		limit.find("span").addClass("act");
	    	}
	    }
	   	if(nums==1){
	   		arr1=[];
			$.each($('[name='+names+']:checkbox:checked'), function() {
				arr1.push($(this).val());
			});
	   	}else if(nums==2){
	   		arr2=[];
			$.each($('[name='+names+']:checkbox:checked'), function() {
				arr2.push($(this).val());
			});
	   	}else if(nums==3){
	   		arr3=[];
			$.each($('[name='+names+']:checkbox:checked'), function() {
				arr3.push($(this).val());
			});
	   	}
	}
	$(".region_limit").bind("click",function(e){
		var _this=$(this);
		limit(_this,"region",arr1);
	})
	$(".price_limit").bind("click",function(e){
		var _this=$(this);
		limit(_this,"price",arr2);
	})
	function limit(_this,names,arr){
		$("[name="+names+"]:checkbox").prop("checked", false);
		_this.siblings().find("span").removeClass("act");
		_this.find("span").addClass("act");
		arr=[];
	}
	
	$(".btn1>input").click(function(){
		results();
	})
	$(".btn2>input").click(function(){
		results();
	})
	$(".btn3>input").click(function(){
		results();
	})
	/**
	 * 多选
	 */
	$(".conditions_area>div").click(function(){//面积
		var _this=$(this);
		choose(_this);
	})
	$(".conditions_property>div").click(function(){//物业类型
		var _this=$(this);
		choose(_this);
	})
	$(".conditions_features>div").click(function(){//楼盘特色
		var _this=$(this);
		choose(_this);
	})
	$(".conditions_state>div").click(function(){//售卖状态
		var _this=$(this);
		choose(_this);
	})
	function choose(_this){
		if(_this.children("div").is(".act")){
			_this.children("div").removeClass("act");
			if(!$(".conditions_state>div:eq(0)>div").is(".act")){
				$(".quick>div").eq(0).removeClass("act");
			}
			if(!$(".conditions_features>div:eq(0)>div").is(".act")){
				$(".quick>div").eq(1).removeClass("act");
			}
			if(!$(".conditions_features>div:eq(4)>div").is(".act")){
				$(".quick>div").eq(2).removeClass("act");
			}
			if(!$(".conditions_features>div:eq(1)>div").is(".act")){
				$(".quick>div").eq(3).removeClass("act");
			}
		}else{
			_this.children("div").addClass("act");
			if($(".conditions_state>div:eq(0)>div").is(".act")){
				$(".quick>div").eq(0).addClass("act");
			}
			if($(".conditions_features>div:eq(0)>div").is(".act")){
				$(".quick>div").eq(1).addClass("act");
			}
			if($(".conditions_features>div:eq(4)>div").is(".act")){
				$(".quick>div:eq(2)").addClass("act");
			}
			if($(".conditions_features>div:eq(1)>div").is(".act")){
				$(".quick>div").eq(3).addClass("act");
			}
		}
	}
	/**
	 * 清空筛选选项
	 */
	$(".btn4>input:eq(0)").click(function(){
		$(".ch4").find(".act").removeClass("act");
	})
	$(".btn4>input:eq(1)").click(function(){
		results();
	})
	function results(){
		var area=$(".conditions_area>div");//面积
		var property=$(".conditions_property>div");//物业类型
		var features=$(".conditions_features>div");//楼盘特色
		var state=$(".conditions_state>div");//售卖状态
		arrs1=[],arrs2=[],arrs3=[],arrs4=[];
		confirm(area,"conditions_area",arrs1);
		confirm(area,"conditions_property",arrs2);
		confirm(area,"conditions_features",arrs3);
		confirm(area,"conditions_state",arrs4);
		function confirm(arr,xx,ad){
			for(var i=0;i<arr.length;i++){
				if($("."+xx+">div:eq("+i+")>div").is(".act")){
					ad.push($("."+xx+">div:eq("+i+")>div").html());
				}
			}
		}
		$(".swiper1").css({"display":"none"});
		
		console.log(arr1);//选择的区域
		console.log(arr2);//价格
		console.log(arr3);//户型
		
		console.log(arrs1);//面积
		console.log(arrs2);//物业类型
		console.log(arrs3);//楼盘特色
		console.log(arrs4);//售卖状态
	}
	/**
	 * 快捷选项
	 */
	$(".quick>div").click(function(){
		if($(this).is(".act")){
			$(this).removeClass("act");
			if(!$(".quick>div").eq(0).is(".act")){
				$(".conditions_state>div:eq(0)>div").removeClass("act");
			}
			if(!$(".quick>div").eq(1).is(".act")){
				$(".conditions_features>div:eq(0)>div").removeClass("act");
			}
			if(!$(".quick>div").eq(2).is(".act")){
				$(".conditions_features>div:eq(4)>div").removeClass("act");
			}
			if(!$(".quick>div").eq(3).is(".act")){
				$(".conditions_features>div:eq(1)>div").removeClass("act");
			}
		}else{
			$(this).addClass("act");
			if($(".quick>div").eq(0).is(".act")){
				$(".conditions_state>div:eq(0)>div").addClass("act");
			}
			if($(".quick>div").eq(1).is(".act")){
				$(".conditions_features>div:eq(0)>div").addClass("act");
			}
			if($(".quick>div").eq(2).is(".act")){
				$(".conditions_features>div:eq(4)>div").addClass("act");
			}
			if($(".quick>div").eq(3).is(".act")){
				$(".conditions_features>div:eq(1)>div").addClass("act");
			}
		}
		results();
	})
	/**
	 * 分页
	 */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		console.log(data);
	    var dom = '';
	    for (i in data) {
	    	var ska="",skb="",states="";
	    	for(j in data[i].region){
	    		ska+=`<div>${data[i].region[j]}</div>`;
	    	}
	    	for(j in data[i].features){
	    		skb+=`<div>${data[i].features[j]}</div>`;
	    	}
	    	if(data[i].state=="在售"){
	    		states=`<div class="sell">在售</div>`;
	    	}else if(data[i].state=="待售"){
	    		states=`<div class="waiting">待售</div>`;
	    	}else{
	    		states=`<div>待售</div>`;
	    	}
	        dom +=`<div class="building_box">
				<img src=${data[i].img} alt="" />
				<div>
					<h3>${data[i].name}</h3>
					<p>${data[i].address}</p>
					<div class="environment">
						<div>${ska}</div>
						<div>${data[i].area}</div>
					</div>
					<div class="situation">
						${states}
						${skb}
					</div>
					<div>${data[i].price}</div>
				</div>
			</div>`;
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
	
	
	$(".contents").on("click",".building_box",function(){
		$.cookie('call_building', JSON.stringify(data[$(this).index()]), { expires: 7, path: '/' });
		location.href="buildings.html";
	})
})