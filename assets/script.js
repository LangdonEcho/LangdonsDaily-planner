
 moment().format('MMMM Do YYYY, h:mm:ss a');
 moment().format('dddd'); 
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

 // saveButton click listener function

$("#hour7").on("click", function() {
  var description = $(".h7").val();
  localStorage.setItem("7 AM", description)
});
$("#hour7").val(localStorage.getItem("7 AM"));

$("#hour8").on("click", function() {
  var description = $(".h8").val()
  localStorage.setItem("8 AM", description)
});
$("#hour8").val(localStorage.getItem("8 AM"))

$("#hour9").on("click", function() {
  var description = $(".h9").val();
  localStorage.setItem("hour9", description)
});
$("#hour9").val(localStorage.getItem("9 AM"))

$(".hour10").on("click", function() {
  var description = $(".h10").val();
  localStorage.setItem("hour10", description)
});
$("#hour10").val(localStorage.getItem("10 AM"))

$(".hour11").on("click", function() {
  var description = $(".h11").val();
  localStorage.setItem("hour11", description)
});
$("#hour11").val(localStorage.getItem("11 AM"))

$(".hour12").on("click", function() {
  var description = $(".h12").val();
 localStorage.setItem("hour12", description)
}); 
$("#hour12").val(localStorage.getItem("12 AM"))

$(".hour13").on("click", function() {
  var description = $(".h1").val();
  localStorage.setItem("hour1", description)
});
$("#hour13").val(localStorage.getItem("1 PM"))

$(".hour14").on("click", function() {
  var description = $(".h2").val();
  localStorage.setItem("hour2", description)
});
$("#hour14").val(localStorage.getItem("2 PM"))

$(".hour15").on("click", function() {
  var description = $(".h3").val();
  localStorage.getItem("hour3", description)
});
$("#hour15").val(localStorage.getItem("3 PM"))

    //Gets the current time and turns the current hour into a number.
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

//Getting the hours from the page and converting them into numbers.
//Also getting each textarea.
var hr7 = document.querySelector(".hr7").textContent;
hr7 = parseInt(hr7[0]);
var h7 = document.querySelector(".h7");

var hr8 = document.querySelector(".hr8").textContent;
hr8 = parseInt(hr8[1]) + 10;
var h8 = document.querySelector(".h8");

var hr9 = document.querySelector(".hr9").textContent;
hr9 = parseInt(hr9[1]) +10;
var e11 = document.querySelector(".h9");

var hr10 = document.querySelector(".hr10").textContent;
hr10 = parseInt(hr10[1]) + 10;
var h10 = document.querySelector(".h10");

var hr11 = document.querySelector(".hr11").textContent;
hr11 = parseInt(hr11[0]) +12;0
h11 = document.querySelector(".h11");

var hr12 = document.querySelector(".hr12").textContent;
hr12 = parseInt(hr12[0]) +12;
var h12 = document.querySelector(".h12");

var hr1 = document.querySelector(".h1").textContent;
hr1 = parseInt(hr1[0]) +12;
var h1 = document.querySelector(".h1");

var hr2 = document.querySelector(".hr2").textContent;
hr2 = parseInt(hr2[0]) +12;
var h2 = document.querySelector(".h2");

var hr3 = document.querySelector(".hr3").textContent;
hr3 = parseInt(hr3[0]) +12;
var h3 = document.querySelector(".h3");


//function that color codes the various time rows depending on current hour.
var hours  = [h7, h8, h9, h10, h11, h12, h1, h2, h3];
var inputs = [hr7, hr8, hr9, hr10, hr11, hr12, hr1, hr2, hr3];
function colorcoding() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            inputs[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            inputs[i].classList.add("present");
        }
        else {
            inputs[i].classList.add("future");
        }
    }
}
colorcoding();