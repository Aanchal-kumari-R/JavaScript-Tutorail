//  push an element in array at last index.  
let fruits5 = ['apple','orange','mango','grapes','banana']; 

console.log(fruits5.push('guava')); 
console.log(fruits5); 

// pop an element from array at last index. 
console.log(fruits5.pop());  
console.log(fruits5); 

// unshift() method:- Method that adds one or more elements to the beginning of an array.

console.log(fruits5.unshift("Guava"));  
console.log(fruits5); 

// shift() method :- Method that removes the first element from an array. 

console.log(fruits5.shift()); 
console.log(fruits5);  

// splice() Method :- delete and add element in any index in array.  
// deletion 
// Syntax :- splice(start, deleteCount, item1, item2, /*_, */ itemN)
fruits3 =  ['apple','orange','mango','grapes','banana'];   
console.log(fruits3.splice(1,1));
console.log(fruits3.splice(3 , 1,"pineapple"));   
console.log(fruits3);   

// Addition 
console.log(fruits3.splice(-1,0,"pineapple")); 
console.log(fruits3); 
fruits3.splice(fruits3.length,0,"grapes");
console.log(fruits3); 
fruits3.splice(3,0,"grapes");
console.log(fruits3); 



// searching in an array  
// indexof() Method : The indexOf method returns the first index at which a given element can be found 
// in the array , or -1 if it is not present.  
const numbers1 = [1,2,3,8,4,5,6,7,8,9]; 
console.log(numbers1.indexOf(4));  
console.log(numbers1.indexOf(8,5));
console.log(numbers1.indexOf(5)); 
console.log(numbers1.indexOf(4,5));  
console.log(numbers1.indexOf(8))
console.log(numbers1.lastIndexOf(8));
console.log(numbers1.lastIndexOf(3,5)); 
console.log(numbers1.indexOf(6,5));
 


// includes() Method: The includes method checks whether an array includes a certain element, returning true or false.  
console.log(numbers1.includes(6)); 
console.log(numbers1.includes(0));  

// todo challange 
// 1: Add Dec at the end of an array? 
const months = ["jan","feb","march","april","june","july"]; 
months.splice(months.length,0,"Dec"); 
console.log(months); 

// 2: What is the return value of splice method? 
// ----when used to add elements, the slice method returns an empty array([]).  

// 3: Update march to March(update)?  
const indexToUpdate = months.indexOf("march");   
months.splice(indexToUpdate,1,"March"); 
console.log(months);
 

// 4: Delete june from an array 
const indexToDelete = months.indexOf("june"); 
months.splice(indexToDelete,1); 
console.log(months); 

const number2 = [1,2,3,4,5,4,6,7,8,6,9];  

// find() method
 const results1 = number2.find((curElem)=>{  
     return curElem > 8;
 }); 
 console.log(results1);  

// findindex() method
const results2 = results.findIndex((curElem) => { 
    return curElem > 15;
   }); 
   console.log(results2);   

//  map method
const results = number2.map((curElem) => curElem * 5); 
console.log(results);   


// filter() method 

let value = 6; 
let updatedCart = number2.filter((curElem)=>{ 
    return curElem != value;
}); 
console.log(updatedCart); 

