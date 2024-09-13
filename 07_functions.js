function add(a , b){ 
    return a+b;
} 
console.log(add(5,1))
console.log(add(5,5))
console.log(add(5,51))  

function sum(){ 
    a = 5; 
    b = 9; 
    console.log(a+b);
}  
sum();
sum();  

// Question solved 

function greet(name){ 
    console.log("Hello " + name + " , Welcome to JavaScript course.");
} 

greet("Ram") 
greet("Shyam") 
greet("Janki") 
greet("Radha")   

// Function expression 

var result = function add(a,b){ 
    console.log(a+b);
}; 
result(23,43); 

// Anonymous function 

var result = function (a , b){ 
    console.log(a-b);
}; 

result(23,21)    

// Immediately involked function expression 

let result1 = (function(a,b){ 
    console.log(a+b); 
    return a+b;
})(0,0)


// Default Arguments 

function sum(a = 20 , b = 10){ 
    return(a+b);
} 
console.log(sum());
console.log(sum(10,10));
console.log(sum(10));  


// Traditional function
const sum1 = function (a,b){ 
    let result = `The sum of ${a} and ${b} is ${a+b}.`; 
    console.log(result)
}; 
sum1(19,39); 

// Arrow function
const sum2 = (a,b) =>{ 
    let result = `The sum of ${a} and ${b} is ${a+b}.`; 
    console.log(result);
}; 
sum2(20,30); 

const sum3 = (a,b) =>console.log(`The sum of ${a} and ${b} is ${a+b}.`); 
sum3(20,30);   

let square = a => `The square of ${a} is ${a*a}.`; 
console.log(square(4));  

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