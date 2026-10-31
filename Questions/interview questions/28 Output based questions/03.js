//Guess the output ?
const p = {k: 1, l: 2};
const q = {k: 1, l: 2};
let isEqual = p==q;
let isStartEqual = p==q;
console.log(isEqual, isStartEqual);

/*Output:
-> false, false

In JavaScript, when you compare objects using == or ===, you're comparing their referances in memory, not their actual contents. Even if two objects have the same properties the values, they are considered unequall unless they referance the exact same object in memory =. 
In your code:

-> isEqual will be false because p and q are two different objects in memory, even though they have the same properties and values.

-> isStartEqual will also be false for the same reason. The == operator checks for strict equality, meaning it not only compares values but also ensures that the objects being compared reference the exact same memory location. 

So, console.log(isEqual, isStartEqual) will output false, false. */