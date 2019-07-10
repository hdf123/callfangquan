$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	var call_chart=JSON.parse(localStorage.getItem('call_chart'));//转为对象
	console.log(call_chart);
	$(".forms1 .business").hide();//商贷利率
	$(".forms1 .diminishing").hide();//本金递减
	var typeks=0;
	if(call_chart.type=="011"){//公积金本息
		typeks=0;
		$(".forms1 .totals p").html(call_chart.money);//总额
		$(".forms1 .interest p").html((call_chart.lixi/10000).toFixed(2));//利息
		$(".forms1 .funds>td:eq(1)>p").html(call_chart.glilv*100);//公积金利率
		$(".forms1 .Monthly>td:eq(1)>p").html(call_chart.yuegong.toFixed(0));//月供
	}else if(call_chart.type=="012"){//公积金本金
		typeks=1;
		$(".forms1 .diminishing").show();
		$(".forms1 .totals p").html(call_chart.money);//总额
		$(".forms1 .interest p").html((call_chart.lixi/10000).toFixed(2));//利息
		$(".forms1 .funds>td:eq(1)>p").html(call_chart.glilv*100);//公积金利率
		$(".forms1 .Monthly>td:eq(1)").html(`首月月供：<p>${call_chart.yuegong[0].toFixed(0)}</p>元/月`);//月供
		$(".forms1 .diminishing>td:eq(1)>p").html(call_chart.diminishing.toFixed(2));//递减
	}else if(call_chart.type=="021"){//商贷本息
		typeks=0;
		$(".forms1 .business").show();//商贷利率
		$(".forms1 .funds").hide();//商贷利率
		$(".forms1 .totals p").html(call_chart.money);//总额
		$(".forms1 .interest p").html((call_chart.lixi/10000).toFixed(2));//利息
		$(".forms1 .business>td:eq(1)>p").html(call_chart.slilv*100);//商贷利率
		$(".forms1 .Monthly>td:eq(1)>p").html(call_chart.yuegong.toFixed(0));//月供
	}else if(call_chart.type=="022"){//商贷本金
		typeks=1;
		$(".forms1 .diminishing").show();
		$(".forms1 .funds").hide();//商贷利率
		$(".forms1 .totals p").html(call_chart.money);//总额
		$(".forms1 .business>td:eq(1)>p").html(call_chart.slilv*100);//商贷利率
		$(".forms1 .Monthly>td:eq(1)").html(`首月月供：<p>${call_chart.yuegong[0].toFixed(0)}</p>元/月`);//月供
		$(".forms1 .diminishing>td:eq(1)>p").html(call_chart.diminishing.toFixed(2));//递减
	}else if(call_chart.type=="031"){//组合本息
		typeks=0;
		$(".forms1").css({"display":"none"});
		$(".forms2").css({"display":"block"});
		//首月月供、递减1、递减2、第几个月、前几个月、后几个月
		$(".forms2 .starts,.forms2 .diminishinga,.forms2 .diminishingb,.forms2 .fews,.forms2 .front,.forms2 .behind").hide();
		$(".forms2 .totals p").html(call_chart.money);//总额
		$(".forms2 .interest p").html((call_chart.lixi/10000).toFixed(2));//利息
		$(".forms2 .funds p").html((call_chart.glilv*100));//公积金利率
		$(".forms2 .business p").html((call_chart.slilv*100));//商贷利率
		if(call_chart.glimit!=call_chart.slimit){
			//参考月供
			var yuegong=(call_chart.gyuegong*call_chart.glimit+call_chart.syuegong*call_chart.slimit)/Math.max(call_chart.glimit,call_chart.slimit);
			var poor=Math.max(call_chart.glimit,call_chart.slimit)-Math.min(call_chart.glimit,call_chart.slimit);
			var aa=Math.max(call_chart.glimit,call_chart.slimit)-Math.min(call_chart.glimit,call_chart.slimit);
			$(".forms2 .front,.forms2 .behind").show();
			$(".forms2 .Monthly p").html(yuegong.toFixed(2));//参考月供
			$(".forms2 .front>td:eq(1)>p:eq(0)").html(Math.min(call_chart.glimit,call_chart.slimit)/12);//前几年
			$(".forms2 .front>td:eq(1)>p:eq(1)").html((Number(call_chart.gyuegong)+Number(call_chart.syuegong)).toFixed(2));//月供
			$(".forms2 .behind>td:eq(1)>p:eq(0)").html(poor/12);//后几年
			if(call_chart.glimit>call_chart.slimit){//月供
				$(".forms2 .behind>td:eq(1)>p:eq(1)").html(call_chart.gyuegong.toFixed(2));
			}else{
				$(".forms2 .behind>td:eq(1)>p:eq(1)").html(call_chart.syuegong.toFixed(2));
			}
			console.log(Math.abs(call_chart.slimit-call_chart.glimit));
		}else{
			$(".forms2 .Monthly p").html((call_chart.gyuegong+call_chart.syuegong).toFixed(2));//参考月供
		}
	}else if(call_chart.type=="032"){//组合本金
		typeks=1;
		$(".forms1").css({"display":"none"});
		$(".forms2").css({"display":"block"});
		$(".forms2 .front,.forms2 .behind").hide();//前几年、后几年
		$(".forms2 .Monthly").hide();//参考月供
		$(".forms2 .totals p").html(call_chart.money);//总额
		$(".forms2 .interest p").html((call_chart.lixi/10000).toFixed(2));//利息
		$(".forms2 .funds p").html((call_chart.glilv*100));//公积金利率
		$(".forms2 .business p").html((call_chart.slilv*100));//商贷利率
		$(".forms2 .starts p").html((call_chart.gyuegong[0]+call_chart.syuegong[0]).toFixed(2));//首月月供
		var glixig=(call_chart.gylixi[0]-call_chart.gylixi.slice(-1))/call_chart.glimit;
		var slixis=(call_chart.sylixi[0]-call_chart.sylixi.slice(-1))/call_chart.slimit;
		$(".forms2 .diminishinga p").html((glixig+slixis).toFixed(2));//每月递减
		$(".forms2 .fews p:eq(0)").html(Math.min(call_chart.glimit,call_chart.slimit)+1);//第几个月
		var xygong=0;
		if(call_chart.glimit>call_chart.slimit){//月供
			xygong=call_chart.gyuegong[call_chart.slimit];
			$(".forms2 .fews p:eq(1)").html(xygong.toFixed(2));////月供
			$(".forms2 .diminishingb p").html(glixig.toFixed(2));//每月递减
		}else if(call_chart.glimit<call_chart.slimit){
			xygong=call_chart.syuegong[call_chart.glimit];
			$(".forms2 .fews p:eq(1)").html(xygong.toFixed(2));////月供
			$(".forms2 .diminishingb p").html(slixis.toFixed(2));//每月递减
		}else{
			$(".forms2 .fews").hide();////月供
			$(".forms2 .diminishingb").hide();//每月递减
		}
		var poor=Math.max(call_chart.glimit,call_chart.slimit)-Math.min(call_chart.glimit,call_chart.slimit);
		console.log(poor);
	}
	var color1="#5facfb",color2="#fba447";
	$(".forms1 .totals>td:eq(0)>div").css({"background-color":color1});//总额
	$(".forms1 .interest>td:eq(0)>div").css({"background-color":color2});//利息
	$(".forms2 .totals>td:eq(0)>div").css({"background-color":color1});
	$(".forms2 .interest>td:eq(0)>div").css({"background-color":color2});
	$(".detaila .details").click(function(){
		location.href="Payment_details.html?type="+typeks;
	})
	
	/**
	 * 扇形图
	 */
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    series : [{
            name: '访问来源',
            type: 'pie',
            radius : '77%',//图表大小
            center: ['50%', '50%'],//位置坐标
            data:[
            	{value:call_chart.lixi/10000, name:''},
            	{value:call_chart.money, name:''}
            ],
          	// 设置值域的那指向线
          	labelLine: {
            	normal: {
              		show: false   // show设置线是否显示，默认为true，可选值：true ¦ false
            	}
          	},
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
            }
	    }],
	    color: [color2,color1]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})
