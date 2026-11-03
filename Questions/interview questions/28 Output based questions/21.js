//What would be the output of following code ?
function test() {
    console.log(a);
    console.log(foo());
    var a =1;
    function foo(){
        return 2;
    }
}
test()

/*Output: undefined and 2
In JavaScript, this code will result in undefined being logged for console.log() and 2 being loggged for console.log(foo()). This is due to variable hoisting and funtion declaring hoisting.
Here's what's happening step by step:
1. The test function is called
2. inside test:
-> console.log(a) is executed. Since a is declared latedd in the function it's hoisted to the top of function scope, but not initialized yet. So, a is undefined at this point.
-> console.log(foo()) is executed. The foo function is declared and assigned before it's called, so it returns 2.
-> var a = 1; declared and initiazlies a with a value of 1
Therefore, when console.log(a) is executed, a is undefined due to hoisitng, and when console.log(foo()) is executed, it logs 2, then return vlaue of the foo function. */