
var hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var storeWorkingHours = function() {
    localStorage.setItem("hoursArr", JSON.stringify(hoursArr));
  }

  $(document).ready(function() {
//displays the current day at the top of the calendar when a user opens the planner.
var now = moment().format("dddd, MMMM DDDo");
$("#currentDay").text(now);

//build grid
var newDiv=$('<div>')

//clone row - loop 
for (var i=0; i<9; i++){
    newDiv.clone().appendTo('#main').addClass('row');
};
//append coluns to row
newDiv.clone().appendTo('.row').addClass('col-1 hours');
newDiv.clone().appendTo('.row').addClass('col-10 text-area');
newDiv.clone().appendTo('.row').addClass('col-1 save-button');

//add hour to every first column
var i=0;
for (i = 0; i < hoursArr.length; i++) {
        $('.hours').eq(i).append(hoursArr[i]);
}

//add textarea to every second column
var addTextArea = $('.text-area');
addTextArea.append("<textarea>").addClass('textarea');

//add save button to every third column
var addSaveButton = $('.save-button');
addSaveButton.append("<i>").addClass('fas fa-save saveBtn');

//variable to get the hour
var hourNow = moment().hour();
console.log(hourNow);
});









