// List of new useful features added in ES9. 
// Rest/Spread properties 
// Promise.prototype.finally() 

// Rest/Spread Operator 
// ES6 introduced the concept of a rest element when working with array destructuring. 
// ES2018: introduces the same but for properties. 


// object and rest operator 

// const student ={ 
//     age:20, 
//     name:"AANCHAL", 
//     isStudent : true,
// }  

// const {age , ...identity} = student; 
// console.log(identity);  

// Object and Spread operator  

const obj1 = {a:20,e:10,g:12,d:15}; 
const obj2 = {a:24,b:32,c:56,d:12}; 
const mynewobj = {...obj1 , ...obj2}; 
console.log(mynewobj);