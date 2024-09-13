// setTimeout():- The setTimeOut function is used to execude a function or code block after a specified delay in milliseconds. 
// function delayFunction(x){ 
//     console.log("This function  was delayed by 2000 milliseconds (2 seconds). ",x);
// } 

// setTimeout(delayFunction,2000);  
// setTimeout (()=> delayFunction(5),2000);

// setInterval():- The setInterval function is used to repeteadly execute a function or code block at a specified interval in millisecond. 
// function repeatedFunction(){ 
   
    // console.log("This function will be repeated after 1000 milliseconds (1 seconds).");
// } 
// setInterval(repeatedFunction,1000); 

// clearTimeout():- if you want to canceled a account timeout before it occurs, you can use the clearTimeout function.  
// the global clearTimeout method canceled a timeout previously established by calling setTimeout().  
// Syntax :- cleartimeOut(timeoutId) 

// function delayFunction(){ 
//     console.log("This function  was delayed by 3000 milliseconds (3 seconds). ");
// } 

// const work = setTimeout(delayFunction,2000); 
// clearTimeout(work);  

// clearIntervak():- if you want to cancel a scheduled interval before it ocuurs, you can use the clearInterval Function. 
// The global clearInterval() method cancle a  timeout previously extablished by calling setInterval.  

// syntax:- clearInterval(intervalId);    

// const repeatedFunction = () =>{ 
    // console.log("This function will be repeated after 1000 milliseconds (1 seconds).");
// };  
// repeatedFunction();
// const intervalId = setInterval(repeatedFunction,1000);  

// setTimeout(()=>{ 
    // clearInterval(intervalId);
// },5000);