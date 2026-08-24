function student(name,age){
    return {
        name,
        age
    };
};
const s1 = student("Ayush", 18);

console.log(s1.name);
console.log(s1["name"]);
console.log(s1.age);
console.log(s1["age"]);