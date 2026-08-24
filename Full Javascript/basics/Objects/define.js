const student = {
    name : "Ayush",
    age : 18,
    role : "Student"
};

Object.defineProperty(student,"age",{
    value : 10,
    writable : false, //False == Values not able to change
    enumberable : true, //will show in for .. in
    configurable : true //will be able to delete or redefine
});

Object.defineProperty(student,"role", {
    configurable : false
});

delete student.role;
student.age = 19;
console.log(student);