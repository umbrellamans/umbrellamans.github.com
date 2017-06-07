/**
 * 
 * @authors umbrellaman (you@example.org)
 * @date    2017-05-19 17:55:30
 * @version $1.0$
 */

$(document).ready(function(){

/*主页*/

	$('.head_left_in_s').mouseenter(function(){      //左标题效果
		$(this).animate({opacity:0.5},200);
	});
	$('.head_left_in_s').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.head_middle').mouseenter(function(){      //中标题效果
		$(this).animate({opacity:0.5},200);
	});
	$('.head_middle').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.head_right_in_s').mouseenter(function(){      //右标题效果
		$(this).animate({opacity:0.5},200);
	});
	$('.head_right_in_s').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});
	

	$('.navigation_filter').mouseenter(function(){    //导航效果
		$(this).animate({opacity:0},300);
	});
	$('.navigation_filter').mouseout(function(){
		$(this).animate({opacity:0.5},300);
	});

	$('.info_right').mouseenter(function(){                               //一览效果
		$(this).animate({opacity:0.5},200);
	});
	$('.info_right').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.info_middle_botton').mouseenter(function(){                       //信息效果
		$(this).animate({opacity:0.5},200);
	});
	$('.info_middle_botton').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.riyou_content_bottom_item_down').mouseenter(function(){           //详情效果
		$(this).animate({opacity:0.5},200);
	});
	$('.riyou_content_bottom_item_down').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	var flag=1;                                                           //其他信息收起效果
	$('.riyou_header').click(function(){
		if(flag==1){
			$(".riyou_content").hide();
			flag=0;
		}
		else{
			$(".riyou_content").show();
			flag=1;
		}
	});
	//$(".riyou_content").hide();

	$('.share_img').mouseenter(function(){           //分享效果
		$(this).animate({opacity:0.5},200);
	});
	$('.share_img').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

	$('.footer_pointer').mouseenter(function(){           //脚注效果
		$(this).animate({opacity:0.5},200);
	});
	$('.footer_pointer').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

/*选择页*/

	$('.waselects_in_down_else').mouseenter(function(){           //脚注效果
		$(this).animate({opacity:0.5},200);
	});
	$('.waselects_in_down_else').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});

/*binggan*/

	$('.okaki_content_down_in').mouseenter(function(){           //脚注效果
		$(this).animate({opacity:0.5},200);
	});
	$('.okaki_content_down_in').mouseleave(function(){
		$(this).animate({opacity:1.0},200);
	});
	
});
