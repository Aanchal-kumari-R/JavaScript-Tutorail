// while loop 
num = 1; 
while(num<=10){ 
    console.log(num) 
    num++
}
 

// do while loop 
i = 10; 
do{ 
    console.log(i) 
    i++
} 
while(i<=20)


// for loop 

for(let j = 20; j<=30; j++){ 
    console.log(j);
}  
 
// Question Solved 

// let userInput; 
// let positiveNumber;  

// do{ 
//     userInput = prompt("Enter any positive number ;- "); 
//     positiveNumber = parseFloat(userInput);  
// }
//     while(isNaN(positiveNumber) || positiveNumber < 0){ 
//         console.log("You have entered a valid positive number.")
//     } 


// infinite for loop 
// for(;;){ 
//     // console.log("Infinite for loop.")
// } 

// Question Solved
var num1 = 12;
let isprime = true; 

for(let i = 2; i<num1; i++){ 
  if(num1%i == 0){ 
   isprime = false; 
   break;
  }
}
if (isprime){ 
    console.log(" Num is Prime number.")
} 
else{ 
    console.log(" Num is not Prime number.")
}  

// Question Solved
var year = 2004; 
if((year % 4 ===0 && year % 100!== 0)|| year === 400 ){ 
    console.log(year, " is a leap year.")
} 
else{ 
    console.log(year, 'is not a leap year.')
}  

// Question Solved 

for(let i = 1; i<=5; i++){   
    var pattern = ""
    for(let j = 1; j<=i; j++){  
        pattern = pattern + " *";
}  
console.log(pattern)
}