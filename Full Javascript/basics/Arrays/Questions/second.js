const arr = [1,2,3,4,5,6,7,8,9,10];
function rev(arr){
    let revArray = [];
    for(let i=arr.length-1; i>=0; i--){
        revArray.push(arr[i])
    }
    return revArray;
}

console.log(rev(arr));