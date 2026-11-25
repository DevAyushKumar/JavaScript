//Write a javascript function that sorts an array of numbers in descending order
function quicksort(arr) {
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i=1; i<arr.length; i++){
        if(arr[i] >= pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)]
}

const arr = [3,1,4,1,5,9,2,6,5];
const sortedArr = quicksort(arr);
console.log(sortedArr);