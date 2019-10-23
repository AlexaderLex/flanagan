
 "use strict";
/*
Now, as promised, here are some functions whose bodies demonstrate common
JavaScript control structure statements:
*/

 // JavaScript statements include conditionals and loops using the sytax
 // of C, C++, Java, and other languages.

 function abs(x) {   // A function to compute the absolute value
    if (x >= 0) {    // The if statement...
        return x;    // executes this code if the comparison is true.
    }                // This is the end of clause. 
    else {           // The optional else clause executes its code if the comparison is false.
        return -x;   
    }                // Curly braces optional when 1 statement per clause.
 }                   // Note return statement nested inside if/else. 

//  parOne.textContent = abs(-236);

 function factorial (n) {  // A function to compute factorials
    var product = 1;       // Start wit a product of 1
    while (n > 1) {        // Repeat statement in {} while expr in () is true
    product *= n;          // Shortcut for product = product * n;
    n--;      
    // console.log(n);             // Shortcut for n = n - 1
    }                      // End of loop
    return product;        // Return the product
 }

 factorial(4);              // => 24 1*4*3*2

 sp11.innerHTML = factorial(7) + " - this is fractorial of _ '7'. ";

 function factorial2(n) {   // Another version using a different loop
    var i, product = 1;     // Start with 1
    for (i=2; i <= n; i++)  // Automatically increment i from 2 up to n
        product *= i;        // Do this each time. {} not needed for 1 line loops
        return product;      // Return the factorial
 }

 factorial2(5);               // => 120: 1*2*3*4*5

 sp12.innerHTML = factorial2(5) + " - this is fractorial of _ '5'. ";

//  console.log(factorial2(5));

 /* -------------------  Constructor  ----------     */

 // Define a constructor to initialize a new Point object

 function Point(x,y) {    // By convention, constructors starts with capitals
    this.x = x;           // this keyword is the new object being initialized
    this.y = y;           // Store function arguments as object properties
                          // No return is necessary
 }

 // Use a constructor function with the keyword "new" to create instances

 var p = new Point(2,7);    // The geometric point(1,1)

 // Defines methods for Point object by assigning them to the
// prototype object associated with the constructor function.

 Point.prototype.r = function() { // return the square root of x2 + y2
     return Math.sqrt(            // This is the Point object on which the method is 
         this.x * this.x +          //... invoked.
         this.y * this.y
     );
 };

 // Now the Point object p (and all future Point object) inherits
 // the method r()

 main.textContent = p.r().toFixed(4);

 