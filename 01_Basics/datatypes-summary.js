// # Primitive

// There are 7 types of primitive datatypes
// String,Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 101.3

const isLoggedIn = false
const outsideTemp = null //there must be any value inside outsideTemp and it's not 0, currently it's empty
let userEmail; // it's undefined

// Symbol --> provides uniqueness
const id = Symbol('123')
const anotherId = Symbol('123')
//although value of both of the different Id is same
// but both of the ID's are different
// console.log(id === anotherId);// O/P => false
// output is false because, symbol provides uniqueness to both ID's


const bigNumber = 7667128289320012002n



// ******************************************************************************************************************

// # Non - Primitive or Reference Type 

//  Types : Array, Objects, Functions



// Array --------->>>>
const heros = ["rocket", "hsc", "vsr"]


//Objects ----------->>>>>>>>>>>>..
let myData = {
    name: "rahul rudra",
    age: 20,
}
// myData => it is a variable
// all values inside {} curley braces is object, so basically... myData is object
// inside object => there is a key and value
// key => name, age
// value => rahul rudra, 20



//Function ------------>>>>>>>>>>>>>
const myFunction = function(){
    console.log("Hello rah_ii");
}


// how to find out the datatype of anything or any value 
// console.log(typeof variable Name);
//example => 
// console.log(typeof bigNumber)

// type of operator gives following values 

// undefined --> undefined
// null --> object
// boolean --> boolean
// number --> number
// string --> string
// function --> function
// symbol --> symbol
// bigInt --> bigint
// object (native or host and does implement [call]) --> objects
// object (native or host and does implement [call]) --> function
// object (host and does not implement [call]) --> implementation defined may not be(undefined,boolean,number,string)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack Memory
// Used in all Primitive types (Strinng, number, boolean, bigInt,symbol, null)
// Gets the copy of the variable we declare 

let myYoutubeName = "AsSaSsIN Playz";

let anothername = myYoutubeName;
anothername = "rah_ii" 
// here copy value of myYoutubeName is changed, when we assign anotherName 
// we get copy value of myYoutubeName, and the change is happened in copy value
// so thats why myYoutubeName value does not change.

console.log(anothername); // O/P --> rah_ii
console.log(myYoutubeName); // O/P --> AsSaSsIN Playz



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Heap
// Used in all Non-primitive type (Array, Object, Function)
// Gets the reference or we can say orginal value
// values can be changed in heap as per requirement
// we done any changes inside heap, is the change in the original value



// making object => userOne
let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ibl"
}

// when we call userOne it does not send the copy of userOne variable
// instead of this, it send the reference of this variable is stored in heap



let userTwo = userOne // update userTwo value as same as userOne 

userTwo.email = "rah_ii@nikk.com" //updating the email of the userTwo

console.log(userOne); // O/P --> { email: 'rah_ii@nikk.com', upi: 'userOne@ibl' }
console.log(userTwo); // O/P --> { email: 'rah_ii@nikk.com', upi: 'userOne@ibl' }
// both of the output are same because, both variable getting reference from same heap or memory




