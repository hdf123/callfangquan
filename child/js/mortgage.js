$(function(){
//选项卡切换
	$('.mortgage_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		var index = $(this).index();
		var mm=12.5+(100/3*index);
		$('.mortgage_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			$(".tab_child>form").eq(index).show();
			$(".tab_child>form").eq(index).siblings().hide();
		});
	})
	$(".tab_child>form").hide();
	$(".tab_childa").show();
	/**
	 * 公积金
	 */
	//计算方式
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
	//还款方式
	$(".tab_childa .reimbursement>div").click(function(){
		funds.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//房价总额
	$(".tab_childa .amount input,.tab_childb .amount input,.tab_childc .amount input").on("input propertychange",function(){
        var reg = $(this).val().match(/\d+\.?\d{0,2}/);
        var txt = '';
        if (reg != null) {
            txt = reg[0];
        }
        $(this).val(txt);
	})
	//贷款比例
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
	//按揭年数
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
	//公积金利率
	var k1=0,k2=0;//1:公积金,商贷；2：组合
	$(".tab_childa .interest_rate").click(function(){
		k1=1;
		$(".interestRate1").css({"display":"block"});
	})
	$(".interestRate1 .rights").click(function(){
		$(".interestRate1").css({"display":"none"});
		if(k1==1){
			$(".tab_childa .interest_rate span").html($(".inputk input").val()+"%");
			$(".tab_childa>div").html("公积金贷款利率"+$(".inputk input").val()+"%");
		}else{
			$(".tab_childc .interest_ratea span").html($(".inputk input").val()+"%");
			$(".tab_childc>div>p:eq(0)").html("公积金贷款利率"+$(".inputk input").val()+"%");
		}
	})
	$(".interestRate1 .hides").click(function(){
		$(".interestRate1").css({"display":"none"});
	})
	
	
	/**
	 * 商贷
	 */
	//计算方式
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
	//还款方式
	$(".tab_childb .reimbursement>div").click(function(){
		calculatek.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//房价总额(54)
	//贷款比例
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
	//按揭年数
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
	//商贷利率
	$(".tab_childb .interest_rate").click(function(){
		$(".interestRate2").css({"display":"block"});
		k2=1;
	})
	$(".interestRate2 .rights").click(function(){
		$(".interestRate2").css({"display":"none"});
		if(k2==1){
			$(".tab_childb .interest_rate span").html($(".inputk input").val()+"%");
			$(".tab_childb>div").html("商业贷款利率"+$(".inputk input").val()+"%");
		}else{
			$(".tab_childc .interest_rateb span").html($(".inputk input").val()+"%");
			$(".tab_childc>div>p:eq(1)").html("商业贷款利率"+$(".inputk input").val()+"%");
		}
	})
	$(".interestRate2 .hides").click(function(){
		$(".interestRate2").css({"display":"none"});
	})
	
	
	/**
	 * 组合贷款
	 */
	//计算方式
	var combination={
		way:0,//计算方式
		reimbursement:0,//还款方式
	}
	$(".tab_childc .calculatek>div").click(function(){
		combination.way=$(this).index();
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
	//还款方式
	$(".tab_childc .reimbursement>div").click(function(){
		combination.reimbursement=$(this).index();
		if($(this).children("i").is(".icon-xuanze")){
			$(this).children("i").removeClass("icon-xuanze").addClass("icon-xuanze-danxuan");
			$(this).siblings().children("i").removeClass("icon-xuanze-danxuan").addClass("icon-xuanze");
		}
	})
	//房价总额
	$(".tab_childc .amount input").on('input propertychange',function(){
		var ind=1-((Number($(".tab_childc .proportion span").attr("ind"))+Number(1))/10);
		var fg=Number($(".tab_childc .amount input").val())*ind;
		$(".tab_childc .amountks span").html(parseFloat(fg.toFixed(2)));
		$('.tab_childc .fund3 input').val("");
		$('.tab_childc .business3 input').val("");
	})
	//贷款比例
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
    		$('.tab_childc .fund3 input').val("");
			$('.tab_childc .business3 input').val("");
			var fg=Number($(".tab_childc .amount input").val())*(1-((index+1)/10));
			$(".tab_childc .amountks span").text(parseFloat(fg.toFixed(2)));
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .proportion').on('click', function () {
    	$(".combination1 .select .tits").html("货款比例");
        combination1.openSelectSwiper(); // 打开选择框
    });
    //组合金额
	//公积金金额
	$('.tab_childc .fund3 input').on("input propertychange",function() {
		if(combination.way==0){//房价
			var money=$(".tab_childc .amountks span").text();
			if($(this).val()>money){
				$(this).val("");
				$('.tab_childc .business3 input').val("");
				console.log("不能大于贷款金额");
			}else{
				$('.tab_childc .business3 input').val(money-$(this).val());
			}
		}
	});
	//商贷金额
	$('.tab_childc .business3 input').on("input propertychange",function() {
		if(combination.way==0){
			var money=$(".tab_childc .amountks span").text();
			if($(this).val()>money){
				$(this).val("");
				$('.tab_childc .fund3 input').val("");
				console.log("不能大于贷款金额");
			}else{
				$('.tab_childc .fund3 input').val(money-$(this).val());
			}
		}
	});
	//组合按揭年数
	//公积金按揭年数
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
                $('.tab_childc .mortgagea span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childc .mortgagea span').html(this.data[index]);
            $('.tab_childc .mortgagea span').attr("ind",index+1);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .mortgagea').on('click', function () {
    	$(".combination2 .select .tits").html("按揭年数");
        combination2.openSelectSwiper(); // 打开选择框
    });
	//商贷按揭年数
    var combination3 = new selectSwiper({
        el:'.combination3',
        mustSelect:true, // 是否必选，默认false
        activeIndex:2,//默认激活项下标
        data:arrys3,//选项数据
        init:function(index){
            if(index !== -1){
                $('.tab_childc .mortgageb span').html(this.data[index]);
                $('.tab_childc .mortgageb span').attr("ind",index+1);
            }
        },
        okFunUndefind: function () {//选择说明项-'请选择'
            alert('必须选择一项');
            return false;
        },
        okFun: function (index) {//确认按钮
            $('.tab_childc .mortgageb span').html(this.data[index]);
            $('.tab_childc .mortgageb span').attr("ind",index+1);
        },
        closeFun: function () {//取消按钮
            console.log('取消');
        },
    });
    $('.tab_childc .mortgageb').on('click', function () {
    	$(".combination3 .select .tits").html("按揭年数");
        combination3.openSelectSwiper(); // 打开选择框
    });
	//组合利率
	//公积金利率
	$(".tab_childc .interest_ratea").click(function(){
		$(".interestRate1").css({"display":"block"});
		k1=2;
	})
	//商贷利率
	$(".tab_childc .interest_rateb").click(function(){
		$(".interestRate2").css({"display":"block"});
		k2=2;
	})
	
	
	/**
	 * 渲染利率（公积金、商贷）
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
	//获取手动输入的利率
	$('.inputk input').on('keypress', function (e){
	    var keycode = e.keyCode;
	    var texts=$(this).val();
	　　//keycode是键码，13也是电脑物理键盘的 enter 
	    if(keycode == '13') {
	    	e.preventDefault();
	    	console.log("texts="+texts);
	    }
	});
	//选择利率
	$(".lists li").click(function(){
		if($(this).find("i").length==0){
			$(this).append(`<i class="iconfont">&#xe73b;</i>`);
			$(this).siblings().children().remove("i");
			$(".inputk input").val($(this).attr("rate"));
		}
	})
	
	
	
	
	
	/**
	 * 开始计算
	 */
/*
 * 总额:money
 * 利息:lixi
 * 公积金利率:glilv
 * 商贷利率:slilv
 * 月供:Monthly1
 * 期限:limit(公积金1,商贷2)
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
		var chart1,chart2;
		gbenxi();
		gbenjin();
		function gbenxi(){
			types="011";
			var yuegong=getMonthMoney1(glilv,money,limit);
			var ylilv=glilv/12;
			var arr=[],arr1=[];
			for(var i=0;i<limit;i++){//月还本金
				/*每月所还本金=贷款总金额*月利率*(1+月利率)^第几月/(((1+月利率)^总月数)-1)*/
				var bj=money*ylilv*Math.pow((1+ylilv),i)/(Math.pow((1+ylilv),limit)-1);
				var lixis=yuegong-bj;
				arr.push(bj);
				arr1.push(lixis);
				lixi+=lixis;
			}
			chart1={
				money:money/10000,//贷款总额
				lixi:lixi,//利息
				glilv:glilv,//公积金利率
				yuegong:yuegong,//月供
				limit:limit,//期限
				ybenjin:arr,//月本金数组
				ylixi:arr1,//月利息数组
				type:types//类型
			}
		}
		function gbenjin(){
			types="012";
			var max='',min='';
			var capital=money/limit;
			var interest=[],yuegong=[];
			for(var i=0;i<limit;i++){
				var yg=getMonthMoney2(glilv,money,limit,i);
				yuegong.push(yg);
				interest.push(yg-capital);
				console.log("月供="+yg);
				console.log("每月利息---"+interest);
				if(i==0){
					max=yg;
				}
				if(i==limit-1) min=yg;
			}
			diminishing=(max-min)/limit;
			chart2={
				money:money/10000,//贷款总额
				lixi:eval(interest.join("+")),//利息
				glilv:glilv,//公积金利率
				yuegong:yuegong,//月供数组
				limit:limit,//期限
				diminishing:diminishing,//每月递减
				ybenjin:capital,//月本金
				ylixi:interest,//月利息数组
				type:types//类型
			}
		}
		if(funds.reimbursement==0){//本息
			localStorage.setItem('call_chart', JSON.stringify(chart1));
			localStorage.setItem('call_chart1', JSON.stringify(chart2));
		}else{//本金
			localStorage.setItem('call_chart', JSON.stringify(chart2));
			localStorage.setItem('call_chart1', JSON.stringify(chart1));
		}
		location.href="chart.html";
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
		var chart1,chart2;
		gbenxi();
		gbenjin();
		function gbenxi(){
			types="021";
			var yuegong=getMonthMoney1(slilv,money,limit);
			var ylilv=slilv/12;
			var arr=[],arr1=[];
			for(var i=0;i<limit;i++){//月还本金
				var bj=money*ylilv*Math.pow((1+ylilv),i)/(Math.pow((1+ylilv),limit)-1);
				var lixis=yuegong-bj;
				arr.push(bj);
				arr1.push(lixis);
				lixi+=lixis;
			}
			chart1={
				money:money/10000,//贷款总额
				lixi:lixi,//利息
				slilv:slilv,//公积金利率
				yuegong:yuegong,//月供
				limit:limit,//期限
				ybenjin:arr,//月本金数组
				ylixi:arr1,//月利息数组
				type:types//类型
			}
		}
		function gbenjin(){
			types="022";
			var max='',min='';
			var capital=money/limit;
			var interest=[],yuegong=[];
			for(var i=0;i<limit;i++){
				var yg=getMonthMoney2(slilv,money,limit,i);
				yuegong.push(yg);
				interest.push(yg-capital);
				if(i==0){
					max=yg;
				}
				if(i==limit-1) min=yg;
			}
			diminishing=(max-min)/limit;
			chart2={
				money:money/10000,//贷款总额
				lixi:eval(interest.join("+")),//利息
				slilv:slilv,//商贷利率
				yuegong:yuegong,//月供数组
				limit:limit,//期限
				diminishing:diminishing,//每月递减
				ybenjin:capital,//月本金数组
				ylixi:interest,//月利息数组
				type:types//类型
			}
		}
		if(calculatek.reimbursement==0){//本息
			localStorage.setItem('call_chart', JSON.stringify(chart1));
			localStorage.setItem('call_chart1', JSON.stringify(chart2));
		}else{//本金
			localStorage.setItem('call_chart', JSON.stringify(chart2));
			localStorage.setItem('call_chart1', JSON.stringify(chart1));
		}
		console.log(chart1);
		console.log(chart2);
		location.href="chart.html";
	})
	$(".button3").click(function(){
		//公积金
		var gmoney=$('.tab_childc .fund3 input').val();//金额
		var glimit=$('.tab_childc .mortgagea span').attr("ind")*12;//期限
		glilv= Trim($(".tab_childc .interest_ratea span").text())/100;//利率
		console.log("公积金期限0---"+glimit);
		console.log("公积金金额---"+gmoney);
		console.log("公积金利率---"+glilv);
		//商贷
		var smoney=$('.tab_childc .business3 input').val();//金额
		var slimit=$('.tab_childc .mortgageb span').attr("ind")*12;//期限
		slilv= Trim($(".tab_childc .interest_rateb span").text())/100;//利率
		console.log("商贷期限1---"+slimit);
		console.log("商贷金额---"+smoney);
		console.log("商贷利率---"+slilv);
		
		var chart1,chart2;
		zbenxi();
		zbenjin();
		function zbenxi(){//本息
			types="031";
			//公积金
			gmoney=gmoney*10000;
			var gyuegong=getMonthMoney1(glilv,gmoney,glimit);
			console.log("月供---"+gyuegong);
			var gylilv=glilv/12;
			var glixi=0,slixi=0;
			var arr=[],arr1=[],arrys=[],arrys1=[];
			for(var i=0;i<glimit;i++){//月还本金
				var bj=gmoney*gylilv*Math.pow((1+gylilv),i)/(Math.pow((1+gylilv),glimit)-1);
				var lixis=gyuegong-bj;
				arr.push(bj);
				arr1.push(lixis);
				glixi+=lixis;
			}
			//商贷
			smoney=smoney*10000;
			var syuegong=getMonthMoney1(slilv,smoney,slimit);
			var sylilv=slilv/12;
			for(var i=0;i<slimit;i++){//月还本金
				/*每月所还本金=贷款总金额*月利率*(1+月利率)^第几月/(((1+月利率)^总月数)-1)*/
				var bj=smoney*sylilv*Math.pow((1+sylilv),i)/(Math.pow((1+sylilv),slimit)-1);
				var lixis=syuegong-bj;
				arrys.push(bj);
				arrys1.push(lixis);
				slixi+=lixis;
			}
			lixi=glixi+slixi;
			chart1={
				money:(Number(gmoney)+Number(smoney))/10000,//贷款总额
				lixi:lixi,//利息
				glilv:glilv,//公积金利率
				slilv:slilv,//商贷利率
				gyuegong:gyuegong,//公积金月供
				syuegong:syuegong,//商贷月供
				glimit:glimit,//公积金期限
				slimit:slimit,//商贷期限
				gybenjin:arr,//公积金月本金
				sybenjin:arrys,//商贷月本金
				gylixi:arr1,//公积金月利息
				sylixi:arrys1,//商贷月利息
				type:types//类型
			}
		}
		function zbenjin(){//本金
			types="032";
			//公积金
			var glixi=0,slixi=0,zlixi=0;
			var ybenjin=gmoney/glimit;
			var gylixi=[],gyuegong=[];
			for(var i=0;i<glimit;i++){
				var yg=getMonthMoney2(glilv,gmoney,glimit,i);
				gyuegong.push(yg);//公积金月供
				gylixi.push(yg-ybenjin);//公积金月利息
				glixi+=yg-ybenjin
			}
			//商贷
			var sbenjin=smoney/slimit;
			var sylixi=[],syuegong=[];
			for(var i=0;i<slimit;i++){
				var yg=getMonthMoney2(slilv,smoney,slimit,i);
				syuegong.push(yg);//商贷月供
				sylixi.push(yg-sbenjin);//商贷月利息
				slixi+=yg-sbenjin;
			}
			zlixi=glixi+slixi;
			chart2={
				money:(Number(gmoney)+Number(smoney))/10000,//贷款总额
				lixi:zlixi,//利息
				glilv:glilv,//公积金利率
				slilv:slilv,//商贷利率
				gyuegong:gyuegong,//公积金月供数组
				syuegong:syuegong,//商贷月供数组
				glimit:glimit,//公积金期限
				slimit:slimit,//商贷期限
				ybenjin:ybenjin,//公积金月本金数组
				sbenjin:sbenjin,//商贷月本金数组
				gylixi:gylixi,//公积金月利息数组
				sylixi:sylixi,//商贷月利息数组
				type:types//类型
			}
		}
		if(combination.reimbursement==0){//本息
			localStorage.setItem('call_chart', JSON.stringify(chart1));
			localStorage.setItem('call_chart1', JSON.stringify(chart2));
		}else{//本金
			localStorage.setItem('call_chart', JSON.stringify(chart2));
			localStorage.setItem('call_chart1', JSON.stringify(chart1));
		}
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
