// String:- String in javaScript are a fundamental data type that represents a sequence of characters.
// String are created with single or double quotes works tha same.
name = "aanchal singh"; 
console.log(name);
console.log(name.length); // length of character  

// Escape character : In JavaScript , the backslash \ is used as an escape character. It allows us to  include special  
// character in a string.

// \' (single quote)
const str = "Aanchal\'s Book"; 
console.log(str); 

// \" (double qoute)
 let str1 = 'my name is \"Aanchal Book\" and i am "full stack developer."'; 
 const str2 = 'my name is "Aanchal Book." '; 
console.log(str1);
console.log(str2); 

// \\ (backslash) 

let name1 = "My name is Aanchal\\Goldi Singh."; 
console.log(name1); 

// String Search Method   

// indexof() :-  The index of method returns the index (position) of the first occurence of a string in a string, 
//  or its returns -1 if the string is not found. 

console.log(name1.indexOf("A")); 
console.log(name1.indexOf("Goldi"));

let strArr = Array.from(name1);  
console.log(strArr)    

let strMap = strArr.map((curElem,index)=>`${curElem} - ${index}`); 
console.log(strMap); 

//lastindexof() :- The lastIndexOf() returns the index of the last occurence of a specified text in a string. 
let = str1 = "Hello i am aanchal, i love my name aanchal"; 
const lastindexof = str1.lastIndexOf("i",20); 
console.log(lastindexof);   

// Search() method:- The search method searches a string for a string (or a regular expression) and returns 
//  the positions of the match. if the position is not matched its returns the -1. The search method cannot take 
// second start position arguments. 
// let search_index = str1.search("aanchal");
//  let search_index = str1.search(/aanchal/);
// let search_index = str1.search(/aanchal/i);
let search_index = str1.search(/aanchal/g);
console.log(search_index);     

// match():-  Returns an array of the matched values or null if no match is found.

// let match_result = str1.match("Aanchal");
//let match_result = str1.match("aanchal");
// let match_result = str1.match(/aanchal/g);
let match_result = str1.match(/aanchal/gi);
console.log(match_result);

// matchAll() method:- Returns an iterator of all matches , providing detailed information
// about each match. Returns an empty iterator if no match is found.
let match_all = str1.matchAll("aanchal"); 
//console.log(...match_all);  

for (let item of match_all){ 
    console.log(item[0]);
}  

// includes() method:- Returns true if the string contains the specified value , and false otherwise.  
// Note :- include() is case sensitive. includes() is an ES6 features.
// let includes_result = str1.includes("aanchal");  
let includes_result = str1.includes("a"); 
console.log(includes_result);

// endsWith() :- The endsWith() method returns true if a string end with a specified value. Otherwise it returns false.
let end_reuslt = str1.endsWith("aanchal"); 
console.log(end_reuslt);  

// startwith():- The startWith() method returns true if a string begins with a specified value. Otherwise it returns false. 
let start_result = str1.startsWith("Hello"); 
console.log(start_result); 

// Extracting String Parts:-  
let str_str = "Welcome , This is javaScript course, i love this javaScript course."

// slice() method :- slice() extract a part of a string and returns the extracted part in a new string. 
// 1):- JavaScript counts positions from zero. 
// 2):- slice() extract up to but not including indexEnd. 
//  let slice_result = str_str.slice(6);  
 let slice_result = str_str.slice(10,36);
console.log(slice_result);   

// substring() method:- Extracts a portion of the string based on starting and ending indices. 
// let sub_string = str_str.substring(6);
let sub_string = str_str.substring(-6);
console.log(sub_string); 
 
// at() :- The at() method returns the character at a specified index (position) in a string.
// It allows the use of negative indexes while charAt() do not.
let at_result = str_str.at(-6); 
console.log(at_result); 

// ReplaceAll():- The replaceAll() method is used to replace a specified value with another value.   
// let replace_result = str_str.replace("javaScript","Python");
let replace_result = str_str.replaceAll("javaScript","Python");
console.log(replace_result);  

// Extracting String Character 
// charAt():- The charAt() method returns the character at a specified index (position) in a string.
// let char_result = str_str.charAt(4); 
let char_result = str_str.charCodeAt(4); 
console.log(char_result); 

// Other Useful Method():-  
// toUpperCase():- 
let to_uppercase = str_str.toUpperCase(); 
console.log(to_uppercase); 

// to lower_case():- 
let to_lowercase = str_str.toLowerCase(); 
console.log(to_lowercase); 


