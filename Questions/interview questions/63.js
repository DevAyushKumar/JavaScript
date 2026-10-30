/* What is clearInterval in javascript ?
This meathod takes the interval ID returned by seetInterval as an argument and stops the corresponding interval from executing further. */
let count = 0;
const intervalId = setInterval(() => {
    console.log(count++);

    if(count > 5) {
        clearInterval(intervalId);
    }
}, 1000);
/*This code will print the numbers 0 to 5 with a one-second delay between each number. After printing 5, the clearInterval meathod will be called, and the interval will stop. */