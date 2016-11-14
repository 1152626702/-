define(["text!./cart.html","css!./car.css"],function(html){
	
	
	function render(){
		$(".container").html(html);
		
	}
	
	function tempCar(){
		var str ="";
		for(var keys in localStorage){
			var obj = JSON.parse(localStorage.getItem(keys));
//			console.log(obj.name);
			str+="<li><div class='banner-1'><span><img src='images/3_10.gif'></span></div>";
			str+="<div class='banner-2'><img src='"+ obj.img +"'>";
			str+="<span class='sp1'>" + obj.name + "</span>";
			str+="<span class='mon'>" + obj.price + "</span></div>";
			str+="<div class='banner-3'><span class='tempDown'>-</span>";
			str+="<span class='num'>"+ obj.conter + "</span>";
			str+="<span class='tempUp'>+</span></div></li>";
		}
		var oUl = $(".banner-Top").append(str);
		$(".banner").append(oUl);
		
//		console.log(str);

	}
	function tempWay(){
		var Conter = $(".num").html();
		$(".tempUp").click(function(){
			Conter++;
			$(this).prev().html(Conter);
			var Info = {
					img:$(this).parent().prev().children().attr("src"),
					name:$(this).parent().prev().children(".sp1").html(),
					price:$(this).parent().prev().children(".mon").html(),
					conter:Conter
				}
//			console.log(Info);
			localStorage.setItem(Info.name,JSON.stringify(Info));
		})
		$(".tempDown").click(function(){
			if(Conter>1){
				Conter--;
				$(this).next().html(Conter);
				var Info = {
					img:$(this).parent().prev().children().attr("src"),
					name:$(this).parent().prev().children(".sp1").html(),
					price:$(this).parent().prev().children(".mon").html(),
					conter:Conter
				}
//			console.log(Info);
			localStorage.setItem(Info.name,JSON.stringify(Info));
			}else{
//				$(this).next().html("");
				localStorage.removeItem($(this).parent().prev().children(".sp1").html());
				$(this).parent().parent().hide();
			}
		})
	}
	return {
		render:render,
		tempCar:tempCar,
		tempWay:tempWay
	}
})