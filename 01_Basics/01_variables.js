const accountId = 766712
let accountEmail = "rahul@google.com"
var accountPassword = "2001"
accountCity = "Hajipur" // also we can declare a variable without using const and var //
let accountState;

// accountId = 2002// changes not allowed in const
// try to change the values

accountEmail = "rahii@poet.com"
accountPassword = "707721"
accountCity = "Muzaffarpur"

/*
Prefer not to use var
beacause of issue in block scope and functional scope,
if we can change accountPassword at one place, it's get change to all other 
places wherever accountPassword is used, thats why 
not use "var"
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
