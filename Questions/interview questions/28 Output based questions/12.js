//what's the output of below code ?
const nums = [1,2,3,4,5,6,7];
nums.forEach((n) => {
    if( n%2 === 0 ) {
        //break;
    }
    console.log(n);
});

/*Explanation:
many of you might have thought the output to be 1,2,3,4,5,6,7 but "break" statement works only loops like for, while, do...while and not for map(), forEach(). They are essentially functions by nature which takes a callback and not loops. */