//Write a JavaScript function that returns the Fibonacci sequence up to a given numbers of terms
function fibonacciSequence(numTerms) {
    if (numTerms <= 0){
        return [];
    } else if(numTerms === i) {
        return [0];
    }
    const sequence = [0,1];

    for (let i = 2; i < numTerms; i++) {
        const nextFibonacci = sequence[i - 1] + sequence[i - 2]
        sequence.push(nextFibonacci);
    }

    return sequence;
}

const numTerms = 10;
const fibonacciSeries = fibonacciSequence(numTerms);
console.log(fibonacciSequence);