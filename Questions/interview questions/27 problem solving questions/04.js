//Find the factorial of given number ?
const findFactorial = (num) => {
    if (num == 0 || num == 1){
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
};

console.log(findFactorial(4));
