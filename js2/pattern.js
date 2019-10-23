"use strict";

//  /^HTML/            // Match the letter H T M L at the start of a string
//  /[1-9][0-9]*/      // Match a non-zero digit, followed by any # of digits
//  /\bjavascript\b/i  // Match "javascript" as a word, case-insensitive


 var text = "testing: 1, 2, 3";  // Sample Text
 var pattern = /\d+/g            // Matches all instances of one or more digits

 sp1.innerText = pattern.test(text);    // => true: a match exists
 sp2.innerText = text.search(pattern);  // => 9: position of first match
 sp3.innerText = text.match(pattern);   // => ["1", "2", "3"]: array of all matches

 sp4.innerText = text.replace(pattern, "#");  // => "testing: #, #, #"
 sp5.innerText = text.split(/\D+/);           // => ["", "1", "2", "3"]: split on non-degits

//  console.log( text.split(/\D+/));

 // Boolean Values

 var o;
 o = "0";

 if (o !== null) {
    //  console.log(typeof o + " yes")
 } else {
    //  console.log(typeof o + " no")
 };
 
 if (o) {
    //  console.log("that's right");
     
 } else {
    //  console.log("I don't think so!")
 };

 let x = 1;
 let y = 1;
 let z = 0;

 if ((x==0 && y == 0) || !(z==0)) {
     sp1.innerText = "what the hell is that?";
 } else {
     sp1.innerText = "Oh, really?";
 };

 var global = this;

