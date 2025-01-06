// ECMASCRIPT FEATURES (2023)/(ES13) 
// List of new features added in es13  

// Array.findLast() 
// Array.findLastIndex() 
// Array.prototype.toReversed() 
// Array.prototype.toSorted(CompareFn)
// Array.prototype.toSpliced(start,deleteCount,....items)
// Array.prototype.with(index,value) 


// Array.findLast() and Array.findLastIndex():------  

// This function allows us to find element from the last to first of the array based on a condition. 

const array = [1,2,3,4,5,6,7]; 
console.log(array.findLast((elem)=>elem <4)); 
console.log(array.findLastIndex((elem)=>elem ));  

// NEW Array.prototype function 

const name = ["aanchal","Singh","kumari","Rajput"]; 

// Array.prototype.toReversed() 
const toreversed = name.toReversed(); 
console.log(toreversed);  

// Array.prototype.toSorted(CompareFn)
const tosorted = name.toSorted(); 
console.log(tosorted);

// Array.prototype.toSpliced(start,deleteCount,....items)
const splicedArr = name.toSpliced(2,1,"Bhardwaj"); 
console.log(splicedArr); 

// Array.prototype.with(index,value) 
// The with() method in javascript is used to change the value of an element at a specific index in an array. It takes two 
// arguments: the index of the element to be changed and the new value. It returns new array with the changed element , leaving  
// the original array unchanged. 
const replacewith = name.with(1,"thapatechnical"); 
console.log(replacewith);
