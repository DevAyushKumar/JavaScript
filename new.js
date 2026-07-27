const arr = [1,2,3,4,5]

Array.prototype.MyArr = function(cb){
    let newArr = []
    for(let i=0; i<this.length; i++){
        newArr.push(cb(this[i]))
    }
    return newArr
}

function Func(val){
    return val * 2
}

console.log(arr.MyArr(Func))