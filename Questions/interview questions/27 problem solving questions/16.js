//Write logic to get unique objects from below array ?
/* I/P: [{name: "sai"},{name:"Nang"},{name:"sai"},{name:"nang"},{name:"111111"}]
O/P: [{name:"sai"},{name:"Nang"},{name:11111}] */

function getUniqueArr(array){
    const uniqueArr = [];
    const seen = {};
    for(let i=0; i<array.length-1; i++){
        const currentItem = array[i].name;
        if(!seen[currentItem]){
            uniqueArr.push(array[i]);
            seen[currentItem] = true;
        }
    }
    return uniqueArr;
}

let arr = [{name:"Ayush"},{name:"Meera"},{name:"Ayush"}]
console.log(getUniqueArr(arr))