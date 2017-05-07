window.onload=function(){
	var inNums=document.getElementsByClassName('num');
	document.getElementById('judge').onclick=function(){
		var numInt1=parseInt(inNums[0].value);
		var numDec1=parseFloat(inNums[0].value)-numInt1;
		var numInt2=parseInt(inNums[1].value);
		var numDec2=parseFloat(inNums[1].value)-numInt2;
		if(numInt1+numInt2>10){
			var sumDec=numDec1+numDec2;
			if(sumDec>1.0){
				alert('这两个数的小数部分的和大于1.0');
			}
			else{
				alert('这两个数的小数部分的和小于1.0');
			}
		}else{
			var diffDec=numDec1-numDec2;
			if(diffDec>0.0){
				alert('这两个数的小数部分的差大于0.0');
			}
			else{
				alert('这两个数的小数部分的差小于0.0');
			}
		}
	};
}