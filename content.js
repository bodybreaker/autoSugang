function injectJs(srcFile) {
    var scr = document.createElement('script');
    scr.src = srcFile;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

if(window.name=="mainFrame"){
	// 메인프레임
	
	$(document).ready(
		function() {
			//inject!!
			injectJs(chrome.extension.getURL('inject.js'));
			/*
			var chasiNumber = sessionStorage.getItem("chasiNumber");
			var pageNum = sessionStorage.getItem("pageNum");

			console.log("SavedPageNum ::: >> "+ pageNum);
			if(pageNum == null || pageNum !="1"){
				pageNum =1;
				sessionStorage.setItem("pageNum",pageNum);
			}else{
				pageNum = sessionStorage.getItem("pageNum");
			}*/
		}
	);
	
}