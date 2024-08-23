let score = "33"
// let score = null
// let score = undefined
// let score = true


// console.log(typeof score); // string
// console.log(typeof (score)); // string

let valueInNumber = Number(score) // Number is used here for converting string type of score into number type
// console.log(typeof valueInNumber); // valueInNumber is nothing but only a variable
// console.log(valueInNumber) // output is 33 and it's a number type


score = "33abc"
valueInNumber = Number(score)
// console.log(typeof valueInNumber) // representing 33abc a number
// console.log(valueInNumber) // output is -> NaN - Not a Number

// if any string doesn't convert to number then, we get the output
// NaN (Not a Number)

let isLoggedIn = 1
console.log(typeof isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)