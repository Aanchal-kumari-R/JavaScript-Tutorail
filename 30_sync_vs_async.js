// synchronization code executed line by line, blocking further execution until each line is completed, while asynchronous  
// code  allow other code to continue executing while it waits for an asynchronous operation to complete.  

// SYNCHRONOUS
// const func2 = () =>{ 
//     console.log("func2 is started and end.");
// }  

// const func1 = () =>{ 
//     console.log("func1 is started.");
//     func2(); 
//     console.log("func1 is end.");
// }  

// func1();   

// ASYNCHRONOUS    

func2 =() =>{   
    setTimeout(() =>{
    console.log("func2 is started and end.")  
},2000);
}

const func1= () =>{ 
console.log("func1 is started.") 
func2(); 
console.log("func1 is end.");

} 

func1();