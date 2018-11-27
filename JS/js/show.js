window.onload = f();
window.onload = prepareGallery();

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
	    parent.appendChild(newElement);
	}
	else{
	    parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function f(){
	
	var img = document.createElement("img");
	img.id="p1";
	img.src="image/4.jpg";
	
	var p = document.createElement("p");
	p.id="p2";
	p.innerHTML="这是第一个图片";
	
	var g = document.getElementById("imagegallery");
	insertAfter(img,g);
	insertAfter(p,img);
}

function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0 ; i< links.length; i++){
		links[i].onclick=function(){
			showpic(this);
			return false;
		}
	}
}
	
function showpic(obj){
	 var  v=obj.href;
	 document.getElementById("p1").src=v;
	 var t=obj.title;
	 var p2=document.getElementById("p2");
	 p2.firstChild.nodeValue=t;
}

