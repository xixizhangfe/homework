window.onload=function(){
	var lis=document.querySelectorAll('li');
	var showResult=document.querySelector('.result');
	//var maxPrice=0;

	for(var i=0;i<lis.length;i++){
		bindEvent(lis[i]);		
	}

	function bindEvent(lisObject){
		var num=lisObject.querySelector('.num');
		var price=lisObject.querySelector('.price');
		var subtotal=lisObject.querySelector('.subtotal');

		lisObject.querySelector('.plus').onclick=function(){
			num.innerHTML=Number(num.innerHTML)+1;
			subtotal.innerHTML=Number(num.innerHTML)*Number(price.innerHTML);
			totalCost();
		}

		lisObject.querySelector('.reduce').onclick=function(){
			if(Number(num.innerHTML)>0){
				num.innerHTML=Number(num.innerHTML)-1;
				subtotal.innerHTML=Number(num.innerHTML)*Number(price.innerHTML);
			}
			totalCost();
		}
	}

	function totalCost(){
		var totalNum=0;
		var cost=0;
		var nums=document.querySelectorAll('.num');
		var subtotals=document.querySelectorAll('.subtotal');
		var maxPrice=0;
		var emCollection=document.querySelectorAll('.price');
		for(var i=0;i<nums.length;i++){
			totalNum+=Number(nums[i].innerHTML);
			cost+=Number(subtotals[i].innerHTML);

			if( Number(nums[i].innerHTML)>0 && Number(emCollection[i].innerHTML)>maxPrice){
				maxPrice=Number(emCollection[i].innerHTML);
			}
		}

		showResult.innerHTML='商品合计共：'+totalNum+'件，共花费了：'+cost+'元'+'<br/>'+'其中最贵的商品单价是：'+maxPrice+'元。';
	}
}