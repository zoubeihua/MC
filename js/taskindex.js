window.onload =function(){
	
	var slider = mui("#slider");
			slider.slider({
			  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});
	var slider = mui("#sliders");
			slider.slider({
			  interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
			});
	var scr = document.getElementById("main"), startY,moveY,endY,index=0;
	var divs = document.getElementById("main").getElementsByClassName("page");
   	scr.addEventListener("touchstart", touchStart, false);
	scr.addEventListener("touchmove", touchMove, false);
 	scr.addEventListener("touchend", touchEnd, false);
//点击开始
    	function touchStart(event){
    		if(!event.targetTouches.length) return;
    		var touch = event.targetTouches[0];
    		startY = touch.pageY;
   	}

//滑动开始
   	function touchMove(event){
   		event.preventDefault();//修复了滑动描述区域不能翻页bug
   		if(!event.targetTouches.length) return;
   		var touch = event.targetTouches[0];
   		moveY = touch.pageY;	
   		if((moveY - startY) > 100){
   			index++;
   			if(index > 0){
   				index=0;
   				
   			}else{
   				scr.style.webkitTransform = "translate3d(0,"+index*100+"%,0)";	
                
   			}
   		}
   		if((moveY - startY) < -100){
   			index--;
   			var divsl = -(divs.length-1);
   			if(index<divsl){
   				index = divsl
   			}else{
   				scr.style.webkitTransform = "translate3d(0,"+index*100+"%,0)";	
   			}
		}
   	}
   		
//手指离开
		function touchEnd(event) {
			if(!event.targetTouches.length) return;
			var touch = event.targetTouches[0];
			endY = touch.pageY;
		
	}
				
};

//开始体验事件
	function btns(){
		document.getElementById("primary").classList.add("fadeOutLeft");
		setTimeout(function(){
			document.getElementById("primary").style.display = "none";
			document.getElementById("primary").classList.remove("fadeOutLeft");
		},1000)
		setTimeout(function(){
			document.getElementById("taskbtn").style.display = "block";
		},100)
		document.getElementById("taskbtn").classList.add("fadeInRight");
		setTimeout(function(){
			document.getElementById("taskbtn").classList.remove("fadeInRight");
		},1000)
		
	}
	
	function btnss(){
		document.getElementById("primarys").classList.add("fadeOutLeft");
		setTimeout(function(){
			document.getElementById("primarys").style.display = "none";
			document.getElementById("primarys").classList.remove("fadeOutLeft");
		},1000)
		setTimeout(function(){
			document.getElementById("taskbtns").style.display = "block";
		},100)
		document.getElementById("taskbtns").classList.add("fadeInRight");
		setTimeout(function(){
			document.getElementById("taskbtns").classList.remove("fadeInRight");
		},1000)
	}
//放弃体验事件
function give(){
	document.getElementById("taskbtn").classList.add("fadeOutLeft");
	setTimeout(function(){
			document.getElementById("taskbtn").classList.remove("fadeOutLeft");
		},1000)
	 setTimeout(function(){
			document.getElementById("taskbtn").style.display = "none";
		},100)
	 	
	setTimeout(function(){
			document.getElementById("primary").style.display = "block";
		},100)
	document.getElementById("primary").classList.add("fadeInRight");
}
function gives(){
	document.getElementById("taskbtns").classList.add("fadeOutLeft");
	setTimeout(function(){
			document.getElementById("taskbtns").classList.remove("fadeOutLeft");
		},1000)
	 setTimeout(function(){
			document.getElementById("taskbtns").style.display = "none";
		},100)
	 	
	setTimeout(function(){
			document.getElementById("primarys").style.display = "block";
		},100)
	document.getElementById("primarys").classList.add("fadeInRight");
}
