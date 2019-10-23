"use strict";

var then = new Date (1965, 3, 13);              // The 1st day of the 1st month of 2010
var later = new Date (2010, 0, 1, 17, 10, 30); // Same day, at 5:10:30pm, local time

var now = new Date();                          // The current date and time       
var elapsed = now - then;                      // Date substraction: interval in milliseconds

var yearsPast = function (){
    return  elapsed/1000/3600/24/365;
}

sp1.innerText = now;
sp2.innerText = elapsed;
sp3.innerText = yearsPast().toFixed(2);
