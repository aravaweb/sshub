 // Get current day and time
 var today = new Date();
 var day = today.getDay();
 var hour = today.getHours();
 var minute = today.getMinutes();

 // Set the text to display based on the day and time
 if (day == 2 && hour >= 7 && minute >= 15) {
   document.getElementById("displayText").innerHTML = "10A";
 } else if (day == 2 && hour >= 7 && minute >= 55) {
   document.getElementById("displayText").innerHTML = "10B";
 } else if (day == 2 && hour >= 8 && minute >= 35) {
   document.getElementById("displayText").innerHTML = "Break";
 } else if (day == 2 && hour >= 11 && minute >= 10) {
   document.getElementById("displayText").innerHTML = "10A";
 } else if (day == 2 && hour >= 12 && minute >= 20) {
   document.getElementById("displayText").innerHTML = "10B";
 } else {
   document.getElementById("displayText").innerHTML = "No Class";
 }