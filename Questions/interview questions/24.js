/*what is polyfill in javascript ?

-> A polyfill is a piece of code which provides the modern functionality to the older browsers that does not natively support it 

polyfill for foreach: */
let data1 = ["ayush", "kumar"]
data1.forEach((item, i)=> {
    console.log(item,i)
})
Array.prototype.forEach((callback) => {
    for(let i=0; i<= this.length-1; i++){
        callback(this[i], i)
    }
})

//polyfill for map:
let data2 = [1,2,3,4];
let output = data2.map((item, ix) => {
    return `${item}_hello`
})

Array.prototype.map = ((callback) => {
    let temp = [];
    for(let i=0; i<=this.length-1; i++){
        temp.push(callback(this[i]))
    }
    return temp;
})
console.log(output)