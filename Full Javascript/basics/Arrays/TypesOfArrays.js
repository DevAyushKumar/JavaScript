//Array literal 
const fruits = ["Apple", "Banana", "mango"];

//Array constructor
const arr = new Array(5,10);

//Arrya.of
function createarray(...args){
    return Array.of(...args);
}

//Array.from
const newArray = Array.from("Hello");