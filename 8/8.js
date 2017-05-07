/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:10:40
 * @version $Id$
 */

var map = new BMap.Map("myMap"); 
 
map.enableScrollWheelZoom();
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    

map.centerAndZoom(new BMap.Point(120.2,30.3), 11);
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true
  }
});
local.searchNearby("宾馆", "西湖");

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "results"
  }
});
transit.search("杭州师范大学东南门", "宾馆");

var point1 = new BMap.Point(120.0143291635,30.2951152425);// 体育场
var marker1 = new BMap.Marker(point1);   
map.addOverlay(marker1);
var sContent =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>体育场</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow1 = new BMap.InfoWindow(sContent); // 创建信息窗口对象
marker1.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow1);
    document.getElementById('imgDemo').onload = function (){
		infoWindow1.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	}
});

var point2 = new BMap.Point(120.0162410000,30.2948035000);//博文苑3号楼
var marker2 = new BMap.Marker(point2);
map.addOverlay(marker2);
var sContent2 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑3号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow2 = new BMap.InfoWindow(sContent2);
marker2.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow2);
    document.getElementById('imgDemo').onload = function (){
		infoWindow2.redraw(); 
	}
});

var point3 = new BMap.Point(120.0151720000,30.2964225000);//博文苑8号楼
var marker3 = new BMap.Marker(point3);
map.addOverlay(marker3);
var sContent3 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑8号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow3 = new BMap.InfoWindow(sContent3);
marker3.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow3);
    document.getElementById('imgDemo').onload = function (){
		infoWindow3.redraw(); 
	}
});

var point4 = new BMap.Point(120.0162410000,30.2958975000);//博文苑6号楼
var marker4 = new BMap.Marker(point4);
map.addOverlay(marker4);
var sContent4 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑6号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow4 = new BMap.InfoWindow(sContent4);
marker4.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow4);
    document.getElementById('imgDemo').onload = function (){
		infoWindow4.redraw(); 
	}
});

var point5 = new BMap.Point(120.0167930000,30.2962770000);//菜鸟驿站
var marker5 = new BMap.Marker(point5);
map.addOverlay(marker5);
var sContent5 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>菜鸟驿站</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow5 = new BMap.InfoWindow(sContent5);
marker5.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow5);
    document.getElementById('imgDemo').onload = function (){
		infoWindow5.redraw(); 
	}
});

var point6 = new BMap.Point(120.0157510000,30.2965490000);//博文苑9号楼
var marker6 = new BMap.Marker(point6);
map.addOverlay(marker6);
var sContent6 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑9号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow6 = new BMap.InfoWindow(sContent6);
marker6.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow6);
    document.getElementById('imgDemo').onload = function (){
		infoWindow6.redraw(); 
	}
});

var point7 = new BMap.Point(120.0164740000,30.2956910000);//博文苑5号楼
var marker7 = new BMap.Marker(point7);
map.addOverlay(marker7);
var sContent7 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑5号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow7 = new BMap.InfoWindow(sContent7);
marker7.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow7);
    document.getElementById('imgDemo').onload = function (){
		infoWindow7.redraw(); 
	}
});

var point8 = new BMap.Point(120.0161640000,30.2950510000);//博文苑4号楼
var marker8 = new BMap.Marker(point8);
map.addOverlay(marker8);
var sContent8 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>博文苑4号楼</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow8 = new BMap.InfoWindow(sContent8);
marker8.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow8);
    document.getElementById('imgDemo').onload = function (){
		infoWindow8.redraw(); 
	}
});

var point9 = new BMap.Point(120.0162050000,30.2966190000);//学生事务中心
var marker9 = new BMap.Marker(point9);
map.addOverlay(marker9);
var sContent9 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>学生事务中心</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow9 = new BMap.InfoWindow(sContent9);
marker9.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow9);
    document.getElementById('imgDemo').onload = function (){
		infoWindow9.redraw(); 
	}
});

var point10 = new BMap.Point(120.0157960000,30.2936570000);//恕园食堂
var marker10 = new BMap.Marker(point10);
map.addOverlay(marker10);
var sContent10 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园食堂</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'>¥10</div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow10 = new BMap.InfoWindow(sContent10);
marker10.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow10);
    document.getElementById('imgDemo').onload = function (){
		infoWindow10.redraw(); 
	}
});

