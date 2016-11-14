define(["text!./order.html","css!./order.css"],function(html){
	function render(){
		$(".container").html(html);
	}
	
	function tempAjax(){
		var i = 0;
		var num;
		$.ajax({
		url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
		type:"get",
		success : function(rep){
			var reps = JSON.parse(rep).data;
			// console.log(reps);
		
		var str = "";
		
		str += "<div class='Up'><div>全部分类 <span> ∨</span></div><span></span><div>综合排序 <span> ∨</span></div></div><ul>";
		$(reps).each(function(i,elem){
			str += "<li><img src='" + elem.img +"'>";
			str += "<div class='ul-right'><p class='Name'>" + elem.name +"</p>";
			str += "<div class='p2'><span>精选</span>";
			str += "<p>" + elem.pm_desc +"</p></div>";
			str += "<p>" + elem.specifics + "</p>";
			str += "<p><span>￥" + elem.price + "</span>";
			str += "￥" + elem.market_price + "</p>";
			str += "</div>";
			str += "<div class='banner-3'><span class='down'>-</span>";
			str += "<span class='num'>0</span>";
			str += "<span class='up'>+</span></div></li>";
	
			})
			str += "</ul>";
			$(".choose-right").append(str);
			
			//加号添加点击事件
			var arr = [0];
			$(".up").click(function(){
				i++;
				num = Number($(this).siblings('.num').html())
				$(this).siblings().css({
					display:"block"
				}).siblings('.num').html(num+1);

				$(".count").css({
					display:"block"
				}).html(i);
				var Info = {	 
					img:$(this).parent().prev().prev().attr("src"),
					name:$(this).parent().prev().children(".Name").html(),
					price:$(this).parent().prev().children("p:nth-of-type(3)").children("span").html(),
					conter:i
				}
//				console.log(Info);
				//存储到key里，调用
				localStorage.setItem(Info.name,JSON.stringify(Info));
			});
		$(".down").click(function() {
			i--;
			num = Number($(this).siblings('.num').html())
			if(num<=1){
				$(this).css({
					display:"none"
				}).siblings('.num').css({
					display:"none"
				})
			}
			if(i<=0){
				$(".count").css({
					display:"none"
				})
				i = 0
			}
			$(".count").html(i)
			$(this).siblings('.num').html(num-1)
			});
			
			
		}
	})
	}
	
	function tempApp(){
		var oLi = $(".choose-left ul li");
		$(oLi).each(function(i,elem){
		$(elem).click(function(){
			$(".choose-left ul li span").css("background","#f8f8f8");
			$(this).children().css("background","#ffd600");
		})
	});

	}
	
	return {
		render:render,
		tempAjax:tempAjax,
		tempApp:tempApp
	}
})