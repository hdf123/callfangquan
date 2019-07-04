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
	var funds={//公积金
		way:0,//计算方式
		reimbursement:0,//还款方式
	};
	$(".tab_childa .calculatek>div").click(function(){
		funds.way=$(this).index();
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
	var calculatek={//商贷
		way:0,//计算方式
		reimbursement:0,//还款方式
	};
	$(".tab_childb .calculatek>div").click(function(){
		calculatek.way=$(this).index();
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
		funds.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	$(".tab_childb .reimbursement>div").click(function(){
		calculatek.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	$(".tab_childc .reimbursement>div").click(function(){
		funds.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	/**
	 * 货款比例选择
	 */
	//公积金
    var fund1 = new selectSwiper({
        el:'.fund1',
        mustSelect:true, // 是否必选，默认false
        activeIndex:0,//默认激活项下标
        data: ['九成','八成','七成','六成','五成','四成','三成','二成','一成'],//选项数据
        init:function(index){
            if(index !== -1){
        		$('.tab_childa .proportion span').html(this.data[index]);
        		$('.tab_childa .proportion span').attr("ind",index);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
    		$('.tab_childa .proportion span').html(this.data[index]);
    		$('.tab_childa .proportion span').attr("ind",index);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childa .proportion').on('click', function () {
    	$(".fund1 .select .tits").html("货款比例");
        fund1.openSelectSwiper(); // 打开选择框
    });
    //span内容改变时触发
	$('.tab_childa .proportion span').bind('DOMNodeInserted', function(e) {
		alert(111);
	});
    //商贷
    var business1 = new selectSwiper({
        el:'.business1',
        mustSelect:true, // 是否必选，默认false
        activeIndex:1,//默认激活项下标
        data: ['九成','八成','七成','六成','五成','四成','三成','二成','一成'],//选项数据
        init:function(index){
            if(index !== -1){
        		$('.tab_childb .proportion span').html(this.data[index]);
        		$('.tab_childb .proportion span').attr("ind",index);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
    		$('.tab_childb .proportion span').html(this.data[index]);
    		$('.tab_childb .proportion span').attr("ind",index);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childb .proportion').on('click', function () {
    	$(".business1 .select .tits").html("货款比例");
        business1.openSelectSwiper(); // 打开选择框
    });
    //组合贷款
    var combination1 = new selectSwiper({
        el:'.combination1',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data: ['九成','八成','七成','六成','五成','四成','三成','二成','一成'],//选项数据
        init:function(index){
            if(index !== -1){
        		$('.tab_childc .proportion span').html(this.data[index]);
        		$('.tab_childc .proportion span').attr("ind",index);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
    		$('.tab_childc .proportion span').html(this.data[index]);
    		$('.tab_childc .proportion span').attr("ind",index);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .proportion').on('click', function () {
    	$(".combination1 .select .tits").html("货款比例");
        combination1.openSelectSwiper(); // 打开选择框
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
                $('.tab_childa .mortgage span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childa .mortgage span').html(this.data[index]);
            $('.tab_childa .mortgage span').attr("ind",index+1);
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
                $('.tab_childb .mortgage span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childb .mortgage span').html(this.data[index]);
            $('.tab_childb .mortgage span').attr("ind",index+1);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childb .mortgage').on('click', function () {
    	$(".business2 .select .tits").html("按揭年数");
        business2.openSelectSwiper(); // 打开选择框
    });
    //组合：
    //1.公积金按揭年数
    var arrys3=[];
    for(var i=0;i<30;i++){
    	var menuk=i+1;
    	arrys3.push(menuk+"年("+menuk*12+"期)")
    }
    var combination2 = new selectSwiper({
        el:'.combination2',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:arrys3,//选项数据
        init:function(index){
            if(index !== -1){
                $('.tab_childc .mortgagea span').html(this.data[index]);
                $('.tab_childc .mortgage span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childc .mortgagea span').html(this.data[index]);
            $('.tab_childc .mortgage span').attr("ind",index+1);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .mortgagea').on('click', function () {
    	$(".combination2 .select .tits").html("按揭年数");
        combination2.openSelectSwiper(); // 打开选择框
    });
    //2.商贷按揭年数
    var combination3 = new selectSwiper({
        el:'.combination3',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:arrys3,//选项数据
        init:function(index){
            if(index !== -1){
                $('.tab_childc .mortgageb span').html(this.data[index]);
                $('.tab_childc .mortgage span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childc .mortgageb span').html(this.data[index]);
            $('.tab_childc .mortgage span').attr("ind",index+1);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .mortgageb').on('click', function () {
    	$(".combination3 .select .tits").html("按揭年数");
        combination3.openSelectSwiper(); // 打开选择框
    });
	/**
	 * 利率选择
	 */
	//公积金利率
	$(".interestRate1").hide();
	$(".interestRate2").hide();
	var k1=0,k2=0;
	$(".tab_childa .interest_rate").click(function(){
		$(".interestRate1").show();
		k1=1;
	})
	$(".interestRate1 .rights").click(function(){
		$(".interestRate1").hide();
		if(k1==1){
			$(".tab_childa .interest_rate span").html($(".inputk input").val()+"%");
			$(".tab_childa>div").html("公积金贷款利率"+$(".inputk input").val()+"%");
		}else{
			$(".tab_childc .interest_ratea span").html($(".inputk input").val()+"%");
			$(".tab_childc>div>p:eq(0)").html("公积金贷款利率"+$(".inputk input").val()+"%");
		}
	})
	$(".interestRate1 .hides").click(function(){
		$(".interestRate1").hide();
	})
	//商贷利率
	$(".tab_childb .interest_rate").click(function(){
		$(".interestRate2").show();
		k2=1;
	})
	$(".interestRate2 .rights").click(function(){
		$(".interestRate2").hide();
		if(k2==1){
			$(".tab_childb .interest_rate span").html($(".inputk input").val()+"%");
			$(".tab_childb>div").html("商业贷款利率"+$(".inputk input").val()+"%");
		}else{
			$(".tab_childc .interest_rateb span").html($(".inputk input").val()+"%");
			$(".tab_childc>div>p:eq(1)").html("商业贷款利率"+$(".inputk input").val()+"%");
		}
	})
	$(".interestRate2 .hides").click(function(){
		$(".interestRate2").hide();
	})
	//组合
	$(".tab_childc .interest_ratea").click(function(){
		$(".interestRate1").show();
		k1=2;
	})
	$(".tab_childc .interest_rateb").click(function(){
		$(".interestRate2").show();
		k2=2;
	})
	var money='';//贷款金额
	function moneys(){//获取实际贷款金额
		var total=$(".tab_childc .amount input").val()*10000;
		var ind=1-((Number($(".tab_childc .proportion span").attr("ind"))+Number(1))/10);
		money=Number(total)*ind;
		console.log("几成---------"+ind);
		console.log("实际贷款金额---------"+money);
	}
	$(".tab_childc .amount input").blur(function(){
		moneys();
	})
	$(".tab_childc .amount input").change(function(){
		$('.tab_childc .fund3 input').val("");
		$('.tab_childc .business3 input').val("");
	})
    //span内容改变时触发，比例
	$('.tab_childc .proportion span').bind('DOMNodeInserted', function(e) {
		$('.tab_childc .fund3 input').val("");
		$('.tab_childc .business3 input').val("");
		moneys();
		
	});
	$('.tab_childc .fund3 input').blur(function() {
		moneys();
		if($(this).val()>money){
			console.log("不能大于贷款金额");
			$(this).val("");
		}
		$('.tab_childc .business3 input').val(money-$(this).val());
	});
	$('.tab_childc .business3 input').blur(function() {
		moneys();
		if($(this).val()>money){
			console.log("不能大于贷款金额");
			$(this).val("");
		}
		$('.tab_childc .fund3 input').val(money-$(this).val());
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
/*
 * 总额:money
 * 利息:lixi
 * 公积金利率:glilv
 * 商贷利率:slilv
 * 月供:Monthly1
 * 期限:limit
 * 类型:types
 * 每月递减:diminishing
 * types:(*)(类型)(方式)
 * 011:公积金本息
 * 012:公积金本金
 * 021:商贷本息
 * 022:商贷本金
 */
	
	var lixi=0,glilv,slilv,yuegong,limit,diminishing,types;
	$(".button1").click(function(){
//		console.log(funds.way);//计算方式
//		console.log(funds.reimbursement);//还款方式
		money=$(".tab_childa .amount input").val()*10000;
		if(funds.way==0){//获取贷款金额
			var total=$(".tab_childa .amount input").val()*10000;
			var ind=1-((Number($(".tab_childa .proportion span").attr("ind"))+Number(1))/10);
			money=Number(total)*ind;
		}
		limit=$(".tab_childa .mortgage span").attr("ind")*12;//期限
		glilv= Trim($(".tab_childa .interest_rate span").text())/100;//利率
		console.log("贷款金额--"+money);
		console.log("公积金按揭年数--"+limit);
		console.log("公积金利率--"+glilv);
		if(funds.reimbursement==0){//本息
			types="011";
			Monthly1=getMonthMoney1(glilv,money,limit);
//			console.log("每月还款额="+Monthly1);//每月还款额
			var ylilv=glilv/12;
//			console.log("月利率="+ylilv);//月利率
			for(var i=0;i<limit;i++){//月还本金
				/*每月所还本金=贷款总金额*月利率*(1+月利率)^第几月/(((1+月利率)^总月数)-1)*/
				var bj=money*ylilv*Math.pow((1+ylilv),i)/(Math.pow((1+ylilv),limit)-1);
				var lixis=Monthly1-bj;
//				console.log("本金="+bj);//本金
//				console.log("每月利息"+i+"-------" + lixis);
				lixi+=lixis;
			}
		}else{//本金
			types="012";
			var max='',min='';
			var capital=money/limit;
			console.log(money/limit);//每月本金
			for(var i=0;i<limit;i++){
				var yg=getMonthMoney2(glilv,money,limit,i);
				var interest=yg-capital;
				console.log("月供="+yg);
				console.log("每月利息---"+interest);
				lixi+=interest
				if(i==0){
					max=yg;
					Monthly1=yg;
				}
				if(i==limit-1) min=yg;
			}
			diminishing=(max-min)/limit;
			console.log("每月递减----"+diminishing);//平均每月递减多少
		}
		var chart={
			money:money/10000,//贷款总额
			lixi:lixi,//利息
			glilv:glilv,//公积金利率
			yuegong:Monthly1,//月供
			limit:limit,//期限
			diminishing:diminishing,//每月递减
			type:types//类型
		}
		console.log(chart);
		localStorage.setItem('call_chart',JSON.stringify(chart));//转为json字符串
//		location.href="chart.html";
	})
	$(".button2").click(function(){
		money=$(".tab_childb .amount input").val()*10000;
		if(calculatek.way==0){//获取贷款金额
			var total=$(".tab_childb .amount input").val()*10000;
			var ind=1-((Number($(".tab_childb .proportion span").attr("ind"))+Number(1))/10);
			money=Number(total)*ind;
		}
		limit=$(".tab_childb .mortgage span").attr("ind")*12;//期限
		slilv= Trim($(".tab_childb .interest_rate span").text())/100;//利率
		if(calculatek.reimbursement==0){//本息
			types="021";
			Monthly1=getMonthMoney1(slilv,money,limit);
			var ylilv=slilv/12;
			for(var i=0;i<limit;i++){//月还本金
				/*每月所还本金=贷款总金额*月利率*(1+月利率)^第几月/(((1+月利率)^总月数)-1)*/
				var bj=money*ylilv*Math.pow((1+ylilv),i)/(Math.pow((1+ylilv),limit)-1);
				var lixis=Monthly1-bj;
				lixi+=lixis;
			}
		}else{//本金
			types="022";
			var max='',min='';
			var capital=money/limit;
			for(var i=0;i<limit;i++){
				var yg=getMonthMoney2(slilv,money,limit,i);
				var interest=yg-capital;
				lixi+=interest
				if(i==0){
					max=yg;
					Monthly1=yg;
				}
				if(i==limit-1) min=yg;
			}
			diminishing=(max-min)/limit;
		}
		var chart={
			money:money/10000,//贷款总额
			lixi:lixi,//利息
			glilv:glilv,//公积金利率
			slilv:slilv,//商贷利率
			yuegong:Monthly1,//月供
			limit:limit,//期限
			diminishing:diminishing,//每月递减
			type:types//类型
		}
		localStorage.setItem('call_chart',JSON.stringify(chart));//转为json字符串
		location.href="chart.html";
	})
	$(".button3").click(function(){
		money=$(".tab_childc .amount input").val()*10000;
		if(calculatek.way==0){//获取贷款金额
			var total=$(".tab_childc .amount input").val()*10000;
			var ind=1-((Number($(".tab_childc .proportion span").attr("ind"))+Number(1))/10);
			money=Number(total)*ind;
		}
		limit=$(".tab_childc .mortgage span").attr("ind")*12;//期限
		slilv= Trim($(".tab_childc .interest_rate span").text())/100;//利率
		if(calculatek.reimbursement==0){//本息
			types="031";
			Monthly1=getMonthMoney1(slilv,money,limit);
			var ylilv=slilv/12;
			for(var i=0;i<limit;i++){//月还本金
				/*每月所还本金=贷款总金额*月利率*(1+月利率)^第几月/(((1+月利率)^总月数)-1)*/
				var bj=money*ylilv*Math.pow((1+ylilv),i)/(Math.pow((1+ylilv),limit)-1);
				var lixis=Monthly1-bj;
				lixi+=lixis;
			}
		}else{//本金
			types="032";
			var max='',min='';
			var capital=money/limit;
			for(var i=0;i<limit;i++){
				var yg=getMonthMoney2(slilv,money,limit,i);
				var interest=yg-capital;
				lixi+=interest
				if(i==0){
					max=yg;
					Monthly1=yg;
				}
				if(i==limit-1) min=yg;
			}
			diminishing=(max-min)/limit;
		}
		var chart={
			money:money/10000,//贷款总额
			lixi:lixi,//利息
			glilv:glilv,//公积金利率
			slilv:slilv,//商贷利率
			yuegong:Monthly1,//月供
			limit:limit,//期限
			diminishing:diminishing,//每月递减
			type:types//类型
		}
		localStorage.setItem('call_chart',JSON.stringify(chart));//转为json字符串
		location.href="chart.html";
	})
	function Trim(str){//去掉%
	  return str.replace(/[%]/g,"");
	}

	/**
	 * 利率计算
	 */
	//本息还款的月还款额(参数: 年利率/贷款总额/贷款总月份)
	function getMonthMoney1(lilv,total,month){
		var lilv_month = lilv / 12;//月利率
		return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
	}
	//本金还款的月还款额(参数: 年利率 / 贷款总额 / 贷款总月份 / 贷款当前月0～length-1)
	function getMonthMoney2(lilv,total,month,cur_month){
		var lilv_month = lilv / 12;//月利率
		//return total * lilv_month * Math.pow(1 + lilv_month, month) / ( Math.pow(1 + lilv_month, month) -1 );
		var benjin_money = total/month;
		return (total - benjin_money * cur_month) * lilv_month + benjin_money;
	
	}
})
