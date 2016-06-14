$(document).ready(function() {

	/* Add Item To List */
	$(".addItem").click(function(){
		var userInput = $("#item").val();
		$(".listItems").append("<li><img class='removeImg' src='images/poop.png'><span>" + userInput + "</span><img class='gotitImg' src='images/check.png'></li>");
	});

	/* Strike Through Text */
	$("body").on("click", ".gotitImg", function(){
		$(this).siblings().toggleClass("strikeToggle");
	});

	/* Remove Item */
	$("body").on("click", ".removeImg", function(){
		$(this).parent().remove();
	});

});