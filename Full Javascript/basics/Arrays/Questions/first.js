const arr = [12,34,67,34,89,90];
function large(arr){
    return arr.reduce((acc, ele) => {
        return Math.max(acc,ele);
    })
}

function small(arr){
    return arr.reduce((acc, ele) => {
        return Math.min(acc,ele);
    })
}

console.log(large(arr));
console.log(small(arr));
