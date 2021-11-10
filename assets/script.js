
 moment().format('MMMM Do YYYY, h:mm:ss a');
 moment().format('dddd'); 
 

 // saveButton click listener function


$(".hour7").on("click", function() {
  var description = $(".h7").val();
  $("#hour7 .description").val(localStorage.getItem("hour7"))
});

$(".hour8").on("click", function() {
  var description = $(".h8").val();
  $("#hour8 .description").val(localStorage.getItem("hour8"))
});

$(".hour9").on("click", function() {
  var description = $(".h9").val();
  $("#hour9 .description").val(localStorage.getItem("hour9"))
});

$(".hour10").on("click", function() {
  var description = $(".h10").val();
  $("#hour10 .description").val(localStorage.getItem("hour10"))
});

$(".hour11").on("click", function() {
  var description = $(".h11").val();
  $("#hour11 .description").val(localStorage.getItem("hour11"))
});

$(".hour12").on("click", function() {
  var description = $(".h12").val();
  $("#hour12 .description").val(localStorage.getItem("hour12"))
});

$(".hour1").on("click", function() {
  var description = $(".h1").val();
  $("#hour1 .description").val(localStorage.getItem("hour1"))
});

$(".hour2").on("click", function() {
  var description = $(".h2").val();
  $("#hour2 .description").val(localStorage.getItem("hour2"))
});

$(".hour3").on("click", function() {
  var description = $(".h3").val();
  $("#hour3 .description").val(localStorage.getItem("hour3"))
});
    // Save text in local storage
    localStorage.setItem(time, text);


    // Get item from local storage if any
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));

    timeTracker();
