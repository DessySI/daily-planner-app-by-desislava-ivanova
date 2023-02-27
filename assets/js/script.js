//function that executes the code upon start/restart
$(document).ready(function() {

var hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var now = moment().format("dddd, MMMM DDDo");
    
//displays the current day at the top of the calendar when a user opens the planner.
$("#currentDay").text(now);

//build grid
var newDiv=$('<div>');

//clone row - loop 
for (var i=0; i<9; i++){
    newDiv.clone().appendTo('#main').addClass('row time-block');
}
//append coluns to row
var newButton=$('<button>');
var newTextArea=$('<textarea>');

newDiv.clone().appendTo('.row').addClass('col-2 col-lg-1 hour');
//add textarea to every second column
newTextArea.clone().appendTo('.row').addClass('col-8 col-lg-10 text-area');
//add save button to every third column
newButton.clone().appendTo('.row').addClass('col-2 col-lg-1 fas fa-save saveBtn');

//add hour and id to hour and id to textarea

var idArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (i = 0; i < hoursArr.length; i++) {
        $('.hour').eq(i).append(hoursArr[i]).attr('id', idArr[i]);
        $('.text-area').eq(i).attr('id', idArr[i]).val(localStorage.getItem(idArr[i]));
}

$(".saveBtn").on("click", function () {
// localstorage to store time and text
var eventText = $(this).siblings(".text-area").val();
var timeEl = $(this).siblings(".hour").attr("id");
localStorage.setItem(timeEl, eventText);
});

//new function to compare event time and current time
function timeCheck(){
$('.time-block').each(function () {
  //variable to get current hour
  var hourNow = moment().format("k");
  var hourIndex = parseInt($(this).children().attr("id"));
  if(hourIndex < hourNow){
   $(this).addClass('past');
  }
  if(hourIndex == hourNow){
    $(this).addClass('present');
  }if(hourIndex > hourNow){
    $(this).addClass('future');
  }
  console.log(hourNow, hourIndex);
});
}
localStorage.getItem('idArr[i]');
timeCheck();
});















