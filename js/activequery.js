
window.onload = function(){
	var listone = document.getElementById("listone");
	var listtwo = document.getElementById("listtwo");
	var listhrees = document.getElementById("listhrees");
	var images = document.getElementById("images");
	var imagestwo = document.getElementById("imagestwo");
	var imagesthrees = document.getElementById("imagesthrees");
}
function one(){
	listone.classList.add("cur");
	listtwo.classList.remove("cur");
	listhrees.classList.remove("cur");
	document.getElementById("fontcolor").classList.add("cutr");
	document.getElementById("fontcolors").classList.add("cutr");
	document.getElementById("fontcolortwo").classList.remove("cutr");
	document.getElementById("fontcolorstwo").classList.remove("cutr");
	document.getElementById("fontcolorthrees").classList.remove("cutr");
	document.getElementById("fontcolorsthrees").classList.remove("cutr");
	images.src = "../images/today_after.png";
	imagestwo.src = "../images/complete.png"
	imagesthrees.src = "../images/change.png"
}

function two(){
	listtwo.classList.add("cur");
	listone.classList.remove("cur");
	listhrees.classList.remove("cur");
	imagestwo.src = "../images/complete_after.png"
	images.src = "../images/today.png";
	imagesthrees.src = "../images/change.png"
	document.getElementById("fontcolortwo").classList.add("cutr");
	document.getElementById("fontcolorstwo").classList.add("cutr");
	document.getElementById("fontcolor").classList.remove("cutr");
	document.getElementById("fontcolors").classList.remove("cutr");
	document.getElementById("fontcolorthrees").classList.remove("cutr");
	document.getElementById("fontcolorsthrees").classList.remove("cutr");
}

function threes(){
	listhrees.classList.add("cur");
	listone.classList.remove("cur");
	listtwo.classList.remove("cur");
	imagesthrees.src = "../images/change_after.png"
	imagestwo.src = "../images/complete.png"
	images.src = "../images/today.png";
	document.getElementById("fontcolorthrees").classList.add("cutr");
	document.getElementById("fontcolorsthrees").classList.add("cutr");
	document.getElementById("fontcolortwo").classList.remove("cutr");
	document.getElementById("fontcolorstwo").classList.remove("cutr");
	document.getElementById("fontcolor").classList.remove("cutr");
	document.getElementById("fontcolors").classList.remove("cutr");
}

function active(){
	one();
}

function record(){
	two();
}

function exchange(){
	threes();
}
