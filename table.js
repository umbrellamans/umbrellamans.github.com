/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:49:23
 * @version $Id$
 */
var tbl=document.getElementById('tbl');

function f11() {
	// body...
	tbl.style.backgroundColor='red';
}
function f12() {
	// body...
	var myDate = new Date();
	document.getElementById('tb12').innerHTML = myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
}
function f21() {
	// body...	
	tbl.insertRow(2);
}
function f22() {
	// body...
    tbl.deleteRow(1);
}
function f31() {
	// body...
	console.log(event.clientX+" "+event.clientY);
}
function f32() {
	// body...
	window.open("https://www.taobao.com/");
}