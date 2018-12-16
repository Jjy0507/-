// JavaScript Document
window.onload=function()
{
	setTimeout("f1()",2000);
	//f2();
}
function $(id)
{
 return	document.getElementById(id);
}
	
var imgsrc1="images/banner1.jpg";
var imgsrc2="images/banner2.jpg";
var imgsrc3="images/banner3.jpg";
var imgsrc4="images/banner4.jpg";



var imglink1="rexiao.html";
var imglink2="chufang.html";
var imglink3="keting.html";
var imglink4="woshi.html";


var cc=2;
	function f1()
	{
			var imgTmp=$("pic");
			imgTmp.src=eval("imgsrc"+cc);
			
			var imglink=$("url");
			imglink.href=eval("imglink"+cc);
			/*var imgTmp=$("pic");
			imgTmp.src="images/i"+cc+".jpg";*/
			var t;
			for(var i=1;i<=4;i++){
			   t=$("img"+i);
			  t.className="axx";
			}
			var t=$("img"+cc);
			t.className="bxx";
			/*var t=$("img"+bb);
			t.className="axx";*/
			if(cc<4)
			{
				cc++;
			}else
			{
				cc=1;
			}
			
			tt=setTimeout("f1()",2000);
	}
	function f2(n){
		cc=n;
		f1();
		clearTimeout(tt);
	}

	