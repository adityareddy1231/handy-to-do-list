//Check out completed toDo'
$("ul").on("click", "li", function() {
  //toggle the completed style class
  $(this).toggleClass("completed");
});

//Delete toDo by clicking on X
$("ul").on("click", "span", function(e) {
  //Stop click propagation to parents
  e.stopPropagation();

  $(this).parent().fadeOut("500", function() {
    $(this).remove();
  });
});

//Create a new toDo using text input box
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    //checking if textbox is not empty
    if ($(this).val()) {
      //grabbing text
      var toDoText = $(this).val();
      //creating new li
      $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + toDoText + "</li>");
      //clearing input box
      $(this).val("");
    }
  }
  console.log("keypress");
});

//Plus sign functionality for hiding or showing input box;
$(".fa-plus").on('click', function() {
  $("input[type='text']").fadeToggle();
});
