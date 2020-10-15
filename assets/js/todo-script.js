//For marking out completed tasks
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//For deleting a task
$("ul").on("click", "span", function(event){
	//Adding the .on instead of .click ensures that future added tasks will get the event listeners
	//Selecting ul cause it exists at the time the event listener is added 
	//Adding li as 2nd argument as the only element to be clicked
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //Stops the event from bubbling (being registered by the parent elements)
});

/*var spans = document.querySelectorAll("span");
var lis = document.querySelectorAll("li");
for (let i = 0; i < spans.length; i++) {
	spans[i].addEventListener("click", function(event){
		lis[i].remove();
	});
};
*/

$('input[type="text"]').keypress(function(event){
	if (event.which === 13) {
		var todoText = ($(this).val());
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li")
		$(this).val("");
	};
});

$(".fa-plus").click(function(){
	$('input[type="text"]').slideToggle();
});