window.onload=function(){
	var goodsList=[
			{
				goodsImage:'https://bigmeow.cn/demo/maicai/images/caomei.jpg',
				goodsName:'草莓',
				price:'20',
				spec:'/kg',
				num:20
			},
			{
				goodsImage:'https://bigmeow.cn/demo/maicai/images/huluobo.jpg',
				goodsName:'胡萝卜',
				price:'7.2',
				spec:'/kg',
				num:10
			},
			{
				goodsImage:'http://www.yaochicai.com/tldl/uploadimages/Productsmall/2057.jpg',
				goodsName:'土豆',
				price:'11',
				spec:'/kg',
				num:15
			}
		];
	var tbody=document.getElementById('tbody');
	var str='';
	for(var i=0;i<goodsList.length;i++){
		var goods=goodsList[i];
		str+='<tr>'+
					'<td>'+'<img src="'+goods.goodsImage+'"/>'+'</td>'+
					'<td>'+goods.goodsName+'</td>'+
					'<td>'+'￥'+goods.price+goods.spec+'</td>'+
					'<td>'+goods.num+'</td>'+
			'</tr>';
	}
	tbody.innerHTML=str;

}