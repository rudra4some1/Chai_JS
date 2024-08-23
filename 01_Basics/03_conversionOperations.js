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
// valueInNumber = Number(score)
// console.log(typeof valueInNumber) // representing 33abc a number
// console.log(valueInNumber) // output is -> NaN - Not a Number

// if any string doesn't convert to number then, we get the output
// NaN (Not a Number)

let isLoggedIn = 1
// console.log(typeof isLoggedIn)

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)


// ******************* Operations *****************
let value = 3
// console.log(value) // output is => 3

let negValue = -value // converting value of 3 to -3
// console.log(negValue) // output is => -3

//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**2);
//  console.log(2**3);
//  console.log(2/2);
//  console.log(2%2);

// let str1 = "rahul "
// let str2 = "rudra"
// let str3 = str1 + str2
// console.log(str3)


// console.log("1" + 2) // output is => 12 --- convert all operations in string, everyonme is treats as string 
// console.log(1 + "2") // O/P => 12 --- add 1 with string 2 so 12
// console.log("1" + "2") // O/P => 12 -- both of them are string so 12
// console.log("1" + 2 + 2) // O/P => 122 -- convert all operations in string
// console.log(1 + 2 + "2") // O/P => 32 -- add 1 and 2 = 3 then combined it with string 2, so 32

