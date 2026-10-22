/*What is the difference between pure and impure functions ? 

Pure functions:
-> Pure functions are the  functions which will return same output for same arguments passed to the function
-> This will not have any side effects
-> It does not modify any local state*/

function greeting(name){
    return `Hello ${name}`
}
console.log(greeting("Ayush"))

/*Impure functions:
-> Impure functions are the  functions which will return inconnsistent output for the same arguments passed to the function
-> This will have side effects 
-> This will modify non local state */
let message = "good morning"
function greeting1(name){
    return `Hello ${name}, ${message}`
}
console.log(greeting1("ayush"))