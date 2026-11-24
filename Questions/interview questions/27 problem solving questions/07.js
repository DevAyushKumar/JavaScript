//Write a JavaScript function to check if the given number is prime 
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for(let i=2; i<=Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(17));
console.log(isPrime(19));
