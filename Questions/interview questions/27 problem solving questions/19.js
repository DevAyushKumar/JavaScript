//Write a javaScript function that sorts an array of numbers in ascending order

function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];

    const left = [];
    const right = [];

    for(let i=1; i<arr.length; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    const sortedLeft = quicksort(left);
    const sortedRight = quicksort(right);

    return sortedLeft.concat(pivot, sortedRight);
}

const unsrotedArray = [5,2,9,1,3,6];
const sortedArray = quicksort(unsrotedArray);
console.log(sortedArray);