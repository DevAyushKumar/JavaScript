function count(){
    console.log(this.length)
}

let arr=[count,1,2,3]

console.log(arr);
arr[0];
count();