// ESCMASCRIPT FEATURES (2022) / (ES13) 
// LIST OF NEW FEATURES ADDED IN ES13 

// .at() function for indexing 
// the at() method introduced in es2022 has simplified this process. In a case positive the ate() method work same as the sqare 
// brackets. But for negative indexing , the ate() method allows starting the iteration from the end. 

const array = [1,2,3,4,5,6,7]; 
console.log(array.at(-1));  

// Object.hasOwn():-  
// this is the indendent alternative for the Object.prototype.hasOwnProperty method. Althought  Object.prototype.hasOwnProperty 
// has been in javaScript specification for quite a time, it has some drawbacks.  

const book ={ 
    name:"world best js course",  
    author:"Thapa Technical"
}; 

console.log(Object.hasOwn(book,'name')); 
console.log(Object.hasOwn(book,'price'));  

// issuewithhasownproperty  
const student = Object.create(null); 
console.log(typeof student);  
student.name="vinod"; 
// console.log(student.hasOwnProperty("name")); 
console.log(Object.hasOwn(student,'name'));





