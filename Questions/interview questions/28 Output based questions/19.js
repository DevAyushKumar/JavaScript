//Guess the output ?
let c = 0;
let id = setInterval(() => {
    console.log(c++)
}, 10)

setInterval(() => {
    clearInterval(id)
}, 2000)

/*This javascript code sets up an interval that increments the value of c every 200 milliseconds and logs its value to the console. After 2 seconds (2000 milliseconds), it clears the interval.
Here's what each part does:
-> let c=0: initializes a variable c and sets its initial value to 0
-> let id = setInterval(() => {console.log(c++)}, 2000): Sets up an interval that executes a function every 200 milliseconds. The function logs the current value of c to the console and then increments c.
-> setTimeout(() => {clearInterval(id)}, 2000): Sets a timeout function that executes after 2000 milliseconds (2 seconds). This function clears the interval indeftified by id, effectively stopping the logging of c.
This code essentially logs the values of c at 200 milliseconds intervals until 2 secocnds have passed, at which point it stops logging. */