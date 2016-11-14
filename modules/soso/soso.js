define(["text!./soso.html","css!./soso.css"],function(html){
	
	
	function render(){
		$(".container").html(html);
		
	}
	return {
		render:render
	}
})