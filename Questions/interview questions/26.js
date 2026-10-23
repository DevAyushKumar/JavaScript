/*What is generator function in javascript ?

-> A generator function is a function which can be paused and resumed at any point during execution 
-> They are defined by using function* and it contains one or more yield expressions
-> The main meathod of generator is nect(). when called, it runs the execution until the nearest yield
-> It return an object which contains 2 properties, i.e, done and value
-> done: the yielded value
-> value: true if function code has finished. else false. */

function generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const generator = generatorFunction()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())