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
	var calculatek=0,reimbursement=0;
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
	//开始计算
	$(".btna").click(function(){
		console.log("计算方式---"+calculatek);
		console.log("还款方式---"+reimbursement);
		console.log("房价总额---"+$(".fund_box .price").val());
		console.log("贷款比例---"+50);
		console.log("按揭年数---"+10);
		console.log("公积金利率---"+0.005);
		var month_money1 = getMonthMoney1(0.049,100000,120);//调用函数计算
		console.log(month_money1);
		console.log(month_money1*120);
	})
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
