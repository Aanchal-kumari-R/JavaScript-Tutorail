// CLOSURE 
// A closure is created when an inner function has access to the variables of the outer function ,even after the outer function 
// has finished executing. 

function outerfunction() {  
    var outerVariable = "I am outer variable." // after returnnig outerfunction to innerfunction here outerfunction context is finish
                                               // but in heap outervariable is stored. so innerfunation can take. 
   
    function innerfunction(){ 
         console.log(outerVariable);
    }  

    return innerfunction;
} 

var closureFunction = outerfunction();
closureFunction();  


