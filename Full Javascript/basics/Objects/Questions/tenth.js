function decy(obj){
    const clone = JSON.parse(JSON.stringify(obj));
    return clone;
}

const data = ["Ayush", 18, "student"];
const data1 = {
    name : "Ayush kumar",
    age : 18,
    role : "Student"
}
console.log(decy(data1));