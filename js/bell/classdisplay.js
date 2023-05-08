 // Get current day and time
 var today = new Date();
 var day = today.getDay();
 var hour = today.getHours();
 var minute = today.getMinutes();

 // Set the text to display based on the day and time
 if (day == 4 && hour >= 7) {
   document.getElementById("displayText").innerHTML = "Break";
 } else if (day == 4 && hour >= 7 && minute >= 15) {
   document.getElementById("displayText").innerHTML = "10B";
 } else if (day == 4 && hour >= 8 && minute >= 40) {
   document.getElementById("displayText").innerHTML = "10A";
 } else if (day == 4 && hour >= 11 && minute >= 30) {
   document.getElementById("displayText").innerHTML = "10A";
 } else if (day == 4 && hour >= 12) {
   document.getElementById("displayText").innerHTML = "10B";
 } else {
   document.getElementById("displayText").innerHTML = "Break";
 }