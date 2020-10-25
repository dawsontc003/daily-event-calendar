// Declaried variable in Global memory for date display in jumbotron
var currentDate = moment().format("LLL");
// Targeted document to display current date and time
$("#currentDay").text(currentDate);
console.log(currentDate);
// Variable declared in global memory for past, present, future display
var timeOfDay = moment().format("H");
console.log(timeOfDay);

// Click listener event for 9am time slot
$("#9amSave").on("click", function () {
  var storeEvent = document.getElementById("9amTask").value;
  var storeEventTime = "9AM";
  document.getElementById("9amTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task1", storeEvent);
  localStorage.setItem("Time", storeEventTime);
});
// Local storage retrieval for 9am tasks
document.getElementById("9amTask").innerHTML = localStorage.getItem("Task1");

// past, present, future, color coordination for 9am
if (timeOfDay > 9) {
  var color = document.getElementById("9amTask");
  color.classList.add("past");
} else if (timeOfDay == 9) {
  var color = document.getElementById("9amTask");
  color.classList.add("present");
}
if (timeOfDay < 9) {
  var color = document.getElementById("9amTask");
  color.classList.add("future");
}

// Click listener event for 10am time slot
$("#10amSave").on("click", function () {
  var storeEvent = document.getElementById("10amTask").value;
  var storeEventTime = "10AM";
  document.getElementById("10amTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task2", storeEvent);
  localStorage.setItem("Time2", storeEventTime);
});
// Local storage retrieval for 10am tasks
document.getElementById("10amTask").innerHTML = localStorage.getItem("Task2");

// past, present, future, color coordination for 10am
if (timeOfDay > 10) {
  var color = document.getElementById("10amTask");
  color.classList.add("past");
} else if (timeOfDay == 10) {
  var color = document.getElementById("10amTask");
  color.classList.add("present");
}
if (timeOfDay < 10) {
  var color = document.getElementById("10amTask");
  color.classList.add("future");
}

// Click listener event for 11am time slot
$("#11amSave").on("click", function () {
  var storeEvent = document.getElementById("11amTask").value;
  var storeEventTime = "11AM";
  document.getElementById("11amTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task3", storeEvent);
  localStorage.setItem("Time3", storeEventTime);
});
// Local storage retrieval for 11am tasks
document.getElementById("11amTask").innerHTML = localStorage.getItem("Task3");

// past, present, future, color coordination for 11am
if (timeOfDay > 11) {
  var color = document.getElementById("11amTask");
  color.classList.add("past");
} else if (timeOfDay == 11) {
  var color = document.getElementById("11amTask");
  color.classList.add("present");
}
if (timeOfDay < 11) {
  var color = document.getElementById("11amTask");
  color.classList.add("future");
}

// Click listener event for 12pm time slot
$("#12pmSave").on("click", function () {
  var storeEvent = document.getElementById("12pmTask").value;
  var storeEventTime = "12PM";
  document.getElementById("12pmTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task4", storeEvent);
  localStorage.setItem("Time4", storeEventTime);
});
// Local storage retrieval for 12pm tasks
document.getElementById("12pmTask").innerHTML = localStorage.getItem("Task4");

// past, present, future, color coordination for 12pm
if (timeOfDay > 12) {
  var color = document.getElementById("12pmTask");
  color.classList.add("past");
} else if (timeOfDay == 12) {
  var color = document.getElementById("12pmTask");
  color.classList.add("present");
}
if (timeOfDay < 12) {
  var color = document.getElementById("12pmTask");
  color.classList.add("future");
}

// Click listener event for 1pm time slot
$("#1pmSave").on("click", function () {
  var storeEvent = document.getElementById("1pmTask").value;
  var storeEventTime = "1PM";
  document.getElementById("1pmTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task5", storeEvent);
  localStorage.setItem("Time5", storeEventTime);
});
// Local storage retrieval for 1pm tasks
document.getElementById("1pmTask").innerHTML = localStorage.getItem("Task5");

// past, present, future, color coordination for 1pm
if (timeOfDay > 13) {
  var color = document.getElementById("1pmTask");
  color.classList.add("past");
} else if (timeOfDay == 13) {
  var color = document.getElementById("1pmTask");
  color.classList.add("present");
}
if (timeOfDay < 13) {
  var color = document.getElementById("1pmTask");
  color.classList.add("future");
}
