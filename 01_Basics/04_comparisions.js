// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// console.log("2" > 1) 
// console.log("02" > 1)
// console.log(2 > "1")
// always make sure, the dataType you are cmparing
// is always same , not one is string another is number
// although all of them gives the value true, but it is a wrong practice


// console.log(null > 0);// false, because null is a empty value
// console.log(null == 0);// false
// console.log(null >= 0);// true 
// comparisions operator (>,<,>=,<=) convert null into a number, treating it as 0
// That's why (null >= 0) is true and (null > 0) is false


// console.log(undefined > 0) //false
// console.log(undefined == 0)//false
// console.log(undefined >= 0)//false
// console.log(undefined < 0)//false
// for any operation, undefined gives false value




// === strict checks
console.log("2" == 2);// true
// normally here conversion happens, it's gives true value
console.log("2" === 2);//false, --> but when strict check apply =>
// with operations it also checks,the dataTypes then gives the answer


