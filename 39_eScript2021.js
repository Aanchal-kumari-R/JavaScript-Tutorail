// ECMASCRIPT FEATURES (2021) / (ES12)  

// LIST OF NEW USEFUL FEATURES ADDED IN ES12 
// 1 String.prototype.replaceAll() 
// 2 Logical Assignment Operators  
// 3 Numeric Separotors 
// Promise.any()  

// 1 String.prototype.replaceAll()----------------- 
// replaceAll in javascript is a function that replaces all occurence of a specified value with another value in a given string. 

// Replacing all occurence of a word.
// const ostring = "Hello World , Hello again."; 
// const nstring = ostring.replaceAll("Hello","hii"); 
// console.log(nstring);


// Replacing multiple spaces with a single space 
// const text = "This   has a   mult      iple  spa     ces."; 
// const normalizedtest = text.replaceAll(/\s+/g," "); 
// console.log(normalizedtest);

// 2 Logical Assignment Operators (||=, $$=, ??=)    

// Logical Or-Assignment Operator(||=):- This operator assigns the value of its right-hand operand to its left-hand operand  
// if the left hand operand evaluates to a falsy value (false,null,undefined,0,'',NaN). Otherwise, it leaves the left-hand 
// operand unchanged. 

// let x = false; 
// x = x || true; 
// console.log(x);   k

// let y = 10; 
// y ||= 20; 
// console.log(y);   

// Logical And-Assignment Operator(&&=):------------------ 
// This operator assign the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a 
// truthly value. Otherwise , it leaves the left-hand operand unchanged. 

// let y = 10; 
// y &&= 20; 
// console.log(y);   
 
// 3 Numeric Separotors():------------ 
// This features allows underscores (_) to be used as seprators within numeric literals to improve readability. 

// const big_number =  1_000_000; 
// console.log(big_number);


// Promise.any():----------------- 
// Promise.any() method takes an iterable of Promise objects and returns a single Promise that resolves as soon as any of the  
// input Promises fulfill. 
