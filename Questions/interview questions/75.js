//This code prints 6 everytime. How to print 1,2,3,4,5,6 ?

function x(){

    for(var i=1; i<=5; i++){
        setTimeout(() => {
            console.log(i)
        },i*1000);
    }
}

x();

//Solution: Either use let or closure
function y() {
    function closure(x) {
        //Set a timeout to log the value of x after x seconds
        setTimeout(() => {
            console.log(x);
        }, x*1000);
    };

    //Loop from 1 to 5
    for(var i=1; i <= 5; i++){
        closure(i);
    }
}

//call the outer function
y();

/*The function we have written defines an inner function closure which is supposed to log the value of x after x seconds. The outer function x calls this inner function for values from 1 to 5.
The code will log the values 1 to 5 after 1 to 5 seconds respectively. Here's an explanation of how it works: 
1. The outer function x is called 
2. Inside x, a loop runs from i=1 to i=5
3. For each iteration of the loop, the inner function closure is called within the current value of i seconds*/