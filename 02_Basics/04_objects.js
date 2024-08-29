// there is no difference between both of them,,,
// but 
// this is a singleton object
// const tinderUser = new Object() // shows {} -> empty object

// this is non-singleton object
const tinderUser = {} // shows {} -> empty object

tinderUser.id = "123abc"
tinderUser.name = "rahul"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // it simply run tinder object with empty object 


const regularUser = {
    email: "rudra4some1@gmail.com",
    // here we are defining the, the nesting of objects
    /*
    fullname is already an object, again userfullname is another object inside fullname 
    so, this is basically the nesting of objects,

    */
    fullname: {
        userfullname: {
            firstname: "rahul",
            lastname: "rudra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.email);
// console.log(regularUser.userfullname.lastname);// throws error

/* we have to follow some steps to print lastname:-
console.log(regularUser.fullname.userfullname.lastname);

we cannot directly approach to lastname ,
neither we directly approach through username wiothout:= regularUser and fullname
*/
 console.log(regularUser.fullname?.userfullname.lastname);
/* optional chaining -- sometimes when request comes from server, 
then optional chaining, checks whether the given variable or given objects,,
is exist or not.
*/


const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// 90% of the time we use spread operator {...obj1, ...obj2}, which is quite simple and modern
const obj3 = {...obj2, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "nikk@heart"
    },
    {
        id: 1,
        email: "nikk@heart"
    },
    {
        id: 1,
        email: "nikk@heart"
    }
]


user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys stored in the form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));




