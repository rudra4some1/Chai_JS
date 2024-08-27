// singleton --> objedcts made from constructor

// object literals


const mySym = Symbol("key1")




const JsUser = {
    name: "Rahul",
    "full name": "Rahul Rudra",
    [mySym] : "myKey1",
    age: "20",
    location: "mathura",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);// by this way of calling objects, we cannot access "full name" key
// console.log(JsUser["email"]);// but in this way, we can access any key.

// console.log(JsUser["full name"]);// try this way to call objects
// console.log(JsUser[mySym]);


// we can overwrite value in such a way thst is : -
JsUser.email = "rudra4unikk@lovestory.com";
// Object.freeze(JsUser); // freeze the changes from occuring

JsUser.email = "rahulrudra@gla.ac.in";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this is used to get the properties of variable or key , whis is here is name .
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






