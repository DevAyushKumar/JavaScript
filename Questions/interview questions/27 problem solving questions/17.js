//Write a JavaScript program to find the largest element in a nested array

function findLargestElement(arr){
    let max = Number.NEGATIVE_INFINITY;

    function transverse(arr){
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                transverse(arr[i]);
            } else {
                if(arr[i] > max) {
                    max = arr[i]
                }
            }
        }
    }
    transverse(arr);

    return max;
}

const nestedArray = [[3,4,58],[709,8,9[10,11]]];
console.log("Largest element: ",findLargestElement(nestedArray))