/*What is rst operator in javascript ?
rest operator is used to condense multiple elements into a single array or object
This is useful when we don't know how many parameters a function may receive and you want to capture all of them as an array*/
function example(...args){
    console.log(args)
}
example(1,2,3,4)