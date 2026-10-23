/*What are promisees in javascript ?

-> Promise is an obejct which represents the eventual completion or failure of an asynchronous operation in javascript 

-> At any point of time, promise will be in any of these below states
fulfilled : action relaated to promise in succeded
rejected : action related to the promise is failed
pending : promise is neither fulfilled nor rejected
settled : promise has been fulfilled or rejected

-> Promise can be consumed be registering the functions using .then() and .catch() meathods

promise constructor : will take one argument which is a callback function. This callback function takes 2 arguments resolve and reject.

If performed operations inside callback function wents well then we will call resolve() and if does not go well then we will call reject()*/
let promise = new promise(function(resolve,reject){
    const x = "ayush";
    const y = "ayush";

    if (x == y){
        resolve("valid")
    } else {
        let err = new Error("Invalid")
        reject(err)
    }
})
promise.then((response) => {
    console.log("success", response)
}).catch((err) => {
    console.log("failed",err)
})