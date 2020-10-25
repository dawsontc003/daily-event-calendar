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

// Click listener event for 2pm time slot
$("#2pmSave").on("click", function () {
  var storeEvent = document.getElementById("2pmTask").value;
  var storeEventTime = "2PM";
  document.getElementById("2pmTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task6", storeEvent);
  localStorage.setItem("Time6", storeEventTime);
});
// Local storage retrieval for 2pm tasks
document.getElementById("2pmTask").innerHTML = localStorage.getItem("Task6");

// past, present, future, color coordination for 2pm
if (timeOfDay > 14) {
  var color = document.getElementById("2pmTask");
  color.classList.add("past");
} else if (timeOfDay == 14) {
  var color = document.getElementById("2pmTask");
  color.classList.add("present");
}
if (timeOfDay < 14) {
  var color = document.getElementById("2pmTask");
  color.classList.add("future");
}

// Click listener event for 3pm time slot
$("#3pmSave").on("click", function () {
  var storeEvent = document.getElementById("3pmTask").value;
  var storeEventTime = "3PM";
  document.getElementById("3pmTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task7", storeEvent);
  localStorage.setItem("Time7", storeEventTime);
});
// Local storage retrieval for 3pm tasks
document.getElementById("3pmTask").innerHTML = localStorage.getItem("Task7");

// past, present, future, color coordination for 3pm
if (timeOfDay > 15) {
  var color = document.getElementById("3pmTask");
  color.classList.add("past");
} else if (timeOfDay == 15) {
  var color = document.getElementById("3pmTask");
  color.classList.add("present");
}
if (timeOfDay < 15) {
  var color = document.getElementById("3pmTask");
  color.classList.add("future");
}

// Click listener event for 4pm time slot
$("#4pmSave").on("click", function () {
  var storeEvent = document.getElementById("4pmTask").value;
  var storeEventTime = "4PM";
  document.getElementById("4pmTask").innerHTML = storeEvent;
  console.log(storeEvent);
  localStorage.setItem("Task8", storeEvent);
  localStorage.setItem("Time8", storeEventTime);
});
// Local storage retrieval for 4pm tasks
document.getElementById("4pmTask").innerHTML = localStorage.getItem("Task8");

// past, present, future, color coordination for 4pm
if (timeOfDay > 16) {
  var color = document.getElementById("4pmTask");
  color.classList.add("past");
} else if (timeOfDay == 16) {
  var color = document.getElementById("4pmTask");
  color.classList.add("present");
}
if (timeOfDay < 16) {
  var color = document.getElementById("4pmTask");
  color.classList.add("future");
}

// CLick listener event for 5pm time slot
$("#5pmSave").on("click", function () {
  var storeEvent = document.getElementById("5pmTask").value;
  var storeEventTime = "5PM";
  document.getElementById("5pmTask").innerHTML = storeEvent;
  localStorage.setItem("Task9", storeEvent);
  localStorage.setItem("Time9", storeEventTime);
});
// local storage retrieval for 5pm tasks
document.getElementById("5pmTask").innerHTML = localStorage.getItem("Task9");

// past, present, future, color coordination for 4pm
if (timeOfDay > 17) {
  var color = document.getElementById("5pmTask");
  color.classList.add("past");
} else if (timeOfDay == 17) {
  var color = document.getElementById("5pmTask");
  color.classList.add("present");
}
if (timeOfDay < 17) {
  var color = document.getElementById("5pmTask");
  color.classList.add("future");
}
