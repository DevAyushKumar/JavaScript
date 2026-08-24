function del(obj,prop){
    delete obj[prop];
    return obj;
}

const stud = {
    name : "Ayush",
    age : 18
};

console.log(del(stud,"age"));

let student = {
    name : "Ayush",
    age : 18,
    role : "Student",
    city : "Ranchi"
}

delete student.city;
console.log(student);