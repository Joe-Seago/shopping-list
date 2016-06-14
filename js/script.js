$(document).ready(function() {

	$(".textBox").submit(function(e) {

    /* PREVENTS DEFAULT FORM SUBMIT ACTION */
    e.preventDefault();

		var $input = $("#input");

		/* ADD NEW ITEM */
		var $new_item = $("<li><img class='removeImg' src='images/poop.png'><span>" + $input.val() + "</span><img class='gotitImg' src='images/check.png'></li>");

    /* APPENDS NEW ITEM TO UL LIST */
    $(".listItems").append($new_item);

    /* CLEARS INPUT VALUE */
    $input.val('');

    /* Strike Through Text */
    $new_item.find('.gotitImg').on("click", function() {
  		$(this).siblings('span').toggleClass("strikeToggle");
  	});

    /* Remove Item */
  	$new_item.find('.removeImg').on("click", function(){
  		$new_item.remove();
  	});
	});

});
