function cop(obj){
    return JSON.parse(JSON.stringify(obj));
}

let org = {
    name : "Ayush",
    age : 18,
    role : "Student"
}

let dcop1 = structuredClone(org);
let dcop = cop(org);
dcop.age = 19;
console.log(org);
console.log(dcop);