/*What is the difference between find vs findIndex ?

find:
It will return the first element of array that passes specified condition*/
function findMeathod(){
    let arr = [{id: 1, name: "ayush"}, {id: 2, name: "meera"}]
    let data = arr.find(x=> x.id == 2)
    console.log(data)
}

findMeathod()

//findIndex:
//It will return the index of first element of an array that passes the specified condition 

function find(){
    let arr1 = [{id:1, name: "Aysuh"}, {id:2, name: "meera"}]
    let data1 = arr1.findIndex(x=> x.id==2)
    console.log(data1)
}
find()