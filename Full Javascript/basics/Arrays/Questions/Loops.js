//Interview question
function custompop(arr){
    if(arr.length === 0) 
        return undefined;
    const lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
}

//Question
const stock = [12, 45, 0, 78, 3];
const availableStock = [];
for(let i=0; i < stock.length; i++){
    if(stock[i] > 0){
        availableStock.push(stock[i]);
    }
} 
console.log(availableStock);