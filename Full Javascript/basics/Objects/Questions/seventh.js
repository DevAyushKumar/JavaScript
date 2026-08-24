function keyAndValue(obj){
    for(let i in obj){
        console.log(`key is ${i} and value is ${obj[i]}`);
    }
}

const person = {
    name : "Ayush kumar",
    age : 18,
    role : "Student"
}

keyAndValue(person);