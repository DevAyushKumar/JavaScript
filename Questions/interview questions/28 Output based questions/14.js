//Whats the output of below code ?
setTimeout(() => console.log(1), 0);
console.log(2);
new Promise(res => {
    console.log(3)
    res();
}).then(() => console.log(4));
console.log(5);

/*This code demonstrates the event loop in JavaScript. Here's the breakdown of what happens:

1. setTimeout(() => console.log(1), 0): This schedules a callback function to be executed after 0 milliseconds. However, due to javascript's asynchronous nature, it dosen't guarantee that it will execute immediately afte the current synchronous code block.

2. console.log(2): This immediately logs 2 to the console.

3. new Promise(res => { console.log(3); res(); }).then(() => console.log(4)): This creates a new promise. The excutor function inside the Promise logs 3 to the console and then resolves the Promise immediately with res(). The then() meathod is chained to the Promise, so once it's resolved, it logs 4 to the console

4. console.log(5): This logs 5 to the console.
When you run this code, the order of the 

When u run the code, the order of the output might seem a bit counterintuitive, here's why:

-> console.log(2): is executed first because it's synchronous code
-> then, the Promise executor synchronously, so console.log(3) is logged
-> After that, console.log(5) is executed
-> Once the current synchronous execution is done, the event loop picks up the resolved Promise and executes its then() callback, logging 4
-> Finally, the callback passed to setTimeout is executed, loggin 1. Although it was scheduled to run immediately with a delay of 0 milliseconds, it's still processed asynchronously and placed in the event queue, after the synchronous code has finished executing*/