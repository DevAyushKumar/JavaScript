//Different ways to create object in javascript ?

//Object literal
let userdetail = {
    name : "Ayush",
    city : "Ranchi"
}

//Object constructor
let userdetail1 = new Object()
userdetail1.name = "ayush",
userdetail1.city = "ranchi"

//object.create()
//This is used when we want to inherit properties from an existing object while creating a new object 
let animal = {
    name : "cat"
}
let cat = Object.create(animal)

//objct.assign()
//This is used when we want to include properties from multiple other objects into new object we are creating 
let lesson = {
    lessonname : "Data structures"
}

let teacher = {
    teacher : "rishu"
}

let course = Object.assign({}, lesson, teacher)