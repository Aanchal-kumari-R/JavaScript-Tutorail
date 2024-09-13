// TIME GET OBJECTS 

// getHours():- returns the current hours of the system 
// const currentTime = new Date(); 
// const hours = currentTime.getHours(); 
// console.log(hours);    

// getMinutes():- Returns the current minutes of the system 
// const currentMinutes = new Date(); 
// const minutes = currentTime.getMinutes(); 
// console.log(minutes);    

// getSeconds():- Returns the current seconds of the system. 
// const currentSeconds = new Date(); 
// const seconds = currentSeconds.getSeconds(); 
// console.log(seconds);  

// getTime():- Retuns the current time in milliseconds from the jan 1 1970. 
// const currentTime1 = new Date(); 
// const time = currentTime1.getTime(); 
// console.log(time);  

// SET TIME METHODS  
// const date = new Date();

// setHours(hourValue[,minuteValue[,secondValue[,millisecondsValue]]]):- set the hours for a specified date according to local time. 
// date.setHours(10); 
// console.log(date);

// setMinutes(minuteValue[,SecondValue[,millisecondsValue]]):- set the minutes for a specified date according to local time. 
// date.setMinutes(23); 
// console.log(date);  

// setSeconds(secondValue[,millisecondsValue]):- set the second for specified date according to local time. 
// date.setSeconds(12); 
// console.log(date); 

// setmilliSeconds(millisecondValue):- set the milliSecond for specified date according to local time. 
// date.setMilliseconds(12); 
// console.log(date);  

// setTime(timevalue):- Sets the date objects to the time represented by a number of milliSecond since january 1, 1970,00:00:00 UTC 
// date.setTime(167492342133); 
// console.log(date);  

// A FEW USEFUL METHODS OF DATE OBJECT IN JAVASCRIPT 

// 1: toLocalString():- Returns a string representing the date and time portion of a date object using the current local's conventions. 
// const date1 = new Date(); 
// const localString = date1.toLocaleString(); 
// console.log(localString); 

// 2: toLocalDateString():- Returns a string representing the date portion of a Date objects using the current local's conventions. 
// const localString1 = date1.toLocaleDateString(); 
// console.log(localString1);  

// 3: toLocalTimeString():- Returns a string representing the time portion of a Date objects using the current local's conventions. 
// const localString2 = date1.toLocaleTimeString(); 
// console.log(localString2); 

// parse(): parses a string representation of a date and returns the number of milliseconds since January 1,1970, 00:00:00 UTC. 
// const dateString = "2024-02-19T16:30:00Z"; 
// const parseDate = Date.parse(dateString); 
// console.log(parseDate);  

// Bonus   

// let newDate = new Date(); 
// console.log(Date.now()); 
// console.log(newDate.getTime());

// Date.now() is the static method of the date object 
// Use date.now() i you want the timestamp right this second. 
// It returns the current timestamp(number of milliseconds) representing the current moment. 
// Use the date().gettime() if you have an existing Date object from elsewhere and want its timestamp.   

// Interview Question 
// Write a program to add specigic number of dats to a given date.  

// const addDaysToDate = (date2,extraDay)=>{ 
//     console.log(date2); 
//     console.log(date2.setDate(date2.getDate() + extraDay)); 
//     console.log(new Date(1722816000000));
// }

// const date2 = new Date("2024-07-29");  
// const newDate1 = addDaysToDate(date2,7); 
// console.log(newDate1.toLocaleDateString());  

// write a function to calculate the difference is days between given two dates.  

const getDaysDifference = (d1,d2) => {   
    let oneDaySeconds = 24*60*60*1000;
    const diff = d2-d1;  
    return Math.round(diff/oneDaySeconds);


};

const date1 = new Date("2024-02-19"); 
const date2 = new Date("2024-03-01"); 
console.log(getDaysDifference(date1,date2)); 







