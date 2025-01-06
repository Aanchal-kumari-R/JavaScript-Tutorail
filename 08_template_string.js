let firstName = "Aanchal " 
let lastName = "Singh" 

let fullName = firstName + lastName; 
console.log(fullName);  

// Template String :- In ECMAScript 6 (ES6) template string also known as string literals , provide a convenient and flexible way  
// to create string in javaScript. Template strings are enclosed in  backticks (``) rather than single or double quotes. 

let firstName1 = "Janki"; 
let lastName1 = "Singh";  

let fullName1 = `${firstName1}  ${lastName1}`; 
console.log(fullName1); 

// String Interpolation:- Template string supports string interpolation, allowing us to embed expressions directly within the string. 
// Interpolated  expression are inclosed in ${}.
 
let age = 23; 
let message = `I am ${age} years old.`; 
console.log(message) ; 

// Multiline String :- Template strings make it easy to create multi-line strings without the need for concatenation or escape  
// characters.  
let multilineString = `
This is a milti-line  
string using template 
string.`;  

console.log(multilineString); 

// Advantages:-  
// Readability:- Template strings make the code more readable , especially for complex string constructions. 
// conciseness:- They eleminate the need for explicit string concatenation and reduce the use of escape. 
 
 let num = 5; 
console.log(`5 * ${num} = ${5*num}`); 
