function inv(obj){
    let inverted = {};
    for(key in obj){
        inverted[obj[key]] = key;
    }
    return inverted;
}

const student = {
    name : "Ayush",
    role : "Student",
    age : 18
}

console.log(inv(student));