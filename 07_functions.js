// FUNCTION IN JAVASCRIPT 
//A function is a block of reusable code that perform a specific task.Functions are used to organize code into modular and  
// manageble pieces, promote code reuse, and make code are more readable. 

function add(a , b){ 
    return a+b;
} 
console.log(add(5,1))
console.log(add(5,5))
console.log(add(5,51))  

// FUNCTION DECLARATION 
//Declare a function using the function keyword, followed by the function name, parameters(if any required), and the function body.
//This step defines the function and specified what code should be executed when the function is called.

function sum(){ 
    a = 5; 
    b = 9; 
    console.log(a+b);
}  
sum();
sum();  
// FUNCTION INVOCATION(CALLING A FUNCTION) 
// After declaring a function , you can invoke or call it by using its name followed by paranthesis. 
// if the function has parameters, provide values (arguments) for those parameter inside the paranthesis. 
// Question solved 

function greet(name){ 
    console.log("Hello " + name + " , Welcome to JavaScript course.");
} 

greet("Ram") 
greet("Shyam") 
greet("Janki") 
greet("Radha")   

// Function expression :- A function expression is a way to degine a function as part of an expression. It can 
// be either named or anonymous. If it's name , it become a named function experession. 

var result = function add(a,b){ 
    console.log(a+b);
}; 
result(23,43); 

// Anonymous function :- An anonymous function is a function withour a name. It can be created using a function 
// declaration and function expression without a specified name.

var result = function (a , b){ 
    console.log(a-b);
}; 

result(23,21)    

// Immediately involked function expression (IIfE) :- An IIFE is a javaScript function that is defined and execute  
// immediately after it's creation. It is a way to create a self-contained block of code that does not interfere with  
// the surrounding code and execute immediately. 

let result1 = (function(a,b){ 
    console.log(a+b); 
    return a+b;
})(0,0)





// Question solved of calculator  

function calculator(a, b, operator){ 
    let result; 
    switch(operator) {
    case "+": 
     return  result =  a + b; 
        break;  
    case '-': 
    return  result =  a - b; 
      break;  
    case '*' :
    return result =  a * b;    
       break; 
    case '/': 
    if (b === 0){ 
        return "0 is not allowed.";
    }  
    else{
   return result =  a / b;
       break;  
    }
    
       default: 
       return 'no operator found'; 


    }
} 
console.log(calculator(5,2, '+'))
console.log(calculator(5,2, '-'))
console.log(calculator(5,2, '*'))
console.log(calculator(5,0, '/'))
console.log(calculator(5,2, '')) 

// question solved  of reverse string
const isReverse = (str) =>{ 
    let reverse = ""; 
    for(let char = str.length-1; char >= 0; char--) { 

    reverse = reverse + str[char]; 
    } 
    return reverse;
}; 
console.log(isReverse("Aanchal Singh")); 

// question solved  of palindrome string 

const isPalindrone  = (str) =>{ 
    let reverse = ""; 
    for(let char = str.length-1; char>=0; char--){ 
        reverse = reverse + str[char];
    } 

    return str === reverse ? true :false;
}; 

console.log(isPalindrone("level"));