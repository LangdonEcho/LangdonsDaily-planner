// Set current date in header

$("#currentDay").text(moment().format("dddd, MMMM Do"));

    // Get item from local storage if any
    $("#hour7 .description").val(localStorage.getItem("hour8"));
    $("#hour8 .description").val(localStorage.getItem("hour9"));
    $("#hour9 .description").val(localStorage.getItem("hour10"));
    $("#hour10 .description").val(localStorage.getItem("hour11"));
    $("#hour11 .description").val(localStorage.getItem("hour12"));
    $("#hour12 .description").val(localStorage.getItem("hour13"));
    $("#hour13 .description").val(localStorage.getItem("hour14"));
    $("#hour14 .description").val(localStorage.getItem("hour15"));
    $("#hour15 .description").val(localStorage.getItem("hour16"));
    $("#hour16 .description").val(localStorage.getItem("hour17"));

    timeTracker();