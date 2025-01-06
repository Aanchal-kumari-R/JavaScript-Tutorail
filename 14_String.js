// trim() method :-Remove whitespace from both ends of the string.
str = " Hello World!  "; 
console.log(str.length); 
let trim_result = str.trim(); 
console.log(trim_result); 
console.log(trim_result.length);  

// split() method :- 
let fruits = "apple, banana, cherry"; 
// console.log(fruits.split(""));  
console.log(fruits.split("").join());  
// console.log(fruits.split(",").reverse());  

// interview question 

// 1 :- Write a javaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the  
// letters and print each one on a new line.   
for(let char = 97; char<=122; char++){ 
    console.log(String.fromCharCode(char));
}

// 2 :- write a function to count the number of vowels in a string   
const countVowels = (str) => { 
    const vowels1 = 'aeiou';  
    let count = 0;
     for(let char of str){ 
    //  for(let char of vowels1){ 
        if(vowels1.includes(char)){ 
            count++;
        }
    } 
    return count;
}; 
console.log(countVowels("Hello i am aanchal and how are you ?"))

// 3 :- write a function to check if all the vowel elements in a string or not?  
// 1st way :-
 let str1 = "My name is Aanchal."; 
 console.log(str1.includes('a'));  
 
//  2nd way :- 
const checkAllVowelPresentOrNot = (str) =>{ 
    const vowels = 'aeiou';  
    for(let char of vowels){
//   console.log(str.includes(char));  
      if(!str.includes(char)){ 
        return false;
      }
    } 
    return true;
}; 
console.log(checkAllVowelPresentOrNot("My name is Aanchal.")) 

// 4 :- write a javaScript function to check if the given string is pangram or not ? 
const checkPangram = (str) =>{ 
    const pangram = 'abcdefghijklmnopqrstuvwxyz'; 
    for(let char of pangram){ 
        // console.log(str.includes(pangram)); 
        if(str.includes(char)){ 
            return false;
        }
    } 
    return true;
}; 
console.log(checkPangram("my name is aanchal."));

