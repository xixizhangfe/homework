window.onload=function(){
	var input=document.getElementsByTagName('input')[0];
	document.getElementsByTagName('input')[1].onclick=function(){
		var n=Number(input.value);
		test(n);
		function test(n){
			var sum=0;
			for(var i=1;i<=n;i++){
				sum=sum+i;
			}
			console.log(sum);
		}
	}
	
}
