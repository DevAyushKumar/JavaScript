//Whats the output of below code ?
let a = true;
setTimeout(() => {
    a = false;
}, 2000)

while(a){
    console.log('---inside while---')
}

/*This code snippet creates an infinite loop. Let's break it down:
1. let a = true: This declares a variable a and initializes it to true
2. setTimeout(() => { a = false }, 2000): This sets up a timer to excute a function after 2000 miliseconds (2 seconds). The function assigned to setTimeout will set the value of a to false after the timeout.
3. while(a) {console.log('---inside while---')}: This is a while loop that continues to execute as long as the condition a is true. Inside the loop, it prints '---inside while---' 
The issue here is that the while loop runs indefinitely becuase there's no opportunity for the JavaScript event loop to process the setTimeout callback and update the value of a. So, even though a will eventually become false after 2 seconds, the while loop will not terminate becuase it dosen't yeild control to allow other tasks, like the callback, to execute.
To fix this, you might consider using asynchronous programming techniques like Promises, async/await, or handling the setTimeout callback differently. */