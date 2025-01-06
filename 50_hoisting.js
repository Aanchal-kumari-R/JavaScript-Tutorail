/* 
Hoisting: Hoisting is a mechanism where variable and declarations are moved to the top of the  
their scope before code execution. This means that no matter wheather function and variables 
are declared, they are moved to the top of their scope regardless of wheather their scope is 
global and local.
 */ 

// let myvar = 10; 
// function greet(){ 
//     console.log("This is my function.");
// } 
// greet(); 
// console.log(myvar);  




var myvar1;
greet(); 
console.log(myvar1);

var myvar1 = 10; 
function greet(){ 
    console.log("This is my function.");
} 
