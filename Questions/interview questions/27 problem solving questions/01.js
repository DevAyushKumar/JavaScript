//Write a program to remove duplicates from an array ?
const removeDuplicate = (array) => {
    let uniqueArr = [];

    for (let i = 0; i <= array.length - 1; i++){
        if(uniqueArr.indexOf(array[i]) == -1){
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
};

function removeDuplicate(arr) {
    return Array.from(new Set(arr));
}

removeDuplicate([1,2,3,4,41,23,1,1,2,])