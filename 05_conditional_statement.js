// if ,else if and else statement
let temp = 30; 

if (temp>35){ 
    console.log("Do not go for beach.");
} 
 else if(temp<35 && temp>20){ 
  console.log(" let's go to beach and enjoy.")
 } 
 else{ 
  console.log("Let's go to see tv.")  
}  

let userage = 21; 
let isCitizen = true; 
let isRegistered = false; 

if(userage >= 18){  
   if(isCitizen){ 
     if(isRegistered){ 
        console.log("You are eligible to vote.");
      } 
     else{ 
       console.log("You are not eligible for vote due to registration status.");
     }
     } 
   else{ 
     console.log("You are not eligible for vote due to citizenship.");
   }

} 
else{ 
   console.log("You are not eligible for vote!");
} 

// Switch Statement 
 var day = "Tuesday"; 
 
 switch(day){  

  case "Monday": 
  console.log("Today is Monday.");  
  break;  

  case "Friday": 
  console.log("Today is Friday. let's go to see film.");
 break
 
 case "Sunday": 
 console.log("let's have party today."); 
 break; 

 default: 
 console.log("No Condition Match.");
 } 


 let areaofShapes = "Circle"; 
 let a = 5 
 let b = 10 
 let result ; 
 
 switch(areaofShapes){ 
  case "Square": 
  result = a * a; 
  console.log(result);  
  break;

  case "Rectangle": 
  result = a * b; 
  console.log(result);  
  break;

  case "Circle":  
  let r = 2;
  result = 3.142 * (r*r); 
  console.log(result);  
  break; 

  default: 
  console.log("Condition no match.");
 }  

