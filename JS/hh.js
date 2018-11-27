// JavaScript Document
window.onload=function(){
   var para =document.createElement("p");
   var txt1 =document.createTextNode("This is");
   para.appendChild(txt1);
   var str = document.createElement("strong");
   var txt2 =document.createTextNode("my");
   str.appendChild(txt2);
   para.appendChild(str);
   var txt3 = document.createTextNode("content.");
   para.appendChild(txt3);
   var testdiv = document.getElementById("div1");
   testdiv.appendChild(para);
}