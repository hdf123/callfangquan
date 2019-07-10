$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	/**
	 * 判断是等额本息还是等额本金
	 */
	var types=getRequest().type;
	typeks(types);
	function typeks(types){//判断是等额本息还是等额本金
		if(types==0){
			console.log("-------"+0);
		}else{
			console.log("-------"+1);
		}
		if(types==0){//本息
			var loan='',loan1='';//本息、本金
			loan=JSON.parse(localStorage.getItem('call_chart'));//本息
			console.log(loan);
			$(".money_title>div:eq(0)>div").eq(0).addClass("act").siblings().removeClass("act");
			if(loan.type=="011"||loan.type=="021"){
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html((loan.lixi/10000).toFixed(2));//利息
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(loan.limit/12);//期限
				var huankuan=0,ks='';
				var ago=loan.yuegong.toFixed(2);
				for(var i=0;i<loan.limit;i++){
					var yuezong=loan.ybenjin[i]+loan.ylixi[i];//月供
					huankuan+=loan.ybenjin[i];
					var benjin=loan.money*10000-huankuan.toFixed(2);//剩余本金
					ks+=`<li>
							<div>${i+1}</div>
							<div>${yuezong.toFixed(2)}</div>
							<div>${loan.ybenjin[i].toFixed(2)}</div>
							<div>${loan.ylixi[i].toFixed(2)}</div>
							<div>${Math.abs(benjin.toFixed(2))}</div>
						</li>`;
				};
				$(".money_conts").html(ks);
				$(".money").html(formatCurrencyTenThou(ago.split(".")[0])+"."+ago.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
			}else{//组合本息
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html((loan.lixi/10000).toFixed(2));//利息
				var maxs=Math.max(loan.glimit,loan.slimit);
				var mins=Math.min(loan.glimit,loan.slimit);
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(maxs/12);//期限
				
				var huankuan=0,ks='';
				//月供，本金,利息，已还本金
				var ago=0,capital=0,interest=0,remaining=0;
				if(loan.glimit>loan.slimit){
					for(var i=0;i<loan.glimit;i++){
						if(i<loan.slimit){
							ago=loan.gyuegong+loan.syuegong;//月供
							capital=Number(loan.gybenjin[i])+Number(loan.sybenjin[i]);//本金
							interest=Number(loan.gylixi[i])+Number(loan.sylixi[i]);//利息
						}else{
							ago=loan.gyuegong;//月供
							capital=Number(loan.gybenjin[i]);//本金
							interest=Number(loan.gylixi[i]);//利息
						}
						remaining+=Number(capital);
						console.log(loan.money*10000);
						console.log(remaining);
						console.log(loan.money*10000-remaining);
						agos(ago,capital,interest,remaining);
					}
				}else{
					for(var i=0;i<loan.slimit;i++){
						if(i<loan.glimit){
							ago=loan.gyuegong+loan.syuegong;//月供
							capital=Number(loan.gybenjin[i])+Number(loan.sybenjin[i]);//本金
							interest=Number(loan.gylixi[i])+Number(loan.sylixi[i]);//利息
						}else{
							ago=loan.syuegong;//月供
							capital=Number(loan.sybenjin[i]);//本金
							interest=Number(loan.sylixi[i]);//利息
						}
						remaining+=Number(capital);
						console.log(remaining);
						agos(ago,capital,interest,remaining);
					}
				}
				//月供，本金,利息，剩余本金
				function agos(ago,capital,interest,remaining){
					var ybenjin=(loan.gybenjin[i]+loan.sybenjin[i]).toFixed(2);//月本金
					var ylixi=(loan.gylixi[i]+loan.sylixi[i]).toFixed(2);//月利息
					var benjin=loan.money*10000-huankuan.toFixed(2);//剩余本金
					ks+=`<li>
							<div>${i+1}</div>
							<div>${ago.toFixed(2)}</div>
							<div>${capital.toFixed(2)}</div>
							<div>${interest.toFixed(2)}</div>
							<div>${Math.abs((loan.money*10000-remaining).toFixed(2))}</div>
					</li>`;
				}
				
				
				$(".money_conts").html(ks);
				var jun=((loan.gyuegong*loan.glimit+loan.syuegong*loan.slimit)/maxs).toFixed(2);
				$(".money").html(formatCurrencyTenThou(jun.split(".")[0])+"."+jun.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
				
				
			}
		}else if(types==1){//本金
			var loan='',loan1='';//本息、本金
			loan=JSON.parse(localStorage.getItem('call_chart1'));//本息
			console.log(loan);
			$(".money_title>div:eq(0)>div").eq(1).addClass("act").siblings().removeClass("act");
			if(loan.type=="012"||loan.type=="022"){
				console.log("-------"+4);
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html((loan.lixi/10000).toFixed(2));//利息
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(loan.limit/12);//期限
				var huankuan=0,ks='',ago=0;
				for(var i=0;i<loan.limit;i++){
					huankuan+=loan.ybenjin;
					ago+=Number(loan.yuegong[i]);
					ks+=`<li>
							<div>${i+1}</div>
							<div>${(loan.yuegong[i]).toFixed(2)}</div>
							<div>${loan.ybenjin.toFixed(2)}</div>
							<div>${loan.ylixi[i].toFixed(2)}</div>
							<div>${Math.abs((loan.money*10000-huankuan).toFixed(2))}</div>
						</li>`;
				}
				$(".money_conts").html(ks);
				ago=(ago/loan.limit).toFixed(2);
				$(".money").html(formatCurrencyTenThou(ago.split(".")[0])+"."+ago.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
			}else{
				
			}
		}
		
	}
	$(".money_title>div:eq(0)>div").click(function(){
		types=$(this).index();
		typeks(types);
	})
	function formatCurrencyTenThou(num) { 
	　　num = num.toString().replace(/\$|\,/g,''); 
	　　if(isNaN(num)) 
	　　num = "0"; 
	　　sign = (num == (num = Math.abs(num))); 
	　　num = Math.floor(num*10+0.50000000001); 
	　　num = Math.floor(num/10).toString(); 
	　　for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) 
	　　num = num.substring(0,num.length-(4*i+3))+','+ 
	　　num.substring(num.length-(4*i+3)); 
	　　return (((sign)?'':'-') + num ); 
	}
})

