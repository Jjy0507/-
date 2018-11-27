// JavaScript Document
window.onload=function(){
	prepare();
	}
	
	
function prepare(){
	var preview=document.getElementById("preview");
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	
	var linklist=document.getElementById("linklist");
	var links=linklist.getElementsByTagName("a");
	
	links[0].onmouseover=function(){
		f2("preview",-100,0,10);
		}
	links[1].onmouseover=function(){
		f2("preview",-200,0,10);
		}
	links[2].onmouseover=function(){
		f2("preview",-300,0,10);
		}
}
	
	
function f2(elementID,final_x,final_y,interval){
	    var elem=document.getElementById(elementID);
	    var x=parseInt(elem.style.left);
	    var y=parseInt(elem.style.top);
		if(elem.movment){
			clearTimeout(elem.movment);
		}
	    if(x==final_x && y==final_y){
	    	return true;
	    }
	    if (x<final_x) {
			dist = Math.ceil((final_x-x)/10);
			x=x+dist;
	    	/*x++;*/
	    }
	    if (x>final_x) {
			dist = Math.ceil((x-final_x)/10);
			x=x-dist;
	    	/*x--;*/
	    }
	    if (y<final_y) {
			dist = Math.ceil((final_y-y)/10);
			y=y+dist;
	    	/*y++;*/
	    }
	    if (y>final_y) {
			dist = Math.ceil((y-final_y)/10);
			y=y-dist;
	    	/*y--;*/
	    }
	    elem.style.left=x+"px";
	    elem.style.top=y+"px";
	    var repeat="f2('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	    elem.movment=setTimeout(repeat,interval);
	}
