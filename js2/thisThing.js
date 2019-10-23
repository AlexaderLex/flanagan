function sum(a,b) {
    //  console.log(this === undefined);
    //  this.myNumber = 20;
     return a * b;
 };
  
 sum(1,2);
//  console.log(sum(2,3));
 
//  console.log(window.myNumber);

//  console.log(sum(2,6));

 function execute() {
     function concat(str1, str2) {
        //  console.log( this === undefined);
         return str1 + str2;
     }
     concat()
    //  console.log(concat("fuck you ", "all!"));
 }

 execute();

 //-----------------------------------------

 function nonStrictSum(a,b) {
    //  console.log(this);
     return a + b;
 }

 function strictSum(a,b) {
     "use strict";
    //  console.log(this);
     return a + b;
 }

//  console.log(nonStrictSum(10,12));

//  console.log(strictSum(20,30));

 //---------------------------------------

 /*
 var numbers = {
     
     numberA: 5,
     numberB: 10,
     sum: function() {
        // "use strict";
         console.log(this);
         function calculate () {
             console.log(this);
            return this.numberA + this.numberB;
            //  return numbers.numberA + numbers.numberB;
         }
         return calculate();
     }
     
 };

 console.log( numbers.sum());

 console.log(numbers);

 */

//  var numbers = {
//      numberA: 5,
//      numberB: 10,
//      sum: function() {
//          console.log(this);
//          function calculate() {
//              console.log(this);
//              return this.numberA + this.numberB;
//          }
//         console.log(this);
//         return calculate.call(this);
//         // return calculate();
//      }
//  };

// console.log(numbers.sum());

//  var xy = [1,3];
//  console.log(xy);
//  console.log(xy.join(", "));


//  console.log(
//     ['Hello', 'World'].join(', ') // method invocation
//   );
//   console.log(
//     ({ ten: function() { return 10; } }).ten() // method invocation
//   );
//   var obj = {};
//   obj.myFunction = function() {
//      console.log(this); 
//     return new Date().toString();
    
//   };
//   console.log(
//       this,
//     obj.myFunction() // method invocation
//   );
  
//   var otherFunction = obj.myFunction;
//   console.log(otherFunction());     // function invocation
//   console.log(parseInt('16.023600000300')); // function invocation
//   console.log(isNaN(0));            // function invocation

//   var calc = {
//     num: 0,
//     increment: function() {
//       console.log(this); // => true
//       this.num += 1;
//       return this.num;
//     }
//   };
//   // method invocation. this is calc
  
//  calc.num2 = calc.increment();

//  console.log(calc.increment());
//  calc.num2 = calc.increment();
//  console.log(calc.num2);
//  console.log(calc.increment());
//  calc.num2 = calc.increment();
//  console.log(calc.num2);
//  console.log(calc.increment());
//  calc.num2 = calc.increment();
//  console.log(calc.num2);
//  console.log(calc.num2);

 var xxy = document.querySelectorAll(".pSpan");

 xxy.forEach(yyx => { for(var i = 0; i < 24; i++){yyx.innerText += i + " - "} ;
    
 });


//  console.log(main);