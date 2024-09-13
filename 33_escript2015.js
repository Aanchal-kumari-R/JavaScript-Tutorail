// const name  = "aanchal." 
// const age = 23; 

// traditional way in dictionary
// const obj = {name:name,age:age} 
// using shorthand notation for object properties
// const myobj={name,age};  
// console.log(myobj);  

// DESTRUCTURING :- Destructuring is a javaScript expression that makes it possible to unpacks values from arrays, or properties 
// from objects ,into distinct variables. That is , we can extract data from array and object and assign them to variables. 

// const numbers = [10,20,30,40]  
//  Trandition way 
// const first = numbers[0]   
// Destructing 
// const [first,second,third,fourth] = numbers
// console.log(second);  

// ignoring element:-  
// const [, , third] = numbers; 
// console.log(third);  
 
// INTERVIEW QUESTION:- Swap two numbers without using third variable  

// let a = 10; 
// let b = 20; 
 
// [a,b] = [b,a]; 
// console.log(a,b);   

// DESTRUCTURING OBJECT:-  
//  const user = {name:"Aanchal",age:30}; 
// Traditional way 
// const myname = user.name; 
// console.log(myname);  

//destructuring way :- 
// const {name,age} = user; 
// console.log(name); 
// console.log(age);  

// RENAMING PROPERTIES 
// const {name:myname,age} = user; 
// console.log(age,myname);

// SPREAD OPERATOR - Modern JavaScript 
// javaScript ES6  introduce the spread operator. The syntax is (...) three dots followed by the array.(or literals.) 
// const fruits = ['apple','banana','mango','cherry']; 
// const myfruits = [...fruits] 
// console.log(myfruits);
 
// concatenation   
// const number1 = [1,2,3,4,5]; 
// const number2 = [6,7,8,9,10]; 
// const mynumbers = [...number1, ...number2]; 
// console.log(mynumbers);  

// adding element to existing array 
// const fruits = ['apple','banana','cherry','mango'];  
// traditional way 
// fruits.push("litchi");
// using spread operator   
// fruits.push(...['guava','litchi']); 
// console.log(fruits);   

// one more Usecase
// in javaScript , when you spred a string using the spread syntax (...) , it converts the string into an array of its indivitual 
// concept. 

// const country = "INDIA";  
// traditional way
// console.log(country.split(""));
// using spread operator 
// console.log([...country]);  

// REST PARAMETER :- 
// The rest paramenter syntax allow a function to accept an indefinite number of argument as an array providing a more flexible 
// way to work with functions that can accept varying number of arguments. 

// const sum = (...number)=>{ 
//     return number.reduce((accum,curValue)=> 
//     (accum = accum+curValue),0);
// } 
// console.log(sum(23,12,32,21,44,43,45,56,65));  

// NOTE:- A function definition can have one rest parameter, and the rest paremeter must be the last parameter in the function 
// definition. 

// function wrong1(...number, ...wrong) 
// function wrong2(...number,arg1,arg2,arg3)  

// const sum = (p1,p2,...number) =>{ 
//     return number.reduce((accum,curValue)=> 
//     (accum = accum+curValue),0);
// } 
// console.log(sum(1,2,3,4,5));