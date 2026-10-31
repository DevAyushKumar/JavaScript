//What's the output of the code
function func() {
    try {
        console.log(1)
        return 
    } catch (e) {
        console.log(2)
    } finally {
        console.log(3)
    } 
    console.log(4)
}
func()

/*Output: 1 and 3
1. The function func() is defined 
2. Inside the try block
-> console.log(1) is executed, printing 1 to the console
-> return is encountered, which immediately exits the function
3. The finally block is executed:
-> console.log(3) is executed, printing 3 to the console
Since, return is encountered withing the try block, the control exists the function immediately after console.log(1). The catch block is skipped because there are no errors, and the code in the finally block is executed regardless of whether an error occured or not.
So, when you run this code, it will only print 1 and 3 to the console. */