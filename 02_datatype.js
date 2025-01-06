// Datatype :-  Data types define the type of values that a variable can hold. 

// 1 Primitive Datatype :- 
// 2 Object Datatype   

// 1 Primitive Datatype 

// Number :- Represents a numeric value , including integers and floating points numbers.

let mynum = 6 
console.log(mynum)  
console.log(typeof mynum)

let myNumber = -12 
console.log(myNumber)  
console.log( typeof(myNumber))

// String :- Represents a sequence of characters enclosed in single or double quotes. 
let name = "Aanchal Singh" 
console.log(name)
console.log( typeof name)
 

let my_num = 'Goldi Singh' 
console.log(my_num) 
console.log( typeof(my_num)) 

// Boolean :- Represents a logical-entity with two values value: True and false. 

let isRaining = true 
console.log(isRaining) 
console.log( typeof(isRaining)) 

let isAwesome = false 
console.log( isAwesome) 
console.log( typeof(isAwesome)) 

// Undefined :- Represents the absence of a value or an uninitialized variable. 

let Aanchal 
console.log(Aanchal)  
console.log(typeof Aanchal)  

// Null :- Represents the absence of a value. It is often used to explicitly indicates that a variable or object property has 
// no assigned value.

let name1 = null 
console.log(name1)
console.log(typeof(name1)) 

// Bigint :- Represents integers of arbitrary precision (available since ECMAScript 2020). 

const bigNumber = 4458349832094304934059898998890n 
console.log(BigInt)
console.log(typeof(BigInt)) 

// Symbol :- Next time  

// INTERVIEW QUESTION:-  

//? 1 :- What is the different between null and undefined ? 

// ans:- undefined means a variable had been declared but has not yet been assigned a value. whereas null is an assignment value, 
//  meaning that a variable had been declared and given the value of null.

//? 2:- What is the purpose of typeof operator in javascript?  

// ans:- typeof() operator is used to check the type of value(data).  
// convert a string to a number 
let myfavNum = '8' 
console.log(typeof +myfavNum) 
console.log(typeof Number(myfavNum)) 
 
// What is the result of 'typeof null' in javascript? 
//ans:-  object 
const mystring = "8" 
const mynum1 = parseInt(mystring) 
console.log(mynum1)  
console.log(parseInt("099")) 

const mystring1 = "8.5" 
const mynum11 = parseInt(mystring1)
const mynum12 = parseFloat(mystring1)
console.log(mynum11) 
console.log(mynum12)  
console.log(parseFloat("099")) 



// convet a number to a string 
let myfavNum1 = 10 
console.log(typeof String(myfavNum1)) 
console.log(typeof (myfavNum1 + ' ' )) 

//Truthy Value:-  Truthy values are treated as true when used in conditions.
// Returns true value :- "hello", 123 , array and object even if they are not empty 

// falsy Value:- Falsy values are treated as false in boolean context.
// Returns false value :- false , zero , '' , null , undefined , NaN (Not a number)

//? What is the purpose of Nan? 
// Nan stands for "Not a number"  and is returned when a mathematical operation does't a valid number. 

// isNaN() function :- It's check wheather a valid number or not?

console.log(isNaN("Aanchal")) 
console.log(isNaN('9'))  

// NaN == NaN why it is false 

if (NaN == NaN){ 
    console.log("Both are  equal.")
} 
else{ 
    console.log("Both are not equal.")
} 

// Because 
console.log(parseInt("fjdd"))
console.log(parseInt("@#$%"))