


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
newDiv.clone().appendTo('.row').addClass('col-1 hours ');
newDiv.clone().appendTo('.row').addClass('col-10 text-area');
newDiv.clone().appendTo('.row').addClass('col-1 save-button');

//add hour to every first column
var hoursArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

for (var i = 0; i < hoursArr.length; i++) {
        $('.hours').eq(i).append("<p>" + hoursArr[i] + "</p>");
    console.log(hoursArr);
}

//add textarea to every second column
var addTextArea = $('.text-area');
addTextArea.append("<textarea>").addClass('textarea');

//add save button to every third column
var addSaveButton = $('.save-button');
addSaveButton.append("<button>").addClass('saveBtn');


// $(".row").children().eq(0).addClass('col');
// $(".row").children().eq(1).addClass('col');
// $(".row").children().eq(2).addClass('col');

//var divEl = document.getElementById("container");



// / TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
// var removeItem = function(event) {
//   $(event.target).parent().remove();
// }

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
// shoppingListEl.on('click', '.delete-item-btn', removeItem);

// rootEl.children('ul').children().css("background-color", "white");

// $('input[type='text']').val('')


