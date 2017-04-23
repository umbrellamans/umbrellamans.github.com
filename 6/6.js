/**
 * 
 * @authors umbrellamans (you@example.org)
 * @date    2017-04-20 14:23:40
 * @version $1.0$
 */

var configObj = {
       method   //数据的提交方式：get和post
       url   //数据的提交路劲
       async   //是否支持异步刷新，默认是true
       data    //需要提交的数据
       dataType   //服务器返回数据的类型，例如xml,String,Json等
       success    //请求成功后的回调函数
       error   //请求失败后的回调函数
    }

$.ajax(configObj);
/*$.ajax({
    type: "POST", //提交方式  
    url: "doDelete.action?id="+id+"&name="+name,
    success: function(result) { //返回数据根据结果进行相应的处理  
        if (result.success) {
            $("#tipMsg").text("删除数据成功");
        } else {
            $("#tipMsg").text("删除数据失败");
        }
    }
});*/