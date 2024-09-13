// PROMISE  
// A promise is like a placeholder for the result of an asynchronous operations.
// A promise in JavaScript is an object that represents the eventual copletion or failure of an asynchronous operation. It allows 
// you tu handle aynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks  
// asynchronous.   

// It can be one of three states.

// PENDING   :- Initial state, neither fulfilled nor rejected. 

// FULLFILLED(Resolved) :- The operation completed successfully. 

// REJECTED :- The operation failed or encountered an error.   

//  Promises have build-in methods like then and catch to handle the results of asynchronous operations when they complete 
// or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to  
// traditional callback - based approaches. 

// USING THE PROMISE CONSTRUCTOR(CLASS)
// We can create a promise using the promise constructor. This involves creating a new instance of the promise class, 
// which takes a function as an argument. This function , often referred to as the "executor function" takes two parameters: 
// resolve and reject. You call resolve when the asynchronous operation is successful and reject when it executes error. 

// const pr = new Promise((resolve,reject)=>{ 
// setTimeout(()=>{ 
//     resolve("I miss you.");
// },2000);
// }); 

// pr.then((res)=>{ 
// console.log(res);
// }); 

// pr.catch((error)=>{ 
//     console.log(error);
// }); 

// pr.finally(()=>{ 
// console.log("I also miss you.")
// }); 

// Promise Methods:- 
// Promise.all method is used when you want to wait for all promises to complete succcessfully. Reject state will throw an error. 

const promise1 = new Promise((resolve,reject) => 
    setTimeout(()=>resolve("first"),2000));

const promise2 = new Promise((resolve,reject)=> 
setTimeout(()=>reject("failed"),5000)); 

const promise3 = new Promise((resolve,reject)=> 
setTimeout(()=>resolve('third'),1000)); 

// Promise.all([promise1,promise3,promise2])
//   .then((values)=>{ 
//     console.log(values);
//   }) 
//   .catch((error)=>{ 
//     console.error(error);
//   })

// Promise.allSettled():- 
// promise.allSettled method is used when you want to wait for all promisses to complete successfully . Reject state will throw  
// an error.

//   Promise.allSettled([promise1,promise2,promise3]) 
//   .then((values)=>{ 
//     console.log(values);
//   }) 
//   .catch((error)=>{ 
//     console.error(error);
//   })

// Promise.race():- 
// Promise.race is used when you are interested in the result of the first promise that completes ,regardless of success or 
// failure. 
 
Promise.race([promise1,promise2,promise3]) 
.then((values)=>{ 
    console.log(values);
}) 
.catch((error)=>{ 
    console.error(error);
})