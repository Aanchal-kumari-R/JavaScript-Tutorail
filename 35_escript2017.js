// list of new useful festures added in ES8 
// string padding 
// Object.values 
// Object.entries 
// Trailing commas in function parameter lists and calls 
// Async Function 


// STRING PADDING:- String padding in javaScript is a way to add extra characters (like space) to a string to make it a specific  
// ḷength. 

// using padStart() pad from the beginning. 

let name = "Aanchal"; 
const paddedName = name.padStart(10);  
const paddedName3 = name.padStart(10,'*'); 
console.log(paddedName3);  

// using padEnd pad from the end. 

let name1 = "Goldi"; 
const paddedName1 = name.padEnd(15); 
const paddedName4 = name.padEnd(10,"."); 
console.log(paddedName4);  

// TRAILING COMMAS 
// This features allows to have trailing commas in function calls array literal and object literal. 

function greet(name,age,boolean,){ 
    console.log(`Hello ${name} , you are ${age} year olds.`);
}  

greet('aanchal',20,true,)