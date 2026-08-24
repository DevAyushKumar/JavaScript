const person = {
    greet(){
        console.log("Hello");
    }
}
const student = Object.create (person);

student.greet();
console.log(student.greet());

//Will know more about it in akshay sainani video