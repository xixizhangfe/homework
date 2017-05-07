/*
var row=10;
var col=10;

document.write("<table border='1px'>");//用来消除单元格间距。
for(var i=0;i<row;i++){
	document.write('<tr>');
	for(var j=0;j<col;j++){
		document.write('<td>'+'单元格');
		document.write('</td>');
	}
	document.write('</tr>');
}
document.write('</table>');*/


//设置行，列

var cols=10;    //5列
var rows=10; //4行
var htmlstr="<table border='1px'>";
for(i=1;i<=rows;i++){
 htmlstr+="<tr>";
 for(j=1;j<=cols;j++){
  htmlstr+="<td >" + i +"行"+j+"列" +"</td>"; 
 }
 htmlstr+="</tr>";
}
htmlstr+="</table>";
document.write(htmlstr);