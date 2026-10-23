/*Whats the difference between object.freeze() vs object.seal() 

Object.freeze:
Will make the object immutable (prevents the addition of new properties and prevents modification of existing properties)*/
let data = {
    a : 10
}
Object.freeze(data)
data.a = 20;
data.c = 30;
console.log(data)

//Object.seal():
//Will prevent the addition of new properties but we can modify existing properties
let data1 = {
    a : 10
}

Object.seal(data1)
data1.a = 20
data1.c = 30
console.log(data1)
