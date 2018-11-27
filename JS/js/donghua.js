var i =1;
function change() {
	if (i<4) {
		i++;
	}
	else{
		i=1;
	}
	document.getElementById("pic").src="image/girl_"+i+".gif";
}
var dh;
function play(){
	dh = setInterval("change()",100);
}
function stop(){
	clearInterval(dh);
}
