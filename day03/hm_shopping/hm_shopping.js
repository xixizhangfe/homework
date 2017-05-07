window.onload=function(){  //当页面加载完执行函数体

	var prices=document.getElementsByClassName('price'); //得到所有商品的价格数组

	document.getElementById("total").onclick=function(){ //当点击提交按钮时，执行函数体	
		var totalValue=0; //初始化总价格为0
		for(var i=0;i<prices.length;i++){
			if( prices[i].value && !isNaN(prices[i].value) ){ //当输入数字的时候才会执行
				totalValue+=parseFloat(prices[i].value); //价格求和
				//console.log(prices[i].value); //打印每个价格（测试用）
			}	
		}
		//判断价格区间
		if(totalValue>5000){
			totalValue=totalValue*0.7;
		}else if(totalValue>=1000){
			totalValue=totalValue*0.8;
		}else if(totalValue>=100){
			totalValue=totalValue*0.9;
		}else{
			totalValue=totalValue;
		}
		alert(totalValue); //弹出总价格
	}

	//聚焦时清空文本框
	for(var j=0;j<prices.length;j++){
		prices[j].addEventListener("focus",clear);
	}

	//重置
	document.getElementById("reset").onclick=res;

	//清空功能
	function clear(){
		this.value=null;
	}
	//重置功能
	function res(){
		for(i=0;i<prices.length;i++){
			prices[i].value='请输入商品价格';
		}
	}


}
