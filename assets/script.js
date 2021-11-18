// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    var today = moment().format("dddd [|] LL [| Week] W");
$("#currentDay").append(today)

var currentTime = 10
 // saveButton click listener function

$("#hour7").on("click", function() {
  var description = $(".h7").val();
  localStorage.setItem("7AM", description)
});
$(".h7").val(localStorage.getItem("7AM"));

$("#hour8").on("click", function() {
  var description = $(".h8").val()
  localStorage.setItem("8AM", description)
});
$(".h8").val(localStorage.getItem("8AM"))

$("#hour9").on("click", function() {
  var description = $(".h9").val();
  localStorage.setItem("9AM", description)
});
$(".h9").val(localStorage.getItem("9AM"))

$(".hour10").on("click", function() {
  var description = $(".h10").val();
  localStorage.setItem("10AM", description)
});
$(".h10").val(localStorage.getItem("10AM"))

$(".hour11").on("click", function() {
  var description = $(".h11").val();
  localStorage.setItem("11AM", description)
});
$(".h11").val(localStorage.getItem("11AM"))

$(".hour12").on("click", function() {
  var description = $(".h12").val();
 localStorage.setItem("12AM", description)
}); 
$(".h12").val(localStorage.getItem("12AM"))

$(".hour13").on("click", function() {
  var description = $(".h1").val();
  localStorage.setItem("1PM", description)
});
$(".h1").val(localStorage.getItem("1PM"))

$(".hour14").on("click", function() {
  var description = $(".h2").val();
  localStorage.setItem("2PM", description)
});
$(".h2").val(localStorage.getItem("2PM"))

$(".hour15").on("click", function() {
  var description = $(".h3").val();
  localStorage.getItem("3PM", description)
});
$(".h3").val(localStorage.getItem("3PM"))

    //Gets the current time and turns the current hour into a number.
    var currentTime = moment().format('H');
    currentTime = parseInt(currentTime);
 
    //converting from military time
const militaryTimeConversion = (time) => {
  if (time.includes("PM")) {
    return parseInt(time.replace("PM", "")) + 12;
  } else {
    return parseInt(time.replace("AM", ""));
  }
};
//Getting the hours from the page and converting them into numbers.
//Also getting each textarea.
var hr7 = document.querySelector(".hr7").textContent;
hr7 = parseInt(hr7.replace("AM", ''))
var h7 = document.querySelector(".h7");

var hr8 = document.querySelector(".hr8").textContent;
hr8 = parseInt(hr8.replace("AM", ''))
var h8 = document.querySelector(".h8");

var hr9 = document.querySelector(".hr9").textContent;
hr9 = parseInt(hr9.replace("AM", ''))
var h9 = document.querySelector(".h9");

var hr10 = document.querySelector(".hr10").textContent;
hr10 = parseInt(hr10.replace("AM", ''))
var h10 = document.querySelector(".h10");

var hr11 = document.querySelector(".hr11").textContent;
hr11 = parseInt(hr11.replace("AM", ''))
h11 = document.querySelector(".h11");

var hr12 = document.querySelector(".hr12").textContent;
hr12 = parseInt(hr12.replace("AM", ''))
var h12 = document.querySelector(".h12");

var hr1 = document.querySelector(".h1").textContent;
hr1 = parseInt(hr1.replace("PM", ''))
var h1 = document.querySelector(".h1");

var hr2 = document.querySelector(".hr2").textContent;
hr2 = parseInt(hr2.replace("PM", ''))
var h2 = document.querySelector(".h2");

var hr3 = document.querySelector(".hr3").textContent;
hr3 = parseInt(hr3.replace("PM", ''))
var h3 = document.querySelector(".h3");


//function that color codes the various time rows depending on current hour.
var inputs = [h7, h8, h9, h10, h11, h12, h1, h2, h3];
var hours  = [hr7, hr8, hr9, hr10, hr11, hr12, hr1, hr2, hr3];

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
});