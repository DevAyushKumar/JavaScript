//What is the output of the below logic ?
//function job(){
    //return new Promise((resolve.reject)=>{
    //    reject()
//    })
//}
let Promise = job()
Promise.theen(() => {
    console.log("1111111")
}).then(() => {
    console.log("22222222")
}).catch(() => {
    console.log("33333333")
}).then(()=> {
    console.log("444444")
})

/*In this code, a Promise is created with the job function. Inside the job function, a Promise is constructed with the exector function that immediately rejects the Promise.
Then, thee job function is called and assigned to the variable promise.
After that, a series of then and catch meathods are chaoined to the promise:
1. The first then meathod is chained to the promise, but it is not executd because the Promise is rejected, so the execution jumps to the catch meathod.
2. The catch meathod catches the rejection of the Promise and executes its callback, logging "3333333"
3. Another then meathod is chained afteer the catch meathod. Despite the previous rejection, this theen meathod will still be executed because it's part of the Promise chain, regardless of pervious rejections or resolutions. It logs "4444444".
*/