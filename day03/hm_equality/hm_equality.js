window.onload=function(){
	var inNums=document.getElementsByClassName('numbers');
	document.getElementById('judge').onclick=function(){
		var flag=1; //标志是否相等
		var sum=0;//输入数之和
		var isnumber=1;//标志输入的数是否是整数

		for(var i=0; i<inNums.length; i++){
			if(isNaN(inNums[i].value)){
				alert('输入的不是整数');
				isnumber=0;
			}else if(parseInt(inNums[0].value)!==parseInt(inNums[i].value)){
				flag=0;
			}else{
				flag=1;
			}	
			sum+=parseInt(inNums[i].value);
		}
		//
		if(flag){
			alert('这'+inNums.length+'个数相等');
		}else if(isnumber){
			if(sum>1000){
				alert('这'+inNums.length+'个数之和大于1000');
			}else{
				alert('这'+inNums.length+'个数之和不大于1000');
			}
		}
	};
}