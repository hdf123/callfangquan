$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
//选项卡切换
	var tabIndex =0;
	var tabBar = function() {
		var aTab = $('.mortgage_tab>li');
		var oLine = $('.mortgage_tab>div');
		aTab.on('click', function() {
			tabIndex = $(this).index();
			var mm=12.5+(100/3*tabIndex);
			oLine.animate({ 'left': mm + '%' }, 300, function() {
				$(".tab_child>form").eq(tabIndex).show();
				$(".tab_child>form").eq(tabIndex).siblings().hide();
			});
		})
	}
	tabBar();
	$(".tab_child>form").hide();
	$(".tab_childa").show();
	/**
	 * 计算方式
	 */
	//公积金
	$(".tab_childa .calculatek>div").click(function(){
		calculatek=$(this).index();
		if($(this).index()==1){//贷款总额
			$(".tab_childa .proportion").hide();
			$(".tab_childa .amount>div:eq(0)").html("贷款金额");
		}else{//房价总额
			$(".tab_childa .proportion").show()
			$(".tab_childa .amount>div:eq(0)").html("房价总额");
		}
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//商贷
	$(".tab_childb .calculatek>div").click(function(){
		calculatek=$(this).index();
		if($(this).index()==1){//贷款总额
			$(".tab_childb .proportion").hide();
			$(".tab_childb .amount>div:eq(0)").html("贷款金额");
		}else{//房价总额
			$(".tab_childb .proportion").show()
			$(".tab_childb .amount>div:eq(0)").html("房价总额");
		}
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//组合
	$(".tab_childc .calculatek>div").click(function(){
		calculatek=$(this).index();
		if($(this).index()==1){//贷款总额
			$(".tab_childc .amount").hide();
			$(".tab_childc .proportion").hide();
			$(".tab_childc .amountks").hide();
		}else{//房价总额
			$(".tab_childc .amount").show();
			$(".tab_childc .proportion").show();
			$(".tab_childc .amountks").show();
		}
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	/**
	 * 还款方式
	 */
	$(".tab_childa .reimbursement>div").click(function(){
		reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	$(".tab_childb .reimbursement>div").click(function(){
		reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	/**
	 * 利率
	 */
	//公积金利率
	$(".interestRate1").hide();
	$(".interestRate2").hide();
	$(".tab_childa .interest_rate").click(function(){
		$(".interestRate1").show();
	})
	$(".interestRate1 .rights").click(function(){
		$(".interestRate1").hide();
		$(".tab_childa .interest_rate span").html($(".inputk input").val());
		$(".tab_childa>p").html("公积金贷款利率"+$(".inputk input").val()+"%");
	})
	$(".interestRate1 .hides").click(function(){
		$(".interestRate1").hide();
	})
	//商贷利率
	$(".tab_childb .interest_rate").click(function(){
		$(".interestRate2").show();
	})
	$(".interestRate2 .rights").click(function(){
		$(".interestRate2").hide();
		$(".tab_childb .interest_rate span").html($(".inputk input").val());
		$(".tab_childb>p").html("公积金贷款利率"+$(".inputk input").val()+"%");
	})
	$(".interestRate2 .hides").click(function(){
		$(".interestRate2").hide();
	})
	
	/**
	 * 货款比例选择
	 */
	var proportion=0;
    var fund1 = new selectSwiper({
        el:'.fund1',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data: ['九成','八成','七成','六成','五成','四成','三成','二成','一成'],//选项数据
        init:function(index){
            if(index !== -1){
            	if(proportion==1){
            		$('.tab_childa .proportion span').html(this.data[index]);
            		$('.tab_childa .proportion span').attr("ind",index);
            	}else if(proportion==2){
            		$('.tab_childb .proportion span').html(this.data[index]);
            		$('.tab_childb .proportion span').attr("ind",index);
            	}else{
            		$('.tab_childa .proportion span').html(this.data[index]);
            		$('.tab_childa .proportion span').attr("ind",index);
            		$('.tab_childb .proportion span').html(this.data[index]);
            		$('.tab_childb .proportion span').attr("ind",index);
            	}
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
        	if(proportion==1){
        		$('.tab_childa .proportion span').html(this.data[index]);
        		$('.tab_childa .proportion span').attr("ind",index);
        	}else if(proportion==2){
        		$('.tab_childb .proportion span').html(this.data[index]);
        		$('.tab_childb .proportion span').attr("ind",index);
        	}
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childa .proportion').on('click', function () {
    	proportion=1;
    	$(".fund1 .select .tits").html("货款比例");
        fund1.openSelectSwiper(); // 打开选择框
    });
    $('.tab_childb .proportion').on('click', function () {
    	proportion=2;
    	$(".business1 .select .tits").html("货款比例");
        fund1.openSelectSwiper(); // 打开选择框
    });
    /**
     * 按揭年数
     */
    //公积金
    var arrys1=[];
    for(var i=0;i<30;i++){
    	var menuk=i+1;
    	arrys1.push(menuk+"年("+menuk*12+"期)")
    }
    var fund2 = new selectSwiper({
        el:'.fund2',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:arrys1,//选项数据
        init:function(index){
            if(index !== -1){
                $('.tab_childa .mortgage span').html(this.data[index]);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childa .mortgage span').html(this.data[index]);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childa .mortgage').on('click', function () {
    	$(".fund2 .select .tits").html("按揭年数");
        fund2.openSelectSwiper(); // 打开选择框
    });
    //商贷
    var arrys2=[];
    for(var i=0;i<30;i++){
    	var menuk=i+1;
    	arrys2.push(menuk+"年("+menuk*12+"期)")
    }
    var business2 = new selectSwiper({
        el:'.business2',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:arrys2,//选项数据
        init:function(index){
            if(index !== -1){
                $('.tab_childb .mortgage span').html(this.data[index]);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childb .mortgage span').html(this.data[index]);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childb .mortgage').on('click', function () {
    	$(".business2 .select .tits").html("按揭年数");
        business2.openSelectSwiper(); // 打开选择框
    });
	/**
	 * 渲染利率
	 */
	for(i in interest_rate){
		for(j in interest_rate[i].arr1){
			var rate=(interest_rate[i].rate*10000)*(interest_rate[i].arr1[j]*10000)/100000000;
			$(".lists").append(`<li rate=${rate}><p>${interest_rate[i].arr2[j]}</p></li>`)
		}
	}
	$(".lists>li:first-child").append(`<i class="iconfont">&#xe73b;</i>`);
	/**
	 * 获取利率
	 */
	$('.inputk input').on('keypress', function (e){
	    var keycode = e.keyCode;
	    var texts=$(this).val();
	　　//keycode是键码，13也是电脑物理键盘的 enter 
	    if(keycode == '13') {
	    	e.preventDefault();
	    	console.log("texts="+texts);
	    }
	});
	$(".lists li").click(function(){
		if($(this).find("i").length==0){
			$(this).append(`<i class="iconfont">&#xe73b;</i>`);
			$(this).siblings().children().remove("i");
			$(".inputk input").val($(this).attr("rate"));
		}
	})
	/**
	 * 弹出框
	 */
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
	/**
	 * 开始计算
	 */
	$(".button1").click(function(){
		
	})
	

	/**
	 * 利率计算
	 */
	//本金还款的月还款额(参数: 年利率 / 贷款总额 / 贷款总月份 / 贷款当前月0～length-1)
	function getMonthMoney2(lilv,total,month,cur_month){
		var lilv_month = lilv / 12;//月利率
		//return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
		var benjin_money = total/month;
		return (total - benjin_money * cur_month) * lilv_month + benjin_money;
	
	}
	for(var i=0;i<12;i++){
		var hhh=getMonthMoney2(0.0445,100000,120,i);
		console.log(hhh);
	}
	//本息还款的月还款额(参数: 年利率/贷款总额/贷款总月份)
	function getMonthMoney1(lilv,total,month){
		var lilv_month = lilv / 12;//月利率
		return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
	}
	var sss=getMonthMoney1(0.0445,100000,120);
	console.log(sss);
})