var point11 = new BMap.Point(120.0190080000,30.2952450000);//恕园7号
var marker11 = new BMap.Marker(point11);
map.addOverlay(marker11);
var sContent11 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园7号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow11 = new BMap.InfoWindow(sContent11);
marker11.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow11);
    document.getElementById('imgDemo').onload = function (){
		infoWindow11.redraw(); 
	}
});

var point12 = new BMap.Point(120.0172150000,30.2937210000);//2号餐厅
var marker12 = new BMap.Marker(point12);
map.addOverlay(marker12);
var sContent12 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>2号餐厅</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'>¥7</div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow12 = new BMap.InfoWindow(sContent12);
marker12.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow12);
    document.getElementById('imgDemo').onload = function (){
		infoWindow12.redraw(); 
	}
});

var point13 = new BMap.Point(120.0204090000,30.2957280000);//恕园2号
var marker13 = new BMap.Marker(point13);
map.addOverlay(marker13);
var sContent13 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园2号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow13 = new BMap.InfoWindow(sContent13);
marker13.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow13);
    document.getElementById('imgDemo').onload = function (){
		infoWindow13.redraw(); 
	}
});

var point14 = new BMap.Point(120.0174940000,30.2969010000);//恕园24号
var marker14 = new BMap.Marker(point14);
map.addOverlay(marker14);
var sContent14 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园24号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow14 = new BMap.InfoWindow(sContent14);
marker14.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow14);
    document.getElementById('imgDemo').onload = function (){
		infoWindow14.redraw(); 
	}
});


var point15 = new BMap.Point(120.0177180000,30.2966870000);//恕园19号
var marker15 = new BMap.Marker(point15);
map.addOverlay(marker15);
var sContent15 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园19号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow15 = new BMap.InfoWindow(sContent15);
marker15.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow15);
    document.getElementById('imgDemo').onload = function (){
		infoWindow15.redraw(); 
	}
});


var point16 = new BMap.Point(120.0181590000,30.2964140000);//外国语学院
var marker16 = new BMap.Marker(point16);
map.addOverlay(marker16);
var sContent16 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>外国语学院</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow16 = new BMap.InfoWindow(sContent16);
marker16.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow16);
    document.getElementById('imgDemo').onload = function (){
		infoWindow16.redraw(); 
	}
});


var point16 = new BMap.Point(120.0174890000,30.2979890000);//恕园35号
var marker16 = new BMap.Marker(point16);
map.addOverlay(marker16);
var sContent16 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园35号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow16 = new BMap.InfoWindow(sContent16);
marker16.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow16);
    document.getElementById('imgDemo').onload = function (){
		infoWindow16.redraw(); 
	}
});

var point17 = new BMap.Point(120.0183110000,30.2974550000);//公共教育部
var marker17 = new BMap.Marker(point17);
map.addOverlay(marker17);
var sContent17 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>公共教育部</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow17 = new BMap.InfoWindow(sContent17);
marker17.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow17);
    document.getElementById('imgDemo').onload = function (){
		infoWindow17.redraw(); 
	}
});

var point18 = new BMap.Point(120.0183700000,30.2979660000);//恕园30号
var marker18 = new BMap.Marker(point18);
map.addOverlay(marker18);
var sContent18 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园30号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow18 = new BMap.InfoWindow(sContent18);
marker18.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow18);
    document.getElementById('imgDemo').onload = function (){
		infoWindow18.redraw(); 
	}
});

var point19 = new BMap.Point(120.0193040000,30.2979150000);//恕园29号
var marker19 = new BMap.Marker(point19);
map.addOverlay(marker19);
var sContent19 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园29号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow19 = new BMap.InfoWindow(sContent19);
marker19.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow19);
    document.getElementById('imgDemo').onload = function (){
		infoWindow19.redraw(); 
	}
});


var point20 = new BMap.Point(120.0195380000,30.2974080000);//恕园21号
var marker20 = new BMap.Marker(point20);
map.addOverlay(marker20);
var sContent20 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园21号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow20 = new BMap.InfoWindow(sContent20);
marker20.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow20);
    document.getElementById('imgDemo').onload = function (){
		infoWindow20.redraw(); 
	}
});

var point21 = new BMap.Point(120.0197310000,30.2971120000);//恕园17号
var marker21 = new BMap.Marker(point21);
map.addOverlay(marker21);
var sContent21 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园17号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow21 = new BMap.InfoWindow(sContent21);
marker21.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow21);
    document.getElementById('imgDemo').onload = function (){
		infoWindow21.redraw(); 
	}
});

