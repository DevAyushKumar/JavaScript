/*What is prototype in javascript ?
If we want to add propeerties at later stage to a function which can be accessiable across all the instances. Then we will be using prototype */

function student(){
    this.name = "ayush",
    this.exp = "10"
}
student.prototype.company = "Google"

let std1 = new student()
std1.exp = "9"

let std2 = new student()
std2.exp = "10"

console.log(std1)
console.log(std2)