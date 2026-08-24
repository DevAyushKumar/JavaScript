function val(obj){
    return Object.entries(obj).reduce((max, [keys,value]) => value > obj[max] ? keys:max);
}
console.log(val({"Ayush" : 100, "Rishu" : 10}))