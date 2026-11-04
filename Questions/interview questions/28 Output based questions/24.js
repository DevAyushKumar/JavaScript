//test for basic array
function guessArray() {
    let a = [1,2];
    let b = [1,2];

    console.log(a == b);
    console.log(a === b);
}
guessArray()

/*In JavaScript, when you compare two arrays using the == or === operators, you're comparing their referances, not their contents. So, even if two arrays have the same elements, they will not be considered equal unless they refer to the exact same object in memory.

In your getArray function, a and b are two seperate arrays with the same elements, but they are distinct objects in memory. Therefore, a == b and a === b will both return false, indicating that a and b are not the same object.

If you want to compare the contents of the arrays, you'll need to compare each element individually.*/