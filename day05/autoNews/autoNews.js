window.onload=function(){
	var onOff=true;
	document.getElementById('btn').onclick=function(){
		var ul=document.getElementById('ullist');
		var arr=['山西省委附近多次爆炸 官方称尚不确定是恐怖袭击',
					'甘肃张掖明令禁止转基因 书记:无力辨别只能禁止',
					'多地制定雾霾预案限行限排被批治标不治本',
					'韩媒抱怨中国雾霾侵袭韩国 称其为"黑色灾难" ',
					'伊朗革命卫队高官在叙利亚当"志愿者"被杀(图)'];		
		if(onOff){
			for(var i=0;i<5;i++){
				ul.innerHTML+='<li>'+arr[i]+'</li>';
			}
			onOff=false;
		}
		
	}
}