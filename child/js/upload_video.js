$(function(){
	/**
	 * 登录状态
	 */
	var call_logins=JSON.parse(localStorage.getItem('call_logins'));//转为对象
	if(!call_logins) location.href="../home/home.html";
	
	limitImport('.texts',200);//输入限制
	/**
	 * 上传视频
	 */
	//声明一个formdata 用来上传
//	var UForm = new FormData();
//	$("#file").on("change",function(){
//		var $file = $("#file").get(0).files[0];
//		//      视频大小判断
//		console.log($file);
//		console.log($file.size);
//		console.log(20 * 1024 * 1024);
//		if($file.size >= 20 * 1024 * 1024){
//			return alert("文件过大");
//		}
//		UForm.append("shipin", file); //把要上传的视频放到UFom里
//		console.log(URL.createObjectURL($file));
//		$(".upload_box video").attr("src",URL.createObjectURL($file));
//		$(".upload_box .videos").css({"display":"block"});
//		$(".upload_box .file").css({"display":"none"});
//	})
//	$(".contents").on("click",".cha",function(){
//		$(".upload_box .videos").css({"display":"none"});
//		$(".upload_box .file").css({"display":"block"});
//		$("#file").val("");
//	})
	
//	var UForm = new FormData();
//	$("#file").on("change",function(){
//		var $file = $("#file").get(0).files[0];
//		//      视频大小判断
//		console.log($file);
//		console.log($file.size);
//		console.log(20 * 1024 * 1024);
//		if($file.size >= 20 * 1024 * 1024){
//			return alert("文件过大");
//		}
//	})
	
	
})