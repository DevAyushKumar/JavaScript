/*What is prototype inheritance in javascript ?
-> Prototype inheritance in javascript is the linking of prototype of a parent object to a child object so that we can share and utilize the properties of a parent class using a child class
-> The ES5 introduced two differnt meathods such as obejct.create() and object.getPrototype() */
let package = {
    version : "2.0",
};
let application = Object.create(package, {
    name : {value: "game"},
});
console.log(application);
console.log(Object.getPrototypeOf(application));