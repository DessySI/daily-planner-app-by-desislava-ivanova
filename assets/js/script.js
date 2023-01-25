var hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var now = moment().format("dddd, MMMM DDDo");

$("#currentDay").text(now);
//function that executes the code upon start/restart
 $(document).ready(function() {
//displays the current day at the top of the calendar when a user opens the planner.
//build grid
var newDiv=$('<div>');

//clone row - loop 
for (var i=0; i<9; i++){
    newDiv.clone().appendTo('#main').addClass('row time-block');
}
//append coluns to row
var newButton=$('<button>');
var newTextArea=$('<textarea>');
newDiv.clone().appendTo('.row').addClass('col-1 hour');
//add textarea to every second column
newTextArea.clone().appendTo('.row').addClass('col-10 text-area');
//add save button to every third column
newButton.clone().appendTo('.row').addClass('col-1 fas fa-save saveBtn');

//add hour to every first column
for (i = 0; i < hoursArr.length; i++) {
        $('.hour').eq(i).append('<p>' + hoursArr[i] + '</p>').attr('id', hoursArr[i]);
}
$(".saveBtn").on("click", function () {
// localstorage to store time and text
var eventText = $(this).siblings(".text-area").val();
var timeEl = $(this).siblings(".hour").attr("id");
localStorage.setItem(timeEl, eventText);
eventText.val(localStorage.getItem(timeEl));
});

//not completed
function armagedon(){
$('.time-block').each(function () {
  //variable to get current hour
  var hourNow = moment().format("h");
  var hourIndex = parseInt($(this).children().eq(0).attr("id"));
  if(+hourNow < hourIndex){
   $(this).addClass('.future');
  };
  if(+hourNow == hourIndex){
    $(this).addClass('.present');
  }else{
    $(this).addClass('.past');
  }
  console.log(+hourNow, hourIndex);
});
}
armagedon();
});
















