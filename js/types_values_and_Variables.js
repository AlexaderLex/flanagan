
 // Strings have properties and methods, too.

//  var s = "Hello world!";
//  var word = s.substring(s.indexOf(" ")+1, s.length);

//  console.log(word);

//  var s = "test";
//  s.len = 4;
 
//  var t =s.len;

//  console.log(t);

 var s = "test", n = 1, b = true; // String, number, and boolean value.
 var S = new String(s);           // A String object
 var N = new Number(n);           // A Number object
 var B = new Boolean (b);         // A Boolean object

//  console.log( n);
//  console.log(N);

//  console.log (s);
//  console.log(S);

//  console.log(n==N);
//  console.log(n===N);

//  console.log(typeof n);
//  console.log(typeof N);

 var s = "hello";               // /start with some lowercase text
//  console.log(s.toUpperCase());  // Returns "HELLO", but doesn't alter "s";
//  console.log(s);                // => "hello": the original string not change;


 var o ={ x : 1};   // start with an object 

//  console.log(o);

 o.x = 2;           // Mutate it by changing the value of a property

//  console.log (o);

 o.y = 3;           // Mutate it again by adding a new property

//  console.log(o);

 var a = [1,2,3];   // Arrays are also mutable

//  console.log(a);

 a[0] = 0;          // Change the value of an array element

//  console.log(a);

 a[3] = 4;          // Add a new array element

//  console.log(a);


 /* 
Objects are not compared by value: two objects are not equal even if they have
the same properties and values. And two arrays are not equal even if they
have the same elements in the same order:
 */

 var o = {x:1}, p = {x:1};  // Two objects with the same properties
//  console.log(o===p);        // => false: distinct objects are never equal
 var a = [], b = [];        // Two distinct, empty arrays
//  console.log(a === b);      // =>false: distinct arrays are never equal

var a = ["a", "b", "c"];        // An array we want to copy,
var b = [];             // A distinct array we'll copy into

for (var i = 0; i < a.length; i++) {
    b[i] = a[i];
}

// console.log(b);

 function equalArrays(a,b) {
     if (a.length != b.length) return false;    // Different-size arrays not equal
     for (var i = 0; i < a.length; i++)         // loop through all elements
        if (a[i] !==b[i]) return false;         // if any differ, arrays not equal
        return true;                            // otherwise they are equal
 }

 var c = equalArrays(a,b);
 console.log(c);

 // ------- Type conversion --------------------

 sp1.innerText = 10 + " objects";  // => "10 objects". Number 10 converts to a sting
 sp2.innerText = "7" * "4";        // => 28: both strings convert to numbers
 
 var n = 1 - "x" ;                  // NaN: string "x" can't convert to a number

 sp3.innerText = n + " objects"     // => "NaN objects": NaN converts to string NaN.

 sp4.innerText = Number(22) + " - " + typeof sp3.innerText;

 let xbx = false;
 
 let xbx1 = 5;
 var obj = {val: 23.65987, name: "newObject", type: "A piece of sheet"};

 sp5.innerText = obj.val + " " + obj.type;

 // 3.8.1 Conversions and Equality

//  console.log(null == undefined);
//  console.log("0" == 0);
//  console.log( 0 == false);
//  console.log("0" == false);

 console.log(Number("3"));
 console.log(String(false));
 console.log(Boolean([]));
 console.log(Object(3));

 /*
Certain JavaScript operators perform implicit type conversions, and are sometimes
used for the purposes of type conversion. If one operand of the + operator is a string,
it converts the other one to a string. The unary + operator converts its operand to a
number. And the unary ! operator converts its operand to a boolean and negates it.
These facts lead to the following type conversion idioms that you may see in some code:
 */

x = 23;

x + "" // Same as String(x)
+x // Same as Number(x). You may also see x-0
!!x // Same as Boolean(x). Note double !

// console.log(x + "" + "- " + typeof x);
// console.log("-------------------");
// console.log(String(x));
// console.log("-------------------");
// console.log(+x + "- " + typeof x);
// console.log("-------------------");
// console.log(Number(x))
// console.log("-------------------");
// console.log(!!x + "- " + typeof x);
// console.log("-------------------");
// console.log(Boolean(!!x));

 var n = 1023456.789;

 sp1.innerText = n.toPrecision(10);
 sp2.innerText = n.toFixed(1);
 sp3.innerText = n.toExponential(6);

 // parseInt and parseFloat --------------

 /*
 parseInt() parses only integers, while parseFloat() parses both integers
and floating-point numbers. If a string begins with “0x” or “0X”, parseInt() interprets
it as a hexadecimal number. Both parseInt() and parseFloat() skip leading white-
space, parse as many numeric characters as they can, and ignore anything that follows.
If the first nonspace character is not part of a valid numeric literal, they return NaN:
 */

 sp4.innerText = (parseInt("3 blind mice"));

 sp5.innerText = (parseInt(" 3.14 meters"));

 sp6.innerText = (parseInt("-12.34"));

 console.log(parseInt("0xff"));
 console.log(parseInt("-0xff"));

 console.log(parseFloat(".1"));
 console.log(parseFloat("0.1"));
 console.log(parseInt(".1"));
 console.log(parseFloat("$72.47"));

 /*
 parseInt() accepts an optional second argument specifying the radix (base) of the
 number to be parsed. Legal values are between 2 and 36. For example:
*/

 parseInt("11", 2); // => 3 (1*2 + 1)
 parseInt("ff", 16); // => 255 (15*16 + 15)
 parseInt("zz", 36); // => 1295 (35*36 + 35)
 parseInt("077", 8); // => 63 (7*8 + 7)
 parseInt("077", 10); // => 77 (7*10 + 7)