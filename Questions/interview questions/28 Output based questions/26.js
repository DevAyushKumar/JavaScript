//Guess the output ?
var x = 23;

(function(){
    var x = 43;
    (function random(){
        x++;
        console.log(x);
        var x = 21;
    })();
})();

/*Solution:
the provided code snippet demonstrates the behaviour of variable hoisting and function scope in javascript. Lets analyze the code step by step to understand the output

Breakdown:
1. Global scope:
var x = 23;
A global variable x is declared and initialized with the value of 23

2. First IIFE (Immediately Invoked Function Expression) 
(function(){
var x = 43;
// ..
})();
A function scope is created. Inside this function, a local variable x is declared and intialized with the value 43. This x shadows the global x.

3. Second IIFE (nested function, named random):
(function random(){
x++;
console.log(x);
var x = 21;
})();
Another function scope is created inside the first IIFE. The function random is invoked immeediately.

4. Inside the random function:
x++;
console.log(x);
var x = 21;
Here, varaible hoisiting comes into play. The declaration var x = 21; is hoisted to the top of the function random, but not its initialization. Thus, the code is interpreted as:
var x;
x++;
console.log(x);
x = 21;
-> Initially, x is undefined beccuase the hoisted declaration of x does not include its initialization.
-> x++ attempts to increment x when it is still undefined. In javascript, undefined results in NaN (not a number)
-> Therefore, console.log(x); outputs NaN
-> After the console.log statement, x is assigned the value z1, but this assignment happens after the console.log and thus does not affect the output.

Summary:
When random function is executed, the following sequence occurs:
1. var x; (hoisting, x is undefined at this point)
2. x++; (undefined result in NaN)
3. console.log(x); outputs NaN
4. x = z1; (assigns z1 to x, but this is after the console.log)
Output:
Thus, the output of the code is
NaN*/