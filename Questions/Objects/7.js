function values(obj){
    for(keys in obj){
        console.log(`${keys} and the value is ${obj[keys]}`);
    }
}

const stud = {
    name : "Ayush",
    age : 18,
    city : 'Ranchi',
    role : "Student"
}

values(stud);