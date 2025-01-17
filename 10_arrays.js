// Array:- In javaScript , an array is an object that represents a collection of similar type of element.
let arr = [1,2,3]; 
console.log(typeof arr); 

let arr1 = {}; 
console.log(typeof arr1);  

// Array creating through constructor

let fruits = new Array("Apple","Banana","Cherry");   
console.log(fruits); 

// Array creating through Array literals
let fruits1 = ["Apple","Banana","Cherry"]; 
console.log(fruits1);  

// Access Array elements  

console.log(fruits[0]); 
console.log(fruits[1]); 
console.log(fruits[3]);  

// Modify Array elements  

fruits[0] = "Mango";  
console.log(fruits);  

// Array Traversal / Iterating Over Arrays 
// for of loop:- The for of loop is used to iterate over the value of an iterable object , such as array , strings or 
// other iterable object. 

console.log("for of loop");
let fruits2 = ["Apple","Banana","Cherry","Mango","Cherry","Guava"]; 
for(let item of fruits2){ 
console.log(item);
}   

console.log("for loop");
for(let item = 0; item<=fruits2.length; item++){ 
    console.log(fruits2[item]);
} 
// for in loop:-  for in loop is used to iterate over the properties (including indices) of an object.
console.log("for in loop");
for(let item in fruits2){ 
    console.log(item);
}  

// for each loop :- The arr.foreach() method calls the provided functions one for each element of the array. 
// The provided function may perform any kind of operation on the elements of the given array.   

fruits2.forEach((curElem,index,arr)=>{  
console.log(`${curElem},${index}`); 
console.log(arr);  
});   

//  in foreach , this is not return any value
const forEachArr = fruits2.forEach((curElem,index,arr)=>{ 
    return (`${curElem},${index}`); 
    });    

    console.log(forEachArr);
    
    

// map function 

fruits2.map((curElem,index,arr)=>{ 
console.log(`${curElem},${index}`); 
console.log(arr);
});

// map return the value
const myMapArr = fruits2.map((curElem,index,arr)=>{ 
   return ` my favourite fruit is ${curElem},${index}`; 
});   
console.log(myMapArr);
    
// todo practice  time 
// write a programm to multiply each element with 2  
// foreach loop
 const numbers = [1,2,3,4,5]; 
 numbers.forEach((curElem)=>{ 
console.log(curElem*2);
 });

//  map
 const number = [1,2,3,4,5]; 
 const doubleValue = number.map((curElem)=>{ 
 return (curElem*2);
 }); 
 console.log(doubleValue); 

