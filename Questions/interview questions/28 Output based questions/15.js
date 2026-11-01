//Output of below logic ?
async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
}
console.log("D")
foo();
console.log("E")

/*Output: D,A,E,B,C

Explanation:
The main context logs "D" because it is synchronous and executed immediately.
The foo() function logs "A" to the console since it's synchronous and executed immediately, await Promise.resolve() 
:This line awaits the resolution of a Promise. The Promise.resolve() function returns a resolved Promise immediately. The control is temporarily returned to the caller function ( foo() ), allowing other synchronous operations to execute.
back to the main context: console.log("E")
: This line logs "E" to the executed, and it's waiting for the resolution of thee Promise inside it. Inside foo()
(resumed execution): console.log("B");
:This line logs "B" to the console since it's synchronous operation. await new Promise(resolve => setTimeout(resolve, 0));
The line awaits the resolution of a Promise returned by the setTimeout function. Although the delay is set to 0 milliseconds the setTimeout callback is pushed into thee callback queue, allowing the synchronous code to continue.
Back to the main content:
The control is still waiting for the foo() function to complete. Inside foo() (resumed execution): The callback from the setTimeout is picked up from the callback queue, and the promise is resolved. This allows the execution of the next await.console.log("C");
:This line logs "C" to the console since it's a synchronous operation. foo() function completes. */