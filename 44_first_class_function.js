// First Class Function -- It's just a concept 
// A language feature where function are treated as first class citizens. 
// Function can be assigned to a variables , passed as arguments to other functions, and returned from other functions. 
// A 'first-class-function' means that functions can be treated as values, assigned to variables, and passed around as arguments. 

function sayHello(name){ 
    return "hell0 , " + name +"!";
} 

var greetFuntion = sayHello; 

console.log(greetFuntion("Thapa")); 

// Higher Order Function 
// Definition: A Higher Order Function is a function that takes one or more functions as arguments or returns a function as 
// a result. 

// Callback Function 
// Definition: A Callback Function is a function passed as an arguments to another function executed after the completion 
// of a task. 

function processUserInput(name,greetUser){ 
    console.log("Received Input :" + name); 
    greetUser(name);
} 

function greetUser(name){ 
    console.log(`hello ${name}`);
} 

processUserInput("Aanchal",greetUser); 

// processUserInput is a higher-order function because it takes another function (callback) as an arguments. 
// greetUser is a callback function because it's passed as an argument to processUserInput and gets executed after the completion 
// of the main task. 
 