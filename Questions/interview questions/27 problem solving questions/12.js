//Find the max count of consecutive 1's in an array ?
const findConsecutive = (array) => {
    let maxCount = 0;
    let currentConsCount = 0;

    for(let i=0; i <= array.length - 1; i++){
        if(array[i] === 1){
            currentConsCount += 1;
            maxCount = Math.max(currentConsCount, maxCount);
        } else {
            currentConsCount = 0;
        }
    }
    console.log(maxCount);
}

findConsecutive([1,2,3,1,12,1,3,4,2,4,1,1,2,3,4,1])
