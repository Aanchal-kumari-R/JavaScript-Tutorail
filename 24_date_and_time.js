// new Date() : Creates a data object representing the current date and time.

const currentDate = new Date(); 
// console.log(currentDate);  

// new Date(dateString):Creates a Date object based on the provided date string. 

const dateString = "2024-07-25T17:51:55.957Z"; 
const dateFromString = new Date(dateString); 
// console.log(dateFromString);   

// new Date(year,month): - Create a date object with the specified date and month. 

// const date1 = new Date(2024,1); 
// console.log(date1);  

// new Date(year,month,day): - Create a date object with the specified date,month and day.  

// const date2 = new Date(2024,1,5);  
// console.log(date2);  

// new Date(year,month,day,hours): - Create a date object with the specified date , month , day and hours.   
// const date3 = new Date(2024,1,5,10);  
// console.log(date2);  

// new Date(year,month,day,hours,minutes): - Create a date object with the specified date , month , day , hours and minutes. 
// const date4 = new Date(2024,4,12,5,12); 
// console.log(date4);  

// new Date(year,month,day,hours,minutes,seconds): - Create a date object with the specified date , month , day , hours , minutes 
// and seconds. 

// const date5= new Date(2024,4,12,5,12,10); 
// console.log(date5);    

// new Date(year,month,day,hours,minutes,seconds,millisecond): - Create a date object with the specified date , month , day  
// , hours , minutes  ,seconds and milliseconds.  

// const date6= new Date(2024,4,12,5,12,10,274); 
// console.log(date6);    

// new Date(milliseconds):- Creates date object representing the number of milliseconds since the Unix  
// epoch(January 1 1970,00:00:00 UTC)  

const curMilliSeconds = new Date().getTime(); 
// console.log(curMilliSeconds); 
const dateFromMilliSeconds = new Date(curMilliSeconds); 
// console.log(dateFromMilliSeconds);  

// TODO Notes:-  

// javascript count month from 0 to 11 
// jan = 0, and dec = 11 

// javascript stores dates as milliseconds : javascript stores dates as number of milliseconds since jan 01, 1970.

// GET DATE METHOD :- 

// getYear():- Returns the current year. 
const currentdate = new Date();  
const year = currentdate.getFullYear(); 
// console.log(year);  

// getMonth():- Returns the current month. 
const currentdate1 = new Date(); 
const month = currentdate1.getMonth(); 
// console.log(month); 

// getDate():- Returns the current Date. 
const currentdate2 = new Date(); 
// const date = currentdate2.getDate(); 
// console.log(date);  

// getDay():- Returns the current day's index. 
const currentdate3 = new Date(); 
const day = currentdate3.getDay(); 
// console.log(day)


// Set Date Methods:-  

// setFullyear(yearValue,[monthValue,[dateValue]]):- set a full year for  a specified date according to local time. 
const date = new Date(); 
// date.setFullYear(2025);  
// date.setFullYear(2025,[3]); 
date.setFullYear(2025,[2]);
// console.log(date);   

// setMonth(monthValue,[dayValue]):- set a month for a specified date according to local time. 
// date.setMonth(5);  
date.setMonth(5,[2]); 
// console.log(date); 

// setDate(dayValue):- set the day of the month for a specified date according to local time. 
date.setDate(4); 
 console.log(date);                                     




