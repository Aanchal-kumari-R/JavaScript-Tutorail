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
