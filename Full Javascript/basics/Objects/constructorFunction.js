function student(name, age){
    this.name = name;
    this.age = age;
};

const s1 = new student("Ayush", 18);

console.log(s1.name);
console.log(s1["name"]);
console.log(s1.age);
console.log(s1["age"]);