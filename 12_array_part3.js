// Array in object
const products = [ 
    {name:"Laptop", price : 1200 },   
    {name:"Phone", price : 800}, 
    {name:"Tablet", price : 300}, 
    {name:"SmartWatch", price : 150}, 
 
]; 

const filterProduct = products.filter((curElem)=>{ 
    // console.log(curElem); 
    // console.log(curElem.price);  
    // console.log(curElem.price <= 500); 

    return curElem.price <= 500;
});  
console.log(filterProduct); 

// find unique value  

const number1 = [1,2,3,4,6,5,6,7,8,7,6,5,9]; 
let uniqueValues = number1.filter((curElem,index, arr) =>{ 
    return arr.indexOf(curElem) === index;
}); 
console.log(uniqueValues);
console.log([new Set(number1)]);  

// sort and compare in array  
// Sorting in an array :- The sort method sorts the elements of an array in place and returns the 
// sorted array. By default, it sorts elements as strings.
const fruits = ["Banana","Apple","Orange","Mango"]; 
fruits.sort(); 
console.log(fruits); 
console.log(number1.sort()); 
// reverse sort 
// if(a>b) return 1 => switch the order 
// if(b>a) return -1 => keep the order 
number1.sort((a,b) =>{ 
    if(a>b) return -1; 
    if(b>a) return 1;
}); 
console.log(number1); 

// use map to square each number and create a new array. 
const numbers3 = [1,2,3,4,5,6,7,8,9,10,11,12];  
let result = numbers3.map((curElem)=>curElem*curElem);
console.log(result)  

// using the map method, write a function that takes an array of numbers and returns a new array where each string is capitalized. 
const words = ['aaple','banana','cherry','date']; 
const result1 = words.map((curElem) => { 
    return curElem.toUpperCase();
}); 
console.log(result1); 

// using the map method, write a function that takes an array of numbers and returns a new array where each number us squared, but 
// but onlu if it's an even number.  
let evenSquare = numbers3.map((curElem)=>{ 
  if(curElem %2 == 0){ 
    return curElem*curElem;
  } 
}).filter((curElem)=>curElem != undefined);  
console.log(evenSquare);

// using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "mr.". 
const names = ["Ram","Shyam","Mohan","Sohan"];  
const prefixName = names.map((curElem)=>`${curElem}`);
console.log(prefixName); 

// Reduce() :- The reduce method in javascript is used to accumulate or reduce an array to a single value.It iterates over the elements  
// of an array and applies a callback function to each element , updating an accumulator value with the result.   
// syntax :- array.reduce(function callback(accumulate, currentValue, index, array){ 
//} , initialeValue); 
// write a Javascript function that calculates the total price of items in a shopping cart. The function should take an array of  
// item prices as input and return the total price. 

const productPrice = [100,200,300,400,500];  
const totalPrize = productPrice.reduce((accum,curElem)=>{ 
    return accum+curElem;
},0); 
console.log(totalPrize);