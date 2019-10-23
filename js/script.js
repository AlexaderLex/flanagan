
 "use strict";
 
 var byId = document.getElementById.bind(document);
 var queryS = document.querySelector.bind(document);
 var querySa = document.querySelectorAll.bind(document);

 var parOne = byId("p1");
 var parTwo = byId("p2");
 var parThree = byId("p3");
 var parFour = byId("p4");

 var sp1 = byId("p1S1");
 var sp2 = byId("p1S2");
 var sp3 = byId("p1S3");

 var sp4 = byId("p2S1");
 var sp5 = byId("p2S2");
 var sp6 = byId("p2S3");

 var sp7 = byId("p3S1");
 var sp8 = byId("p3S2");
 var sp9 = byId("p3S3");

 var sp10 = byId("p4S1");
 var sp11 = byId("p4S2");
 var sp12 = byId("p4S3");

 var main = byId("secInp");

 /* Lexical structure of JavaScript */

 /*
 Whitespace:

(\u0020) - space;
(\u0009) - tab
(\u000B) - vertical tab
(\u000C) - form feed
(\u00A0) - nonbreaking space
(\uFEFF) - byte order mark

 Line terminators:

 (\u000A) - line feed
 (\u000D) - carriage return
 (\u2028) - line separator
 (\u2029) - paragraph separator

 Unicode format controls characters 
 (\u200F) - RIGHT-TO-LEFT MARK
 (\u200E) - LEFT-TO-RIGHT MARK

 (\u200D) - ZERO WIDTH JOINER
 (\u200C) - ZERO WIDTH NON-JOINER
 */

 main.innerText = "Cafe" + "-" + "\u000A\u000D" + "Caf\u00e9" + "_-_" + "\u00e9" + "_-_" + "\u0301";

 sp1.innerText= "Fuck";
 
//  console.log(0xff)
//  console.log(0xcafe911)
//  console.log(6.02e23)
 