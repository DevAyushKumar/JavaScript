function check(obj){
    if(Object.keys(obj).length === 0){
        return "no keys present"
    } else {
        return "keys is present"
    }
}

const stud = {
    name : 'Ayush'
}

const student = {}
console.log(check(stud));
console.log(check(student));