//Output of below logic ?
var x=10;
function foo(){
    var x = 5;
    console.log(x)
}
foo();
console.log(x)

/*output: 5 and 10
In javaScript, this code demonstrates variable scoping. When you declare a variable inside a function using the var keword, it creates a new variable scoped to that function, which may shadow a variable with the same name in an outer scope. Here's what happens step by step:

-> var x = 10: Declares a global variable x and initializes it with the value 10

-> function foo(){...}: defines a function named foo.

-> var x = 5: inside the function foo, declares a local variable x and initializes it with the value 5. This x is scoped to the function foo and is different from the global x

-> console.log(x): Logs the value of the local variable x (which is 5) to the console from within the foo function

-> foo(): Calls the foo function

-> console.log(x): Logs the value of the global variable x (which is still 10) to the console outside the foo function. */