// ECMASCRIPT FEATURES (2019) /ES10  

// List of new added features  
// Array.prototype.{flat,flatMap} 
// Object.FromEntries() 
// String.prototype{trimStart,TrimEnd} 
// Symbol.prototype.description 
// Optional Catch binding 

// Array.flat and Array.flatMap 
// flat() is a new array instance method thatcan create a one-dimentional array from multidimentional array(nested array into a  
// single,flat array.) 

// const nestedArray1 = [1,[2,[22,5]],9]; 
// const flatarray = nestedArray1.flat();   
// const flatarray1 = nestedArray1.flat(2);
// console.log(flatarray1);

// flapMap():------------ 
//  flapMap is a new array instance method that combines flat() with map(). It's useful when calling a function that 
// returns an array in the map callback, but you want your resulted array to be flat:     

// const arr = ["My name","is aanchal","singh"]; 
// const newarr = arr.flatMap((curVal)=>curVal.split(" ")); 
// console.log(newarr); 

// Object.fromEntries():----------- 
// Object have an entries method since ES2017. 
// It returns all array containing all the object own properties, as an array of [key, value] pairs. 

// ES2019 introdues a new Object. fromEntries method () , which can create a new object from such array of properties.  

// const person = {name:"vinod", age:30}; 
// const entries = Object.entries(person); 
// console.log(entries);   

// const newperson = Object.fromEntries(entries); 
// console.log(newperson);

// String.prototype.{trimStart,trimEnd}:-------------- 
// trimstart():- trimstart returns a new string with removed white space from the start of the original string. 
//console.log("      thapa".trimStart());  

// trimEnd():- trimend returns a new string with removed white space from the end of the original string. 
//console.log("       thapa       ".trimEnd());  

// Symbol.prototype.description():------------- 
// In JavaScript , a Symbol is a primitive data type introduced in ECMAScript 2015 (Es6). it represend a unique identifie 
// that is immutable and guarentee to be unique. Symbol are often used as property keys in objects to avoid naming conflict. 

// const mySymbol = Symbol("This is my symbol.") 
// console.log(mySymbol.description);  
// console.log(typeof mySymbol);   

// Optional catch binding():---------- 
// In ECMAScript 2019 (ES10), a new feature called "optional catch binding." was introduced for the try... catch statement. 
// This features allow you to omit the parameter in the catch block making it optional.  

// we previously had to do. 

try{ 

} 
catch (e){ 

} 

// Now we can omit thet optional parameter. 

try{ 
thapa + 5
} 
catch{ 
console.log("There is an error.");

}





