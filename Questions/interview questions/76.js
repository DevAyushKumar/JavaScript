//What will be the output of the code ?
function x(){
    let a = 10;
    function d(){
        console.log(a);
    }
    a=500;
    return d;
}
var z = x();
z();

/*Solution: 500 - closures concept
In JavaScript, this code demonstrates lexical scoping and closures. Let's break it down:
1. function x(){ ... }: Defines a function named x
2. let a = 10: Declares a variable a inside the function x and initialized it with the value 10
3. function d(){ ... }: Defines a nested function named d inside the function x
4. console.log(a): Logs the value of the variable a to the console. Since d is defined within the scope of x, it has access to the variable a defined in x
5. a=500: changes the value of the variable a to 500
6. return d: Changes the value of the varibles a to 500
7. var z = x(): calls the function x and assigns the returned function d to the variable z
8. z(): calls the function d through the variable z
When you run this code, it will log the value of a at the time of executing d, which is 500, because d retains access to the variable a even after x has finished executing. This behaviour is possible due to closure, which allow inner functions to access variables from their outer scope even after the outer function has completed executing. */