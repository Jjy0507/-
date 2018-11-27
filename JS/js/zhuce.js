function $(id){
	return document.getElementById(id);
}

function chackName(){
	var t=$("txtName").value;
	var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
	var f=reg.test(t);
	var s=$("span_name");
	if (f) {
		s.innerHTML="填写正确";
		return true;
	}
	else{
		s.innerHTML="填写错误，请输入由英文字母和数字组成的4-16位字符，以字母开头";
		return false;
	}
}
function chackName2(){
	var t2=$("txtName2").value;
	var reg2=/^[\u4e00-\u9fa5]{1,5}$/;
	var f2=reg2.test(t2);
	var s2=$("span_name2");
	if (f2) {
		s2.innerHTML="填写正确";
		return true;
	}
	else{
		s2.innerHTML="填写错误，请输入由2-6个汉字组成";
		return false;
	}
}
function chackEmail(){
	var t3=$("txtEmail").value;
	var reg3=/^\w+@\w+.[a-zAA-z]{2,3}(.[a-zA-Z{2,3}])?$/;
	var f3=reg3.test(t3);
	var s3=$("span_name3");
	if (f3) {
		s3.innerHTML="填写正确";
		return true;
	}
	else{
		s3.innerHTML="填写错误，请输入邮箱账号@域名，如：good@tom.com. whj@sina.com.cn组成";
		return false;
	}
}
function chackMima(){
	var t4=$("txtMima").value;
	var reg4=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,15}$/;
	var f4=reg4.test(t4);
	var s4=$("span_name4");
	if (f4) {
		s4.innerHTML="填写正确";
		return true;
	}
	else{
		s4.innerHTML="填写错误，请输入由英文字母和数字组成的4-16位字符组成";
		return false;
	}
}
function chackPhone(){
	var t5=$("txtPhone").value;
	var reg5=/^1[358]\d{9}$/;
	var f5=reg5.test(t5);
	var s5=$("span_name5");
	if (f5) {
		s5.innerHTML="填写正确";
		return true;
	}
	else{
		s5.innerHTML="填写错误，请输入手机号由11位数字组成，且以13、15、18开头字符组成";
		return false;
	}
}
	function checkName6(){
	var t=$("data").value;
	var reg=/^(19\d|200)\d-(1[0-2]|0?[1-9])-(0?[1-9]|[1-2][0-9]|3[0-1])$/
;
	var f=reg.test(t);
	var s=$("span_name6");
	if(f){
		s.innerHTML="正确";
		return true;
		}
	else{
		
		s.innerHTML="错误,出生日期在1900-2009之间 如1985-3-1或1985-03";
		return false;
		}
	}
function check(){
	if(chackName() && chackName2() && chackEmail() && chackMima() && chackPhone() && checkName6()){
		return true;
		}
	else{
		return false;
}

}