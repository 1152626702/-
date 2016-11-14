define(["text!./shop.html","css!./shop.css"],function(html){
	function render(){
		$(".container").html(html);
		$.ajax({
	url: 'http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php',
	type:"get",
	success : function(rep){
//		console.log(rep);
		var reps = JSON.parse(rep).product;
		var str = "";
		var i=0;
		str += '<ul>';
		$(reps).each(function(i,elem){
//			console.log(elem.name);
			str += '<li><img src="' +elem.img +'"/>';
			str += '<div class="details-right">' + elem.name;
			str += '<p><span>￥' + elem.price + '</span>￥';
			str += elem.market_price + '</p></div>';
			str += '<div class="car"><img src="images/8_12.gif"></div></li>';
		})
		str += "</ul>";
		$(".details").append(str);
		$(".car").click(function(){
			i++;
			$(".count").css("display","block").html(i)
//			console.log(i);
		})
	}
})
	}

	return {
		render:render
	}
})