const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);// treat dc_heros as the 4th element of the marvel_heros array
// console.log(marvel_heros[3][1]); // getting the value of flash

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


// instead of concat we can prefer , spread operator 
// after using it, each elememt spread and become individual element
const all_new_Heros = [...marvel_heros, ...dc_heros]; // spread operator
console.log(all_new_Heros);


//concatenate all elements of array in one 

const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("rahul")); // asking, is rahul is a array or not 
/* yes definitely rahul is not a array, in this case 
output is false, so 
if , I have to convert this to array , I can simply do */

console.log(Array.from("rahul"));
// from makes array just like array, means the structure of from is like aray
// Array.from basically used to create array




/* a interesting case for interview:--
here Array.from cannot convert it directly to string, it has no idea,,
whether it convert the keys to array or the value to array
so , in that case it simply return empty array like this = []
*/
console.log(Array.from({name: "rahul"}));





// to store multiple elements in one array, we have to use 
// either Array.of or Array.from

let score1 = 77
let score2 = 70
let score3 = 15
let score4 = 17

console.log(Array.of(score1,score2,score3,score4));


