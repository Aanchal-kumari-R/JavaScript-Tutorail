// OBJECTS:- Objects is a collection of key-values pairs, where each key is string (or a symbol) and  
// value can be any data type, including other objects.  

// CREATING OBJECTS :- There are several way to create objects in JavaScript. The most common one is using objects literals. 
// let person = { 
//     name:"vinod", 
//     age:30, 
//     "is'Student":false, 
//     greet: function(){ 
//         console.log("Welcome to world best css course.");
//     } , 
// }; 

// ACCESSING PROPERTIES:- You can access properties using dot notation or square bracket notation. 

// console.log(person);  
// console.log(person.name); 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person[`is'Student`]); 
// console.log(person["is'Student"]); 
// person.greet();


// ADDING AND MODIFYING PROPERTIES:- you can add new properties or modifying existing ones: 
// person.age = 18 
// person.job = 'Web development'; 
// console.log(person); 
// person["age"]=20 
// console.log(person);  

// METHODS:- Methods in objects are functions associated with the object. They can be invoked using the same notation as properties: 
// person.greet();  

// We can add dynamic keys in an object    

// let idType = "studentId";
// let student = { 
//     [idType]:"A123456", 
//     sAge : 20, 
//     sName : "Aanchal", 
//     greet: function(){    
        // console.log(`My ${idType} is ${student[idType]} and name is ${student.sName}.`);
//     } ,
// }; 
// student.greet();  

// usecase :- when we want to get the user name and value in react.     

// Data Modeling:-  Data modeling is the process of crating a vitual representation of either a whole information system or parts  
// of it to communicate connections between data points and structures  

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user , or a product as an 
// object with properties like color, brand,username etc.  

// let car = { 
//     brand : "Toyota", 
//     model : "Camry", 
//     year :2022, 
//     start:function(){ 
        // console.log("Engine Started!")
//     },
// }

// Explain the difference between passing object by reference and by value in JavaScript with example. 

// Sol:- In javaScript, primitive datatype like numbers and strings are passed by value, while objects are passed by reference. 

// PASSING BY VALUE:- when passing by value , a copy of the primitive value is created and passed to the function or assingned to a 
// variable. Any changes made to the copy do not affect the original value. 


// let a = 10; 
// const ModifyValue = (x) =>(x=20); 
// console.log(ModifyValue(a)); 
// console.log(a);
 
// PASSING BY REFERENCE:- When passing by reference ,  a reference to the memory location of the object is passed to the function
// or assigned to a variable. Any changes made to the object through this referene will affect the original affect/ 

// let obj = {id:5,name:"Kodyfier"}; 
// let obj1 = obj;
// console.log(obj1); 
// obj1.name='Thapa Technical'; 
// console.log(obj1); 
// console.log("original",obj);  


// console.log(obj.name);  
// here original data is changed 
// to avoid this behavior and create a true copy of the objects , you can use the method like Object.assign() or the separate  
// operator(...); 

// Object.assign() :- this is used to copy properties from one or more source objects to a target object. 

// let obj = {id:5,name:"Aanchal"}; 
// let newobj = Object.assign({},obj);  
// newobj.name = "Goldi";
// console.log(newobj); 
// console.log("original",obj);

// let obj = {id:5, name :"Aanchal"}; 
// let obj1 = {}; 
// newobj = Object.assign(obj1,obj);  
// newobj.name = "Goldi";
// console.log(newobj); 
// console.log(obj); 

// COMPARISON BY REFERENCE   

//Two objects are equal only if they refer to the same object. 
// Independent objects (even if they look alike) are not equal. 

// const obj1 = {name:"Aanchal"}; 
// const obj2 = {name:"Goldi"}; 
// const obj3 = obj1;   

// const isEqual = obj1 == obj2 ? true :false; 
// console.log(isEqual); 

// const isEqual2 = obj1 == obj3 ? true : false; 
// console.log(isEqual2);