var point22 = new BMap.Point(120.0198210000,30.2968040000);//恕园12号
var marker22 = new BMap.Marker(point22);
map.addOverlay(marker22);
var sContent22 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园12号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow22= new BMap.InfoWindow(sContent22);
marker22.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow22);
    document.getElementById('imgDemo').onload = function (){
		infoWindow22.redraw(); 
	}
});

var point23 = new BMap.Point(120.0193260000,30.2966910000);//恕园14号
var marker23 = new BMap.Marker(point23);
map.addOverlay(marker23);
var sContent23 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园14号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow23 = new BMap.InfoWindow(sContent23);
marker23.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow23);
    document.getElementById('imgDemo').onload = function (){
		infoWindow23.redraw(); 
	}
});

var point24 = new BMap.Point(120.0198070000,30.2964140000);//恕园11号
var marker24 = new BMap.Marker(point24);
map.addOverlay(marker24);
var sContent24 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园11号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow24 = new BMap.InfoWindow(sContent24);
marker24.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow24);
    document.getElementById('imgDemo').onload = function (){
		infoWindow24.redraw(); 
	}
});

var point25 = new BMap.Point(120.0197670000,30.2980280000);//恕园28号
var marker25 = new BMap.Marker(point25);
map.addOverlay(marker25);
var sContent25 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园28号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow25 = new BMap.InfoWindow(sContent25);
marker25.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow25);
    document.getElementById('imgDemo').onload = function (){
		infoWindow25.redraw(); 
	}
});

var point26 = new BMap.Point(120.0203510000,30.2979540000);//恕园27号
var marker26 = new BMap.Marker(point26);
map.addOverlay(marker26);
var sContent26 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园27号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow26 = new BMap.InfoWindow(sContent26);
marker26.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow26);
    document.getElementById('imgDemo').onload = function (){
		infoWindow26.redraw(); 
	}
});

var point27 = new BMap.Point(120.0200990000,30.2977630000);//恕园20号
var marker27 = new BMap.Marker(point27);
map.addOverlay(marker27);
var sContent27 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园20号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow27 = new BMap.InfoWindow(sContent27);
marker27.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow27);
    document.getElementById('imgDemo').onload = function (){
		infoWindow27.redraw(); 
	}
});

var point28 = new BMap.Point(120.0205800000,30.2973930000);//恕园16号
var marker28 = new BMap.Marker(point28);
map.addOverlay(marker28);
var sContent28 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园16号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow28 = new BMap.InfoWindow(sContent28);
marker28.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow28);
    document.getElementById('imgDemo').onload = function (){
		infoWindow28.redraw(); 
	}
});

var point29 = new BMap.Point(120.0208000000,30.2971740000);//恕园15号
var marker29 = new BMap.Marker(point29);
map.addOverlay(marker29);
var sContent29 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园15号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow29 = new BMap.InfoWindow(sContent29);
marker29.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow29);
    document.getElementById('imgDemo').onload = function (){
		infoWindow29.redraw(); 
	}
});

var point30 = new BMap.Point(120.0204270000,30.2969680000);//恕园10号
var marker30 = new BMap.Marker(point30);
map.addOverlay(marker30);
var sContent30 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园10号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow30 = new BMap.InfoWindow(sContent30);
marker30.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow30);
    document.getElementById('imgDemo').onload = function (){
		infoWindow30.redraw(); 
	}
});

var point31 = new BMap.Point(120.0205840000,30.2968040000);//恕园9号
var marker31 = new BMap.Marker(point31);
map.addOverlay(marker31);
var sContent31 =
	"<img class='img1' id='imgDemo' src='128.png'/>"+
	"<div class='out-left'><div class='out-left-top'>恕园9号</div><div class='out-left-middle'>★★★</div><div class='out-left-down'>5分/5分  0条点评</div></div>"+
	"<div class='out-right'><div class='out-right-top'></div><div class='out-right-down'><div class='out-right-down-in'>查看详情</div></div></div>";
var infoWindow31 = new BMap.InfoWindow(sContent31);
marker31.addEventListener("click", function(){    
    this.openInfoWindow(infoWindow31);
    document.getElementById('imgDemo').onload = function (){
		infoWindow31.redraw(); 
	}
});