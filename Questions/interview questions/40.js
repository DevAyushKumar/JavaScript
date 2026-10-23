/*What are callbacks in javascript ?

A callback is a function which is passed as an argument to another function which can be execute later in the code 

Usecases:
-> setTimeOut
-> Higher order functions (like map, filter, forEach)
-> handling events (like click/key press events)
-> Handling asynchronous operations (like reading files, making http requests) */
function print(){
    console.log("print meathod")
}
function Hello(print){
    console.log("Hello meathod")
    print()
}

Hello(print)