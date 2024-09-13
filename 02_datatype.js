// Datatype :-  
// 1 Primitive Datatype 
// 2 Object Datatype   

// 1 Primitive Datatype 

// a Number :- 

let mynum = 6 
console.log(mynum)  
console.log(typeof mynum)

let myNumber = -12 
console.log(myNumber)  
console.log( typeof(myNumber))

// b String 
let name = "Aanchal Singh" 
console.log(name)
console.log( typeof name)
 

let my_num = 'Goldi Singh' 
console.log(my_num) 
console.log( typeof(my_num)) 

// c Boolean 

let isRaining = true 
console.log(isRaining) 
console.log( typeof(isRaining)) 

let isAwesome = false 
console.log( isAwesome) 
console.log( typeof(isAwesome)) 

// d Undefined 

let Aanchal 
console.log(Aanchal)  
console.log(typeof Aanchal)  

// e Null 

let name1 = null 
console.log(name1)
console.log(typeof(name1))
// f Bigint 

const bigNumber = 4458349832094304934059898998890n 
console.log(BigInt)
console.log(typeof(BigInt))

// convert a string to a number 
let myfavNum = '8' 
console.log(typeof +myfavNum) 
console.log(typeof Number(myfavNum)) 
 
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

// Returns true value :- "hello", 123 , array and object even if they are not empty 

// Returns false value :- false , zero , '' , null , undefined , NaN (Not a number)

// isNaN function () 

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