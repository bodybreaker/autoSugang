var started = sessionStorage.getItem("started");

var skipFunc = function(){
	chasiNum = chasiNumber;
	pageNum = eval(page);
	console.log("현재 차시 ::  " +chasiNumber);
	console.log("현재 페이지번호 :: " +pageNum++);
	step_update();
	setTimeout(
		function(){ 
			location.href="../"+pageinfo[chasiNum][pageNum][2];
		}, 800
	);
}


if(started){
	skipFunc();
}else{
	var skipBtn = document.createElement("button");
	skipBtn.style = "width:150px;height:150px;top:0;left:0;position:absolute;";
	skipBtn.innerText ="★START★";
	skipBtn.onclick= function(){
		sessionStorage.setItem("started",true);
		skipFunc();
	}
	document.body.appendChild(skipBtn);
}


