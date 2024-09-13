// CALLBACK HELL 
// Callback hell , also known as the Pyramid of Dom , refers to a situation in asynchronous JavaScript programming where multiple 
// nested callbacks are used to handle asynchronous operations. This often result in code that is difficult to read , understand 
// and maintain due to its deeply nested structure. 

const getStudentData = () =>{ 
setTimeout(()=>{ 
    console.log("I am aanchal.");  
    setTimeout(()=>{ 
    console.log("I am 21 years old."); 
    setTimeout(()=>{ 
    console.log("i am from bihar."); 
    setTimeout(()=>{ 
    console.log("I am very good girl."); 
    setTimeout(()=>{ 
    console.log("What is your name?"); 
    setTimeout(()=>{ 
    console.log("Where are you from?");
    },1000);
    },1000);
    },1000);
    },1000);
    },1000);
    },1000); 
} 

getStudentData();