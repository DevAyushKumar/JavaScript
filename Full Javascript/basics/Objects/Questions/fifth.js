function del(obj, property){
    delete obj[property];
    return obj;
};

const user = {
    name : "Ayush",
    age : 18,
    role : "Student"
};

console.log(del(user,"age"));