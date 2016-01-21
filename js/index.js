window.onload = function(){
	      		//获得slider插件对象
	var slider = mui("#slider");
	slider.slider({
	  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	mui('#offCanvasSideScroll').scroll();
	mui('#offCanvasContentScroll').scroll();
	
	document.getElementById("binding").addEventListener('tap',function(){
		mui.openWindow({
	    url:"mobile/userbinding.html",
	   	show:{
	   		autoShow:true,
	   		aniShow:"slide-in-right",
	   		duration:300,
	   	}
	});	
	});
	
	document.getElementById("taskindex").addEventListener('tap',function(){
		mui.openWindow({
	    url:"mobile/taskindex.html",
	   	show:{
	   		autoShow:true,
	   		aniShow:"slide-in-right",
	   		duration:300,
	   	}
	});	
	});
	
	document.getElementById("query").addEventListener('tap',function(){
		mui.openWindow({
	    url:"mobile/activequery.html",
	   	show:{
	   		autoShow:true,
	   		aniShow:"slide-in-right",
	   		duration:300,
	   	}
	});	
	});
}