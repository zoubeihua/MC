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