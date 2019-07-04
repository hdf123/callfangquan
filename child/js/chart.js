$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	var call_chart=JSON.parse(localStorage.getItem('call_chart'));//转为对象
	console.log(call_chart);
	$(".business").hide();//商贷利率
	$(".diminishing").hide();//本金递减
	if(call_chart.type=="011"){//公积金本息
		$(".funds>td:eq(1)>p").html(call_chart.glilv*100);//公积金利率
		$(".Monthly>td:eq(1)>p").html(call_chart.yuegong.toFixed(0));//月供
	}else if(call_chart.type=="012"){//公积金本金
		$(".diminishing").show();
		$(".funds>td:eq(1)>p").html(call_chart.glilv*100);//公积金利率
		$(".Monthly>td:eq(1)").html(`首月月供：<p>${call_chart.yuegong.toFixed(0)}</p>元/月`);//月供
		$(".diminishing>td:eq(1)>p").html(call_chart.diminishing.toFixed(2));//递减
	}else if(call_chart.type=="021"){//商贷本息
		$(".business").show();//商贷利率
		$(".funds").hide();//商贷利率
		$(".business>td:eq(1)>p").html(call_chart.slilv*100);//商贷利率
		$(".Monthly>td:eq(1)>p").html(call_chart.yuegong.toFixed(0));//月供
	}else if(call_chart.type=="022"){//商贷本金
		$(".diminishing").show();
		$(".funds").hide();//商贷利率
		$(".business>td:eq(1)>p").html(call_chart.slilv*100);//商贷利率
		$(".Monthly>td:eq(1)").html(`首月月供：<p>${call_chart.yuegong.toFixed(0)}</p>元/月`);//月供
		$(".diminishing>td:eq(1)>p").html(call_chart.diminishing.toFixed(2));//递减
	}
	$(".totals>td:eq(1)>p").html(call_chart.money);//总额
	$(".interest>td:eq(1)>p").html((call_chart.lixi/10000).toFixed(2));//利息
	var color1="#5facfb",color2="#fba447";
	$(".totals>td:eq(0)>div").css({"background-color":color1});
	$(".interest>td:eq(0)>div").css({"background-color":color2});
	
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
            	{value:Number(call_chart.money), name:''},
                {value:Number(call_chart.lixi)/10000, name:''}
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
	    color: [color1,color2]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})
