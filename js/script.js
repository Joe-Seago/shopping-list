$(document).ready(function() {
	$(".addItem").click(function(){
		var userInput = $("#item").val();
		/* CLEAR FIELD */
		$(".listItems").append("<li><img class='removeImg' src='images/poop.png'><span>" + userInput + "</span><img class='gotitImg' src='images/check.png'></li>");
		/*$(".removeImg").append("<li></li>");
		$(".gotitImg").append("<li></li>");*/
	});



	/* Strike Through Text */
	$("body").on("click", ".gotitImg", function(){
		$(this).siblings().toggleClass("strikeToggle");
	});


	/* Remove Item */
	$("body").on("click", ".removeImg", function(){
		console.log($(this).siblings())
		$(this).parent().remove();
	});


});