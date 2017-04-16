/**
 * 
 * @authors umbrellamans (you@example.org)
 * @date    2017-04-13 14:00:02
 * @version $1.0$
 */

$(document).ready(function(){
	$("div.tinybox").hide();

	$("img.press").click(function(){
		$("img.front")[0].src=$(this).attr("src");
		$("div.tinybox").show();
	});

	$("div.tinybox").click(function(){
		$("div.tinybox").hide();
   	});

   	$("div.content:eq(1)").hide();
   	$("div.content:eq(2)").hide();

   	$("button.button1:eq(0)").click(function(){
   		$("div.content:eq(0)").show();
   		$("div.content:eq(1)").hide();
   		$("div.content:eq(2)").hide();
   	});

   	$("button.button1:eq(1)").click(function(){
   		$("div.content:eq(1)").show();
   		$("div.content:eq(0)").hide();
   		$("div.content:eq(2)").hide();
   	});

   	$("button.button1:eq(2)").click(function(){
   		$("div.content:eq(2)").show();
   		$("div.content:eq(1)").hide();
   		$("div.content:eq(0)").hide();
   	});

   	function del(){
   		$(this).parent().remove();
   	}

   	$("div.row-right").click(del);

   	var ans=3;
   	$("button.add").click(function(){
   		var newrow=$("<div></div>").addClass("row");
   		var newrowleft=$("<div></div>").addClass("row-left");
   		var newrowmiddle=$("<div></div>").addClass("row-middle");
   		var newrowright=$("<div></div>").addClass("row-right");
   		ans=ans+1;
   		newrowleft.html(ans);
   		newrowright.html("Delete");
   		$(newrowright).click(del);
   		newrow.append(newrowleft,newrowmiddle,newrowright);
   		$("div.box3-1").append(newrow);
   	});

   	

});