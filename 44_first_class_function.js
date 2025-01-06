// First Class Function -- It's just a concept 
// A language feature where function are treated as first class citizens. 
// Function can be assigned to a variables , passed as arguments to other functions, and returned from other functions. 
// A 'first-class-function' means that functions can be treated as values, assigned to variables, and passed around as arguments. 

function sayHello(name){ 
    return "hell0 , " + name +"!";
} 

var greetFuntion = sayHello; 

console.log(greetFuntion("Thapa")); 

 