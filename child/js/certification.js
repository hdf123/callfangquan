$(function(){
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
		if($("[name='name']").val()==""||$("[name='phone']").val()==""||$("[name='unit']").val()==""||$("[name='positions']").val()==""||$("[name='address']").val()==""){
			$(".btn").addClass("disable");
		}else{
			$(".btn").removeClass("disable");
		}
	}
	$(".btn").click(function(){
		var aa=$("[name='name']").val();
		console.log(aa);
 		var dats = {};
        var vals = $('form').serializeArray();
        $.each(vals, function () {
            dats[this.name] = this.value;
        });
        console.log(dats);
		location.href="specialty.html";

	})
})
