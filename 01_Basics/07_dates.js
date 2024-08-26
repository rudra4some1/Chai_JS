// Dates 

let myDate = new Date();
console.log(myDate);

/* output is not in readable format,, 
O/P -> 2024-08-26T06:49:52.156Z, 
so now convert it into string and in some other format 
by using some different method and function*/

// console.log(myDate.toString()); // O/P -> Mon Aug 26 2024 06:52:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // O/P -> Mon Aug 26 2024
// console.log(myDate.toLocaleString()); // O/P -> 8/26/2024, 6:54:09 AM

// console.log(typeof(myDate)); // O/P -> Object


/* How to declare the date and time :-
firstly create a new object :- myCreateDate
 */


// let myCreateDate = new Date(2025, 12, 17 , 8 , 15 , 30); 
// let myCreateDate = new Date("2025-01-17");

/* 
(2025, 1, 17) --> data 1 which is given for month,
is not consider 1 as January, in JavaScript when date format is
(year, month, date ==> 0000 , 00 , 00) then value of month is taken in single digit,
and the months count starts from 0, and ends at 11, 

if we put (2025 , 12, 17) --> it shows the date= > [Sat Jan 17 2026]

Which means, if we have to get the data of january, we have to write (2025, 0, 17)
and for getting the data of february (2025, 1 ,15)
*/

// for getting date
// console.log(myCreateDate.toDateString()); // O/P -> Fri Jan 17 2025

// for getting date and time both
// console.log(myCreateDate.toLocaleString()); // O/P -> 1/17/2025, 8:15:30 AM


/* for specifying the time, we can perform it in such way as:-
(2025, 0 , 17 , 8 , 15 , 30) this the data , the format of this is :- 
(year, month, date, hour, minutes, seconds)
*/

// another format for representing date := in ("YYYY-MM-DD")
// in this format month consider two digits, so January requires(01) ==> (2025-01-17)
// console.log(myCreateDate.toLocaleString());

// +++++++++++++++++ ***** timestamp******+++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now());// gives the data of present time in ms
// console.log(Math.floor(Date.now()/1000)); // to get data in seconds


let newDate = new Date("2024-12-27");
console.log(newDate.toDateString());
console.log(newDate.getMonth()); // provides only month, with conversion in single digit month, means January considered as 0.
console.log(newDate.getDay());


