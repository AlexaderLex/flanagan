"use strict";

 sp1.innerText = "This string\nhas two lines";
 sp2.innerText = 'name="myform"';

 var p = "\u03c0";
 sp1.innerText = p;
 sp2.innerText = p.length;

 var e = "\u00e8";
 sp3.innerText = e;

 sp4.innerText = "π is the ratio of a circle's \" circumference to its diameter"

 sp5.innerText = "two\n lines";
 sp6.innerText = "one\
 long\
 line"

 console.log(`string text line 1
 string text line 2`);

 var a = 5;
 var b = 10;
 console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
 
 var a = 5;
 var b = 10;
 console.log(`Fifteen is ${a + b} and
 not ${2 * a + b}.`);
 
 var s = "Fuck you, all!";
 console.log(s.length);     // => 13
 
 var ss = s.charAt(0);      // => "F": the first character.
 console.log(ss);

 ss= s.charAt(s.length-1);  // => "!": the last character.
 console.log(ss);

 ss = s.substring(1,4);    // => "uck": the 2nd, 3rd and 4 characters.
 console.log(ss);

 ss = s.slice(1,4);        // => "uck": same thing
 console.log(ss);

 ss = s.slice(-3);         // => "ll!": last three characters
 console.log(ss);

 ss = s.indexOf("F");      // => 0: position of first letter F.
 console.log(ss);

 ss = s.indexOf("u");      // => 1: position of first letter u.
 console.log(ss);

 ss = s.lastIndexOf("u");  // => 7: position of last letter u
 console.log(ss);

 ss = s.indexOf("u", 3);  // => 7: position of first "u" at or after 3
 console.log(ss);
 
 ss = s.split(" ");       // => ["Fuck", "you,", "all"] split into sustrings
 console.log(ss);

 ss = s.split(", ");      // => ["Fuck you", "all"]
 console.log(ss);

 ss = s.replace("Fuck", "Love"); // => "Love you, all!"
 console.log(ss);

 ss = s.toUpperCase();           // => "FUCK YOU, ALL"
 console.log(ss);

 ss = s.split("");
 console.log(ss);

 ss = s[10];
 console.log(ss);
 

 



 