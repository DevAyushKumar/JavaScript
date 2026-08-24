let studentObj = {
    name : "Ayush kumar",
    rollNo: 10,
    role : "Student"
};
console.log(studentObj);

const student = new Object();
student.name = "Ayush kumar";
student.age = 18;

console.log(student);

let teacher = {
    name : "Anuranjan"
}
let teachesIn=Object.create(teacher);
console.log(teachesIn.name);