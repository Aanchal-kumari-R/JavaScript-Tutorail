// INTERVIEW QUESTIONS :--------------------------------------  

// const target = {a:1,b:2}; 
// const source = {b:3,d:4}; 

// const mergedObject =  Object.assign({},target,source); 
// console.log(mergedObject); 

// Given an object representing s student , write a function to add a new subject with its grade to the student's record.  
// Also check if the grade property is present or not? 

// let student = { 
//     name: "Bob", 
//     age:20, 
//     grades:{ 
//         math :90, 
//         science:85, 
//         history:88
//     },
// }  
// const addSubjectGrade = (student,subject,marks) =>{ 
//   if(!student.grades){ 
//     student.grades = {}
//   } 
//   return student.grades[subject] = marks;
// }
// addSubjectGrade(student,"Computer",92); 
// console.log(student); 

// write a function that compares two objects to determine if they have the same properties and values.  

// const areObjectEqual = (objA,objB)=>{  
//   const o1 = Object.keys(objA); 
//   const o2 = Object.keys(objB); 
//   if(o1.length != o2.length){ 
//     console.log('length is not same');
//     return false;
//   };  

//   for(let key in objA){ 
//     if(objA[key] != objB[key]){ 
//       console.log('values are not same.'); 
//       return false;
//     };
//   }; 
//   return true;
// }
// let objA = {name:"Alice" ,age : 26, city :"NewYork"};
// let objB = {name:"Alice", age:26, city:"NewYork"};
// let objC = {name:"Bob", age:30, city:"San Francisco"};
// console.log(areObjectEqual(objA,objB)); 
// console.log(areObjectEqual(objA,objC));   

// write a function that transform an array of an object into an object where the keys are the object's ids. 
let inputArray = [
  { id:1 , name:"Alice"}, 
  {id:2 , name:"Bob"}, 
  {id:3 , name:"Charlie"}, 

];     
const arrayToObj = (arr) =>{ 
  let obj = {}  
  for(let key of arr){ 
    // console.log(key.id,key);  
    obj[key.id] = key; 
    
  }  
  return obj;
}
console.log(arrayToObj(inputArray));

