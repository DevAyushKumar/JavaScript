const obj = [
    ["a" , 1],
    ["b" , 2],
    ["c" , 3],
    ["d" , 4],
    ["e" , 5]
]

let new1 = Object.fromEntries(obj);

console.log(new1);

//Delete Object
delete new1.a;
console.log(new1);

const a = {a:1,b:2,c:3,d:4};
let {b,...rest} = a;
console.log(rest);

let result = Object.fromEntries(Object.entries(a).filter(([key]) => key !== "a"));
console.log(result);

//Insert object
const obj1 = {a:1,b:2,c:3,d:4};
obj1.e = 5;
console.log(a);

const obj2 = {a:1,b:2,c:3,d:4};
const objn = {...rest,e:5};
console.log(objn);

const obj3 = {a:1,b:2,c:3,d:4};
const objnew = Object.fromEntries([...Object.entries(obj3)],["e",5]);
console.log(objnew);