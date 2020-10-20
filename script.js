//pseudocode
//Populate current date and time on calendar page
// Declared variable in Global membory for timer display
var currentDate = moment().format("LLL");
//Targeted HTML id to input date and time display to user
$("#currentDay").text(currentDate);
console.log(typeof currentDate);
// Display hour blocks for a working schedule calendar 8am to 6pm
// Allow user to enter tasks/event in each hour block
// Hour block display must be color coded to define past, present, and future blocks
// Any event saved in a time block must be stored in local storage
// When page is refreshed event data is not lost
