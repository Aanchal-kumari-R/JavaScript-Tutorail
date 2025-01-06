// ECMASCRIPT FEATURES 2020 / (E11) 
// List of new features added in ES11 
// BigInt 
// Nullish Coalescing Operator. 
// Optional chaining operator 
// promise.allSettled 

// Bigint()------------ 
// Bigint in javaScript is a data type used to represent and perform operations on large integers that exceed the limits of 
// regular numbers. 

// Creating Bigint  
// Using the 'n' suffix: 

// const anotherLargeNumber = BigInt("1234567890123456789012345678901234567890"); 
// console.log((anotherLargeNumber));    

// const maxNumber = Number.MAX_SAFE_INTEGER; 
// console.log(maxNumber); 
// console.log(maxNumber + 5); 
// let maxNumber1 = BigInt(maxNumber);
// let num = maxNumber1 + 10n; 
// console.log(num);  

// Nullish Coalescing Operator (??)----------  
//? Nullish coalescing operator (??) is a logical operator the provides a concise way to handle nullish  (null or undefined) values. 
//  It returns its right-hand operand when its left-hand operand is null or undefined , otherwise, it returns the left-hand operand. 

// let favNum = 0; 
// let userFavNum = favNum ?? 10; 
// console.log(userFavNum);  

// Optional Chaining Operator (?.):-------------  
// It provides a concise way to access properties of an object without worrying about the existance of intermediate properties.  
// It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.  

// const person = { 
//     name:"john", 
//     address:{ 
//         city:"New York", 
//         Zipcode : 12345
//     },
// }; 

// Accessing nested properties without optional chaining.
// const city = person.address ? person.address.city :"city is not present."; 
// console.log(city); 

// with optional chaining 
// let city = person.address ?. city ?? "city is not present"; 
// console.log(city);   

// const person = { 
//     name :"john",  
//     address : {  
//         city: "New York", 
//         zipcode : 12345, 
//         corordinates :{ 
//             latitute: 48.2323, 
//             longitute : 23.8930,
//         },
//     },
// }; 

// const latitute = person.address ?.corordinates?.latitute ?? "Unknown"; 
// console.log(latitute);  

// Promise.allSetlled()--------- 
// we will cover later
