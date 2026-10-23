/*What is a closure ?

Defination:
A function along with its outer environment together forms a closure (or) closure is a combination of a function along with its lexical scope bundled together

Each and eery function in javascript has access to its outer lexical environment means access to the variables and functions present in the environments of its parents

Even when this function is executed in some outer scope(not in original scope) it still remembers the outer lexical environment where it was originally present in the code */
function Outer(){
    var a = 10;
    function inner(){
        console.log(a);
    }
    return inner
}
var close = Outer();
close()