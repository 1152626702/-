define(["text!./home.html","css!./home.css"],function(html){
	function render(){
		$(".container").html(html);
	}

	return {
		render:render
	}
})