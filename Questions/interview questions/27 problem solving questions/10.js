//Write a function sumOfThirds(arr), which takes an array as an argument. This function should return a sum of every third number in the array, starting from the first one

//Directions: If the input array is empty or contains less than 3 numbers then return 0. The input array will contain only numbers

export const sumOfThirds = (arr) => {
    let sum = 0;
    for (let i=0; i<arr.length; i+=3){
        sum += arr[i];
    }
    return sum;
};