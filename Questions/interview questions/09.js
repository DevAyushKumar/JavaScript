/*What's the spread operator in javascript ? 
Spreadd opertator is used to spread or expand the elements of an iterable like array or string into individual elements*/

//Concatenating arrays 
let x = [1,2]
let y = [3,4]

let z = [...x, ...y]
console.log(z)

//copying arrays or strings
let a = [...x]
console.log(a)

//