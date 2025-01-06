/* Scope: 
Scope in a JavaScript refers to the context in which variables are declared and accessed. It defines the visibility and lifetime  
of variables. When a variable is declared , it is bound to a specific scope, and its accesibility is determined by that scope.
*/ 

/* Lexical Scoping: 
Lexical Scoping is a way of managing variable access in JavaScript based on the physical structure of the code. 
* Key Concept: The scope of a variable is determined by its positions in the source code, specially where it is declared.
Lexical Scoping in JavaScript is like a set of rules that determines where a variable can be used in your code.It follow the 
physical struture of your code, so if a variable is declared inside a function or block , it can usually be used only within  
that function or block.  */

/* SCOPE CHAINING 
Scope chaining is the process by which javascript , when looking for the value of a variable, checks the current scope and 
then looks in the outer (enclosing) scopes until it find the variable or reaches the global scope. 
*/

/* GLOBAL VS LOCAL VARIABLE 
GLOBAL VARIABLE:- A vaiable declared in the global scope is refered to as a global variable.It has global visibility and can be 
accessed from the anywhere in the code. 

LOCAL VARIABLE:- A variable declared within a function (function scope) or a block (block scope) is often referred to as a 
local variable.It has local visibility , limited to the function or block where it's declared. 
*/ 

const globalVariable = "I am a global variable."; 

function myfunction(){  

    const functionVariable = "I am a function variable."; 

    if(true){  
        const blockVariable = "I am a block Variable.";
        console.log(blockVariable);
        console.log(functionVariable);
        console.log(globalVariable);
    } 
    // console.log(blockVariable);
   
}  

myfunction();  



