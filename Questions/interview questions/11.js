/*What is dectructing ?
It is introduced in Es6 
It allows us to assign the object properties and array values to distinct variables */
const user = {
    "age" : 10,
    "name" : "shrikrishna"
}

const {age,name} = user;
console.log(age,name)

const [a,b] = [1,2]
console.log(a,b)

