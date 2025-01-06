// Math Object in JavaScript  
// Math:- The Math namespace object contains static properties and methods for mathematical constant and function. 
// Math work with Number data type. It does not work with Bignint.

// Math.PI :- Represents the mathematical constant Pi(n).
const piValue = Math.PI; 
console.log(piValue);  

// Basic Operations: 
// Math.abs() :- The math.abs() static method returns the absolute value of a number. 
console.log(Math.abs(5));
console.log(Math.abs(-3)); 

// Math.round():- Round a number to the nearest integer.
console.log(Math.round(5.2));
console.log(Math.round(-5.6)); 

// Math.floor():- Returns the value of x rounded down to its nearest integer.
console.log(Math.floor(2.1));
console.log(Math.floor(2.6)); 
console.log(Math.floor(-2.3)) 

// Math.ceil():- Returns the value of x rounded up to its nearest integer.
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.7));
console.log(Math.ceil(2.01)); 

// Math.pow():- Returns the value of x to the power of y. 
console.log(Math.pow(2,3)); 
console.log(2**3); 

// Math.random():- Math.random() method returns a random number between(inclusive) 0 and 1 (exclusive).
console.log(Math.random());
console.log(Math.round(Math.random() * 100).toFixed(3));  

// Math.trunc():- Returns the integer part of x.  
const trunc_value = Math.trunc(4.5); 
console.log(trunc_value);  

// Note:- Math.trunc() and Math.sign() were added to JavaScript 2015-ES6; 
