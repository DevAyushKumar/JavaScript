function Inv(obj){
    const inverted = {};
    for(let key in obj){
        inverted[obj[key]] = key;
    }
    return inverted;
}

console.log(Inv({name : "Ayush kumar"}));