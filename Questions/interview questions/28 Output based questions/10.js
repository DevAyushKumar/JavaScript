//What's the output of below logic ?
getData1()
getData2();
function getData1(){
    console.log("getData1")
}
var getData = () => {
    console.log("Hello")
}

/*Explanation:
In JavaScript, function declarations are hoisted to the top of their scope, while variable declarations using var are also hoisted but initialized with undefined. Here's what happens in your code:
1. getData1() is a function declaration and getData() is a variable declaration with an arrow function expression assigned to it.
2. When the code runs:
-> getData1() is a function declaration, sot it's hoisted to the top an can be called anywhere in the code. However, it's not called immediately.
-> getData is declared using var, so it's hoisted to the top but initialized with undefined
-> The arror function assigned to getData is not hoisted because it's assigned to a variable.
3. When getData() is invoked:
-> It will throw an error because getData is undefined, and you cannot call undefined as a function.
Therefore, if you try to run the code as it, you'll encounter an error when attempting to call getData()
If you want to avoid this error, you should either define getData before calling it or use a function declaration instead of a variable declaration for getData. */

//Modification needed for the code:
var getData = () => {
    console.log("Hello")
}
getData1()
getData()