// DEFAULT PARAMETER
// In EcmaScript 6 (ES6) :- default parameter introduced, providing a more concise way to handle function parameter defaults. Default 
// parameter allows us to specify default value for function parameter in the function declaration itself. If a parameter is not  
//  not provided when the function is called , the default value id used. 

//  Default function parameters allow named parameter to be initialized with default values if no value or undefined is passed. 

// function sum(a = 20 , b = 10){ 
//     return(a+b);
// } 
// console.log(sum());
// console.log(sum(10,10));
// console.log(sum(10));  
 
// Traditional Function
// const sum1 = function (a,b){ 
//     let result = `The sum of ${a} and ${b} is ${a+b}.`; 
//     console.log(result)
// }; 
// sum1(19,39); 
// FAT ARROW Functions : In EcmaScript 6 (ES6) , arrow function also known as fat arrow functions , were introduced as a concise way 
// to write anonymous functions. 

// const sum2 = (a,b) =>{ 
//     let result = `The sum of ${a} and ${b} is ${a+b}.`; 
//     console.log(result);
// }; 
// sum2(20,30); 

// const sum3 = (a,b) =>console.log(`The sum of ${a} and ${b} is ${a+b}.`); 
// sum3(20,30);   

// let square = a => `The square of ${a} is ${a*a}.`; 
// console.log(square(4));   


// Object Properties:- Modern JavaScript
// const name="Aanchal"; 
// const age = 30 
// traditional way in dictionary 
// let obj = {name:name,oge:age}; 
// console.log(obj);

// using shorthand notation for object properties if object key and value name is same.
// let myobj = {name,age}; 
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