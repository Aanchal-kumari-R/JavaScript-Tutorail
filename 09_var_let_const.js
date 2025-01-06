// VAR vs LET vs CONST: 
// var is globally scoped while let and const are block scoped.  
// var can be update and redeclared within it's scoped. 
// let can be update but not redeclared. 
// const can neither be update nor be redeclared. 
// var variable are initialized with undefined whereas let and const variables are not initialized. 
// const must be initialized during declaration unlike let and var.


let a = "aanchal";  
// let a = "Goldi" error , can't redeclare
// { 
//     let a = "ram"; 
//     console.log(a)
// } 
console.log(a)  

var b = "aanchal";  
var b = "Goldi";
{ 
    var b = "ram"; 
    console.log(b)
} 
console.log(b)  

let l1 = 5; 
let b1 = 5;
const rectangle = l1*b1;  
// let rectangle = error , constant can not change  
// rectangle = 'jkk'; eroor
console.log(rectangle)
