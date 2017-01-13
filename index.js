$(document).ready(function() {

//Define variable to use later

$('planets');
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];   

//Reverse then loop over array to create option elements, and append option elements to select

$($(planets).get().reverse()).each(function(value) {
	$('<option>').val(this[1]).text(this[0]).appendTo('#planetList');
});

// Alternate method to loop over array
// for(var i = (planets.length - 1); i >= 0 ; i--) {
// var newOption = document.createElement('option');
// newOption.innerText = planets[i][0];
// newOption.value = planets[i][1];
// //Append new options to select element
// $('#planetList').append(newOption);
// };



//Create function that is called when button is clicked
$('#calculateBtn').click(function() {

//Grab user input weight
var userWeight = $('#weightInput').val();

//Grab planet gravity value from option element
var planetGravity = $('#planetList').prop('value');

//Grab name of selected planet
var planetName = $('#planetList option:selected').text();

//Create Space Weight
var spaceWeight = userWeight * planetGravity;

//Create new element and append to div
newElement = $('<h3 class="">').text("Your weight on " + planetName + " is " + spaceWeight + " lbs.")
$('#mainDiv').append(newElement);

//Clear the input of previous number
$('#weightInput').val('');
	});
});



