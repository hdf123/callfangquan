$(function(){
	/**
	 * 判断是等额本息还是等额本金
	 */
	var types=getRequest().type;
	typeks(types);
	function typeks(types){//判断是等额本息还是等额本金
		var loan='',loan1='';//本息、本金
		if(getRequest().type==0){
			loan= JSON.parse(localStorage.getItem('call_chart'));//本息
			loan1= JSON.parse(localStorage.getItem('call_chart1'));//本金
		}else{
			loan= JSON.parse(localStorage.getItem('call_chart1'));//本息
			loan1= JSON.parse(localStorage.getItem('call_chart'));//本金
		}
		if(types==0){//本息
			$(".money_title>div:eq(0)>div").eq(0).addClass("act").siblings().removeClass("act");
			if(loan.type=="011"||loan.type=="021"){
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html(Math.abs((loan.lixi/10000).toFixed(2)));//利息
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(loan.limit/12);//期限
				var huankuan=0,ks='';
				var ago=loan.yuegong.toFixed(2);
				for(var i=0;i<loan.limit;i++){
					var yuezong=loan.ybenjin[i]+loan.ylixi[i];//月供
					huankuan+=loan.ybenjin[i];
					var benjin=loan.money*10000-huankuan.toFixed(2);//剩余本金
					ks+=`<li>
							<div>${i+1}</div>
							<div>${Math.abs(yuezong.toFixed(2))}</div>
							<div>${Math.abs(loan.ybenjin[i].toFixed(2))}</div>
							<div>${Math.abs(loan.ylixi[i].toFixed(2))}</div>
							<div>${Math.abs(benjin.toFixed(2))}</div>
						</li>`;
				};
				$(".money_conts").html(ks);
				$(".money").html(formatCurrencyTenThou(ago.split(".")[0])+"."+ago.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
			}else{//组合本息
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html(Math.abs((loan.lixi/10000).toFixed(2)));//利息
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
					ks+=`<li>
							<div>${i+1}</div>
							<div>${Math.abs(ago.toFixed(2))}</div>
							<div>${Math.abs(capital.toFixed(2))}</div>
							<div>${Math.abs(interest.toFixed(2))}</div>
							<div>${Math.abs((loan.money*10000-remaining).toFixed(2))}</div>
					</li>`;
				}
				$(".money_conts").html(ks);
				var jun=((loan.gyuegong*loan.glimit+loan.syuegong*loan.slimit)/maxs).toFixed(2);
				$(".money").html(formatCurrencyTenThou(jun.split(".")[0])+"."+jun.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
			}
		}else if(types==1){//本金
			$(".money_title>div:eq(0)>div").eq(1).addClass("act").siblings().removeClass("act");
			if(loan1.type=="012"||loan1.type=="022"){
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan1.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html(Math.abs((loan1.lixi/10000).toFixed(2)));//利息
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(loan1.limit/12);//期限
				var huankuan=0,ks='',ago=0;
				for(var i=0;i<loan1.limit;i++){
					huankuan+=loan1.ybenjin;
					ago+=Number(loan1.yuegong[i]);
					ks+=`<li>
							<div>${i+1}</div>
							<div>${Math.abs((loan1.yuegong[i]).toFixed(2))}</div>
							<div>${Math.abs(loan1.ybenjin.toFixed(2))}</div>
							<div>${Math.abs(loan1.ylixi[i].toFixed(2))}</div>
							<div>${Math.abs((loan1.money*10000-huankuan).toFixed(2))}</div>
						</li>`;
				}
				$(".money_conts").html(ks);
				ago=(ago/loan1.limit).toFixed(2);
				$(".money").html(formatCurrencyTenThou(ago.split(".")[0])+"."+ago.split(".")[1]);
				$(".money_conts").animate({scrollTop:0},10);
			}else{
				$(".reimbursement_title>li:eq(0)>p:eq(1)").html(loan1.money);//总额
				$(".reimbursement_title>li:eq(1)>p:eq(1)").html(Math.abs((loan1.lixi/10000).toFixed(2)));//利息
				var maxs=Math.max(loan1.glimit,loan1.slimit);
				var mins=Math.min(loan1.glimit,loan1.slimit);
				$(".reimbursement_title>li:eq(2)>p:eq(1)").html(maxs/12);//期限
				//月供，本金,利息，已还本金
				var ago=0,capital=0,interest=0,remaining=0,ks='',jun=0,gz=0,sz=0;
				if(loan1.glimit>loan1.slimit){
					for(var i=0;i<loan1.glimit;i++){
						if(i<loan1.slimit){
							ago=Number(loan1.gyuegong[i])+Number(loan1.syuegong[i]);//月供
							capital=Number(loan1.ybenjin)+Number(loan1.sbenjin);//本金
							interest=Number(loan1.gylixi[i])+Number(loan1.sylixi[i]);//利息
							gz+=Number(loan1.gyuegong[i]);
							sz+=Number(loan1.syuegong[i]);
						}else{
							ago=loan1.gyuegong[i];//月供
							capital=Number(loan1.ybenjin);//本金
							interest=Number(loan1.gylixi[i]);//利息
							gz+=loan1.gyuegong[i];
						}
						remaining+=Number(capital);
						agos(ago,capital,interest,remaining);
					}
				}else{
					for(var i=0;i<loan1.slimit;i++){
						if(i<loan1.glimit){
							ago=Number(loan1.gyuegong[i])+Number(loan1.syuegong[i]);//月供
							capital=Number(loan1.ybenjin)+Number(loan1.sbenjin);//本金
							interest=Number(loan1.gylixi[i])+Number(loan1.sylixi[i]);//利息
							gz+=Number(loan1.gyuegong[i]);
							sz+=Number(loan1.syuegong[i]);
						}else{
							ago=Number(loan1.syuegong[i]);//月供
							capital=Number(loan1.sbenjin);//本金
							interest=Number(loan1.sylixi[i]);//利息
							gz+=loan1.syuegong[i];
						}
						remaining+=Number(capital);
						console.log(remaining);
						agos(ago,capital,interest,remaining);
					}
				}
				console.log((gz+sz)/loan1.glimit);
				//月供，本金,利息，剩余本金
				function agos(ago,capital,interest,remaining){
					ks+=`<li>
							<div>${i+1}</div>
							<div>${Math.abs(ago.toFixed(2))}</div>
							<div>${Math.abs(capital.toFixed(2))}</div>
							<div>${Math.abs(interest.toFixed(2))}</div>
							<div>${Math.abs((loan1.money*10000-remaining).toFixed(2))}</div>
					</li>`;
				}
				$(".money_conts").html(ks);
				jun=((gz+sz)/loan1.glimit).toFixed(2);
				$(".money").html(Math.abs(formatCurrencyTenThou(jun.split(".")[0])+"."+jun.split(".")[1]));
				$(".money_conts").animate({scrollTop:0},10);
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

