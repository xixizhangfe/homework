window.onload=function(){
	document.getElementById('btn').onclick=function(){
		var inputs=document.querySelectorAll('input');
		for(var i=0;i<inputs.length;i++){
			inputs[i].checked=!(inputs[i].checked);
		}
		//document.getElementsByTagName('input')[0].checked='checked';
	};
}