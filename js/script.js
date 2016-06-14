$(document).ready(function() {
	$(".addItem").click(function(){
		var userInput = $("#item").val();
		/* CLEAR FIELD */
		$(".itemNameList").append('<li>' + userInput + '</li>');
		$(".removeImg").append("<li>poop.png</li>");
		$(".gotitImg").append("<li>Got It!</li>");

	});

	});

