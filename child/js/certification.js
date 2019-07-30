$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	$(".name,.phone,.unit,.positions").on("input propertychange",function(){
		funck();
	})
	function funck(){
		if($(".name").val()==""||$(".phone").val()==""||$(".unit").val()==""||$(".position").val()==""||$("#address").val()==""){
			$(".btn").addClass("disable");
		}else{
			$(".btn").removeClass("disable");
		}
	}
	$(".btn").click(function(){
		console.log("点击了");
	})
/**
 * 省市联动
 */
	var newData = [];//新数据
	var citysArray = [];//城市
	var areaArray = [];//地区
	var chooseMenuStr = '请选择' //添加选择title
	function init(){
		//模拟ajax
		setTimeout(()=>{
			newData = [...shengshi];
			// 初始化省份
			var optionGroupOne = "";
			$.each(newData,function(index, el) {
				optionGroupOne += `<li class="option-list option-list-one">
							<span>${newData[index]["n"]}</span>
							<div class="checked">
							</div>
						</li>`
			});
			
			$(".option-group-one").html(optionGroupOne)

		},100)
	}
	init();
	$("#mymodal").on("click",".option-menu",function(){ //菜单激活
		var i = $(this).index();
		$(this).addClass('active-option').siblings().removeClass('active-option');
		$(".option-group").eq(i).show().siblings().hide()
	})
	//1级 省份点击添加城市
	$("#mymodal").on("click",".option-list-one",function(){
		var parentIndex = $(this).parent().attr("data-index");
		var provinceName = $(this).text().trim();
		var provinceIndex = $(this).index();
		$(this).find('.checked').show();
		$(this).siblings().find('.checked').hide();
		// console.log(newData[provinceIndex])
		citysArray = newData[provinceIndex]["c"];
		$(".option-menu").eq(parentIndex).text(provinceName)
		var cityStr = "";
		// console.log(citysArray)
		$.each(citysArray,function(index, el) {
			cityStr += `<li class="option-list option-list-two">
					<span>${citysArray[index]["n"]}</span>
					<div class="checked">
					</div>
				</li>`
		});
		$(".option-group").hide();
		$(".optionwrapper").find(".option-menu").removeClass('active-option')
		$(".option-menu-two").html(chooseMenuStr).addClass('active-option')
		$(".option-group-two").html(cityStr).show();
		$(".option-group-three").html("");
		$(".option-menu-three").html("")
	})
	//2级 城市点击添加城镇
	$("#mymodal").on("click",".option-list-two",function(){
		var parentIndex = $(this).parent().attr("data-index");
		var cityName = $(this).text().trim();
		var cityIndex = $(this).index();
		$(this).find('.checked').show();
		$(this).siblings().find('.checked').hide();
		cityArray = citysArray[cityIndex]["a"];
		$(".option-menu").eq(parentIndex).text(cityName)
		var areaStr = "";
		$.each(cityArray,function(index, el) {
			areaStr += `<li class="option-list option-list-three">
					<span>${cityArray[index]}</span>
					<div class="checked">
					</div>
				</li>`
		});
		$(".option-group").hide();
		$(".optionwrapper").find(".option-menu").removeClass('active-option')
		$(".option-menu-three").html(chooseMenuStr).addClass('active-option')
		$(".option-group-three").html(areaStr).show();
	})
	//3级 选择城镇
	$("#mymodal").on("click",".option-list-three",function(){
		var areaName = $(this).text().trim();
		var parentIndex = $(this).parent().attr("data-index");
		var menuOne = $(".option-menu").eq(0).text();
		var menuTwo = $(".option-menu").eq(1).text();
		var addressVal = menuOne +" "+ menuTwo +" "+ areaName;
		$(this).find('.checked').show();
		$(this).siblings().find('.checked').hide();
		$(".option-menu").eq(parentIndex).text(areaName)
		$(".modal-main").animate({"bottom":"-900px"}, 400);
		setTimeout(()=>{
			$("#mymodal").fadeOut()
		},350)
		$("#address").val(addressVal);
		funck();
	})
	$(".right").on("click",function(){
		$("#mymodal").show();
		$(".modal-main").animate({"bottom":"0"}, 400)
	})
	$(".close").on("click",function(){
		$(".modal-main").animate({"bottom":"-900px"}, 400);
		setTimeout(()=>{
			$("#mymodal").fadeOut();
		},350)
	})
	$("#mymodal").on("click",function(event){
		var modalMain = $(".modal-main");
		if (!modalMain.is(event.target)&& modalMain.has(event.target).length === 0) {
			$(".modal-main").animate({"bottom":"-900px"}, 400);
			setTimeout(()=>{
				$("#mymodal").fadeOut();
			},350)
		}
	})
})
