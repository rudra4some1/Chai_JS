// ++++++ Array +++++++++++++++


//JavaScript arrays are resizable
// array is a linear datatructure, which stores collection of multiple datatypes (whether it is string, number,symbol, etc), under a single variable.
// indexing starts from 0

const myArr = [10,11,22,3,4,5]
const known = ["ginni", "harshita", "manisha", "keshav"]

const myarr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
console.log(known[3]);
// console.log(myarr2[2]);


//  Array Methods ++++++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>

// myArr.push(6); // adding an element in array
// myArr.push(70);
// myArr.pop(); // simply removing last value, we don't provide any parameter in pop

// myArr.unshift(9);// adding 9 at 0th index, same as push, but push at 0th index
// myArr.shift(); // removes 0th index element 

// console.log(myArr.includes(77));
/* includes ask question, so the answer should be in boolean form 
whether it is true or false, 
here 77 doesn't present in the myArr, so it shows false...
*/

// console.log(myArr.indexOf(22));
/* index of --> finds out the value at given index which already exists, 
if the value does not exists , it simply return -1,
if value found, it simply return the index , at which that value is present
 */

const newArr = myArr.join(); // join array and make it to string 




// known.push("rahul");

// console.log(myArr);
// console.log(known);

// console.log(myArr);
// console.log(newArr);



// Slice , Splice +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("A", myArr);
const my1 = myArr.slice(1, 3); // starts slicing from 1st index till, 3rd index, but exclude 3rd index.


console.log(my1);
console.log("B", myArr);

const my2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(my2);





