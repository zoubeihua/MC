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
	var divs = document.getElementById("main").getElementsByTagName("div");
   	scr.addEventListener("touchstart", touchStart, false);
	scr.addEventListener("touchmove", touchMove, false);
 	scr.addEventListener("touchend", touchEnd, false);


//点击开始
    	function touchStart(event){
    		event.preventDefault();
    		if(!event.targetTouches.length) return;
    		var touch = event.targetTouches[0];
    		startY = touch.pageY;
   	}

//滑动开始
   	function touchMove(event){
   		event.preventDefault();
   		if(!event.targetTouches.length) return;
   		var touch = event.targetTouches[0];
   		moveY = touch.pageY;
   		endY = moveY - startY;	
   	}
   		
//手指离开
		function touchEnd(event) {		
		endY = moveY - startY;
   		if(endY > 30){
   			index++;
   			if(index > 0){
   				index=0;
   				
   			}else{

   				scr.style.webkitTransform = "translate3d(0,"+index*100+"%,0)";	
                
   			}
   		}
   		if(endY < -30){
   			index--;
   			var divsl = -(divs.length-1);
   			if(index<divsl){
   				index = divsl
   			}else{
   				scr.style.webkitTransform = "translate3d(0,"+index*100+"%,0)";
   				
   			}
		}
	}
};