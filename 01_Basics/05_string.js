const name = "Rahul Rudra";
const position = " president";

// console.log(name + position + " of GLA FC") // don't use this syntax, this syntax is outdated now.

//try to write or represent string in this form
console.log(`${name},${position}`); // O/P --> Rahul Rudra, president


console.log(`Hello my name is ${name} and I am the ${position} of the GLA FC`)
// this is the modern way of string representation, although result is same 
// we can use lot of methods inside ${}, like we have to use name in uppercase, lowercase or many more things

// another method of string aqquiring
const gameName = new String('AsSasIN-17-Games')

console.log(gameName); // calling gameName, O/P --> [String: 'AsSasIN-17-Games']
console.log(gameName[2]) // getting charater at the given index. O/P --> S

// console.log(gameName.__proto__); // O/P --> {},  accessing prototype, (gameName dot underscore underscore proto underscore underscore)

// accessing some of the prototype functions:-
console.log(gameName.length); // O/P --> 16
console.log(gameName.toUpperCase()) // O/P --> ASSASIN-17-GAMES
console.log(gameName.charAt(3)) // O/P --> a
console.log(gameName.indexOf('S')); // O/P --> 2


/* 
Some of the prototype functions :--------->>>>>>>

anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
trim : ƒ trim()
trimEnd : ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf : ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]
*/




// creating a new variable, newString and storing gameName in it
// and dividing this gameName in subString, for this we need two arguments
// one is start number another one is end number, gameName.subString(start number, end number)
const newString = gameName.substring(0,4)
console.log(newString); // O/P --> AsSa, although we gives, end number = 4, but 4th index number is not included



// taking a new method slice, we can also use negative values in slice
// it starts from reverse, 
const anotherString = gameName.slice(-16,3);
// it starts from length 10 from reverse upto till 3rd character
// starts from (A) and count to 3 , and end at (s)
console.log(anotherString); // O/P --> AsSas


// working of trim prototype function =>
const newStringOne = "     rahul    ";
console.log(newStringOne); // O/P --> print rahul with initial spacing as well as spacing in last
console.log(newStringOne.trim()); // O/P --> rahul => print rahul without any spacing



// working of replace prototype function =>
const url = "https://rahul.com/rahul%17rudra";
console.log(url); // O/P --> https://rahul.com/rahul%17rudra

// to replace %17, we can use replace, because website doesnot understand
// spaces, website automatically replace spacing with %20 or %anything
// so, to overcome this, we can use 
// url.replace('kisko replace krna hai', 'kisse replace krna')====>>>>

console.log(url.replace('%17', '-')); // https://rahul.com/rahul-rudra



// we can also ask question from it -->>>>
// like using includes, we can ask is "rahul" include in specific variable or not  
console.log(url.includes('rahul')); // O/P -->> true

console.log(url.includes('nikk')); // O/P -->> false



// using of method split we cam translate string into array
// reference =>    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// here we can split it into on the basis of '-' ==>>

console.log(gameName.split('-')); // O/P -->> [ 'AsSasIN', '17', 'Games' ]


