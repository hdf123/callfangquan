$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="home.html";
//选项卡切换
	var tabIndex = 0;
//	var aContent = $('.home-content>div');
	var tabBar = function() {
		var aTab = $('.mortgage_tab>li');
		var oLine = $('.mortgage_tab>div');
		
		aTab.on('click', function() {
			tabIndex = $(this).index();
			var mm=12.5+(100/3*tabIndex);
			oLine.animate({ 'left': mm + '%' }, 300, function() {
//				aContent.addClass('hide');
//				aContent.eq(tabIndex).removeClass('hide')
			});
		})
	}
	tabBar();
	//计算方式
	$(".calculatek>div").click(function(){
		calculatek=$(this).index();
		if($(this).index()==1){//贷款总额
			$(".proportion").hide()
		}else{//房价总额
			$(".proportion").show()
		}
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//还款方式
	$(".reimbursement>div").click(function(){
		reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	/**
	 * 货款比例选择
	 */
    var hgS1 = new selectSwiper({
        el:'.select_box1',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data: ['九成','八成','七成','六成','五成','四成','三成','二成','一成'],//选项数据
        init:function(index){
            if(index !== -1){
                $('.proportion span').html(this.data[index]);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.proportion span').html(this.data[index]);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.proportion').on('click', function () {
    	$(".select .tits").html("货款比例");
        hgS1.openSelectSwiper(); // 打开选择框
    });
    /**
     * 按揭年数
     */
    var data2=[];
    for(var i=0;i<30;i++){
    	var menuk=i+1;
    	data2.push(menuk+"年("+menuk*12+"期)")
    }
    var hgS2 = new selectSwiper({
        el:'.select_box2',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:data2,//选项数据
        init:function(index){
            if(index !== -1){
                $('.mortgage span').html(this.data[index]);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.mortgage span').html(this.data[index]);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.mortgage').on('click', function () {
    	$(".select .tits").html("按揭年数");
        hgS2.openSelectSwiper(); // 打开选择框
    });
    
	function selectSwiper(obj) {
	    var _self = this;
	    _self.el = $(obj.el); // 根元素
	    _self.selectSwiper = null; // swiper对象
	    _self.swiperData = {}; // swiper数据对象
	    _self.swiperData.mustSelect = obj.mustSelect || false; // 是否必选
	    _self.swiperData.activeIndex = (typeof obj.activeIndex === 'number' && obj.activeIndex >= -1) ? obj.activeIndex : -1;// 激活索引
	    _self.swiperData.oldIndex = _self.swiperData.activeIndex; // 旧索引，取消返回上一次索引
	    _self.swiperData.data = obj.data || []; // swiper数据
	
	    _self.swiperData.okFun = obj.okFun; // OK按钮执行函数
	    _self.swiperData.okFunUndefind = obj.okFunUndefind || function () {
	    };//选择说明项-'请选择'
	    _self.swiperData.closeFun = obj.closeFun || function () {
	    }; // 取消按钮执行函数
	    _self.swiperData.init = obj.init; // 初始化
	    var hgSelect = `
	        <div class="select">
	        	<div>
		            <span class="close">取消</span>
		            <div class="tits">111</div>
		            <span class="ok">确定</span>
	        	</div>
	            <div class="selectData">
	                <div class="swiper-container">
	                    <div class="cloth"></div>
	                    <div class="swiper-wrapper">
	                        <div class="swiper-slide">请选择</div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    `;
	    _self.init = function () { // 初始化
	        _self.el.html(hgSelect);
	        _self.el.addClass('click_no'); // 取消移动端点击阴影
	        _self.selectSwiper = new Swiper(obj.el + ' .swiper-container', {
	            direction: 'vertical',
	            slidesPerView:5,//可视区域数目
	            centeredSlides: true,//激活项居中
	            slideToClickedSlide: true,//点击切换
	            onInit: function (swiper) {
	                swiper.removeSlide(0);
	                var data = _self.swiperData.data;
	                var s = [];
	                s[0] = '<div class="swiper-slide">请选择</div>';
	                for (i = 0; i < data.length; i++) {
	                    s[i + 1] = '<div class="swiper-slide">' + data[i] + '</div>';
	                }
	                swiper.appendSlide(s);
	                _self.swiperData.init(_self.swiperData.activeIndex);
	
	            },
	            onSlideChangeEnd: function (swiper) {
	                _self.swiperData.activeIndex = swiper.activeIndex - 1;
	            },
	        });
	        _self.el.find('.ok').on('click', _self.okSelectSwiper);
	        _self.el.find('.close').on('click', function () {
	            _self.swiperData.activeIndex = _self.swiperData.oldIndex;
	            _self.swiperData.closeFun();
	            _self.closeSelectSwiper();
	        });
	        _self.el.on('click', function () {
	            _self.el.find('.close').trigger('click');
	        });
	        $('.select').on('click', function (e) {//阻止选择区域关闭select
	            e.stopPropagation();
	        });
	    };
	    _self.openSelectSwiper = function () {
	        var _self = this;
	        _self.el.addClass('yes');
	        _self.selectSwiper.update();
	        _self.selectSwiper.slideTo(_self.swiperData.activeIndex + 1, 0);
	    };
	    _self.okSelectSwiper = function () {
	        if (_self.swiperData.mustSelect && _self.swiperData.activeIndex === -1) {
	            _self.swiperData.okFunUndefind();
	        } else {
	            _self.swiperData.okFun(_self.swiperData.activeIndex);
	            _self.swiperData.oldIndex = _self.swiperData.activeIndex;
	            _self.closeSelectSwiper();
	        }
	    };
	    _self.closeSelectSwiper = function () {
	        _self.el.removeClass('yes');
	    };
	    _self.init();
	}
})
