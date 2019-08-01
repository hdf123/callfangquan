$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	funck();
	$(".name,.phone,.unit,.positions").on("input propertychange",function(){
		funck();
	})
	/**
	 * 省市联动（选择完毕后的操作）
	 */
	linkage($(".address"));
	//3级 选择城镇
	$("#mymodal").on("click",".option-list-three",function(){
		var areaName = $(this).text().trim();
		var menuOne = $(".option-menu").eq(0).text();
		var menuTwo = $(".option-menu").eq(1).text();
		var addressVal = menuOne +" "+ menuTwo +" "+ areaName;
		$(".address").val(addressVal);
		funck();
	})
	function funck(){
		if($(".name").val()==""||$(".phone").val()==""||$(".unit").val()==""||$(".positions").val()==""||$(".address").val()==""){
			$(".btn").addClass("disable");
		}else{
			$(".btn").removeClass("disable");
		}
	}
	$(".btn").click(function(){
		console.log($(".name").val());
		console.log($(".phone").val());
		console.log($(".unit").val());
		console.log($(".positions").val());
		console.log($(".address").val());
		location.href="specialty.html";
	})
})
