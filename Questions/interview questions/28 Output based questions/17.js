//Guess the output of the code
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    },1000 + i);
}

/*Output: 3 3 3
This might seem counterintuitive at first glance, but it's due to how JavaScript handles closures and asynchronous excution.
Here's why:

1. The for loop initialized a variable 1 to 0

2. It sets upa timeout for i milliseconds plus the current value of i, which means the timeouts will be 1000, 1001 and 1002 milliseconds.

3. After setting up the timeouts, the loop increments 

4. The loop checks if i is still less than 3. Since it's now 3, the loop exits.

When the timeouts execute after their respective intervals, they access the varaible i from the outeer scope. At the time of execution, i is 3 because the loop has already finished and incremented i to 3. So, all three timeouts log 3.*/