name = "aanchal singh"; 
console.log(name);
console.log(name.length);  
// Escape character 
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
// indexof  
console.log(name1.indexOf("A")); 
console.log(name1.indexOf("Goldi"));

let strArr = Array.from(name1);  
console.log(strArr)    

let strMap = strArr.map((curElem,index)=>`${curElem} - ${index}`); 
console.log(strMap); 

//lastindexof() 
let = str1 = "Hello i am aanchal, i love my name aanchal"; 
const lastindexof = str1.lastIndexOf("i",20); 
console.log(lastindexof);   

// Search() method:-   
// let search_index = str1.search("aanchal");
//  let search_index = str1.search(/aanchal/);
// let search_index = str1.search(/aanchal/i);
let search_index = str1.search(/aanchal/g);
console.log(search_index);     

// match():-  

// let match_result = str1.match("Aanchal");
//let match_result = str1.match("aanchal");
// let match_result = str1.match(/aanchal/g);
let match_result = str1.match(/aanchal/gi);
console.log(match_result);

// matchall() method:- 
let match_all = str1.matchAll("aanchal"); 
//console.log(...match_all);  

for (let item of match_all){ 
    console.log(item[0]);
}  

// includes() method:-   
// let includes_result = str1.includes("aanchal");  
let includes_result = str1.includes("a"); 
console.log(includes_result);

// endwith() :- 
let end_reuslt = str1.endsWith("aanchal"); 
console.log(end_reuslt);  

// startwith():- 
let start_result = str1.startsWith("Hello"); 
console.log(start_result); 

// Extracting String Parts:-  
let str_str = "Welcome , This is javaScript course, i love this javaScript course."
// slice() method :- 
//  let slice_result = str_str.slice(6);  
 let slice_result = str_str.slice(10,36);
console.log(slice_result);   

// substring() method:- 
// let sub_string = str_str.substring(6);
let sub_string = str_str.substring(-6);
console.log(sub_string); 
 
// at() 
let at_result = str_str.at(-6); 
console.log(at_result); 

// Replace():- 
// let replace_result = str_str.replace("javaScript","Python");
let replace_result = str_str.replaceAll("javaScript","Python");
console.log(replace_result);  

// Extracting String Character 
// charAt():- 
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


