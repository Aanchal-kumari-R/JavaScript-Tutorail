
// "this" OBJECT :------------------------------

// In JavaScript , the this keyword refers to an object. 

// which object depends on how this is being invoked (used or called). 
// the this keyword refers to different objects depending on how it is used. 

// In an object method, this refers to the object. 
// Alone, this refers to the global object.
// In a function, this refers to the global object.  
// In a function , in strict mode,this is undefined
// In an event , this refers to the element that receive the event.  
// Methods like call(), apply(), and bind() can refer this to any object.  



// In a function, this refers to the global object. 
// Alone, this refers to the global object.
// function callme(){ 
//     console.log(this);
// } 
// callme();    

// In a function , in strict mode,this is undefined 

// ("use strict"); 

// x = 5 
// console.log(x);


// In an object method, this refers to the object. 

// const obj={ 
//         name:'Kodyfier', 
//         greet:function(){ 
//                 console.log(this);
//         } ,

// }; 

// obj.greet(); 

// Method shorthand syntax:- It is a more concise way to define methods in object literals. 

// const obj = { 
//         name:"Kodyfier", 
//         greet(){ 
//                 console.log(this);
                
//         },
// }; 

// obj.greet();

// fat arrow function refers to the window object. 
// fat arrow unction 
// const obj = { 
//         name:"Thapa Technical", 
//         greet: () => { 
//                 console.log(this);
//         },
// }; 

// obj.greet(); 

// OBJECTS USEFUL METHODS:-
const product = { 
    id :  1,  
    name:"Laptop", 
    category:"Computers", 
    brand:"ExampleBrand",  
    price :999.99, 
    stock:50, 
    descriptions :"Powerful laptop with a quad-code is processor,8gb ram 256gb ssd , and a 14 inch fhd display.", 
    image:"image link will be added during projects." 

}; 

// (1) Object.keys():- Returns an array containing the names of all enumerable own properties of an object. 
// let keys = Object.keys(product); 
// console.log(keys);  

// (2) Object.values():- Returns an array containing the values of all enumerable own properties of an object.  
// let values = Object.values(product); 
// console.log(values);

// (3) Object.entries():- Returns an array containing array of key-value pairs for each  enumerable own properties of an object.  
// let entries = Object.entries(product); 
// console.log(entries); 

// (4) Object.hasOwnProperty():- Returns a boolean indicating whether the object has the specified property as an own property. 
// console.log(product.hasOwnProperty('name')); 
// console.log(product.hasOwnProperty('age'));  

// (5) Object.assign():- Copies the values of all enumerable own properties from one or more source objects to a target object. 
// const target = {a:1,b:2}; 
// const source = {b:3,c:4}; 
// const mergedObject = Object.assign(target,source); 
// console.log(mergedObject);

// (6) Object.freeze():- Freezes an object , preventing new properties from being added to it and existing properties from being
// modified or deleted.  
// Object.freeze(product); 
// product.id = '787'; 
// console.log(product);