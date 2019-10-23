
 "use strict";
 
 var then = new Date (1965, 3, 13);              // The 1st day of the 1st month of 2010
 var later = new Date (1965, 2, 13, 9, 10, 30); // Same day, at 5:10:30pm, local time

 var now = new Date();                          // The current date and time       
 var elapsed = now - then;                      // Date substraction: interval in milliseconds

 var yearsPast = function (){
     return  elapsed/1000/3600/24/365;
 }
 
 sp1.innerText = now;
 sp2.innerText = (elapsed/1000/3600/24/30.5).toFixed(2);
 sp3.innerText = yearsPast().toFixed(2);

 sp4.innerText = later.getFullYear();  // => 1965 
 sp5.innerText = later.getMonth();     // => 0: zero-based month
 sp6.innerText = later.getDate();      // => 1: one-based days
 sp7.innerText = (later.getDay())-2;       // => 5: day of week. 0 is Sunday 5 is Friday 
 sp8.innerText = later.getHours();     // => 9: 9am, local time
 sp9.innerText = later.getUTCHours();  // hours in UTC time; depends on timezone

 sp10.innerText = later.toString();    // Sat Mar 13 1965
 sp11.innerText = later.toUTCString(); // Sat Mar 13 1965

 sp12.innerText = later.toLocaleDateString();
 sp12.innerText = later.toLocaleTimeString();
 sp12.innerText = later.toISOString();

 
