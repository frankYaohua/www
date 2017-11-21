// check off specific todo by clicking
// when click on li inside the ul, run the code
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete todo
// when span inside the ul click, run the code
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // this is parent not span
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// scrape the text from the input
		var todoText = $(this).val();
		// clear the input after add
		$(this).val("");
		// create a new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});