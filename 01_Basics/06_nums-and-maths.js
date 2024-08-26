const score = 400;
// console.log(score);
/* -> Here, it is completely not defined that, score is a number. Although
  JavaScript automatically defined that score is a number.
*/


/* Here it is completely defined that, balance is a number*/
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


/* gives priority to the number before the decimal, always return string*/
const otherNumber = 233.3454;
// console.log(otherNumber.toPrecision(3));



const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++++++ *************** Maths ************** ++++++++++++++++++++++++++

// console.log(Math);// run this on inspect for finding different methods and properties of maths

// console.log(Math.abs(-4)); // -ve value convert to +ve, but that doesn't mean
// that positive value also convert to negative, abs is a representation of (absolute value)

// console.log(Math.round(4.6)); // Gives the round of value, if greater than .5 the upper value
// if value is less than .5 then gives lower value..

// console.log(Math.ceil(4.2)); // used for always getting upper value
// console.log(Math.floor(4.9)); // used for always getting lower value

// for finding the lowest or minimum value in any array, then use -->> min
// console.log(Math.min(4,5,9,2,7));

// for finding the maximum value in any array, then use -->> max

console.log(Math.random()); // always gives random values between 0 to 1
console.log(Math.random() * 10); // always gives random values between 0 to 9
console.log((Math.random() * 10) + 1); // always gives random value between 1 to 9
console.log((Math.random() * 10) + 1);


const min = 10
const max = 20

Math.random(Math.floor(Math.random() * (max - min + 1)) + min);
/* Math.floor is used for getting round off value, as well as for getting only one value
Math.random provides some random value

(max - min + 1) --> (+ 1) because we does not want the output value 0 (zero)

(+ min) --> because, to get atleast value more than the min value , which is here is 10.






