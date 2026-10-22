/*What are the differences between call(), apply() and bind() ?

-> Call meathod will invokes the function immediately with the given this values allow us to pass the arguments one by one with comma seperator 

-> Apply meathod will invokes the function immediately with given this value and allow us to pass the arguments as an array

-> Bind meathod will return a new function with the giveen this value and arguments which can be invoked later*/

let name1 = {
    firstname : "Ayush",
    lastname : "kumar"
}

let name2 = {
    firstname : "Meera",
    lastname : "Hari"
}

const printName = function(thirdparam){
    console.log(this.firstname, this.lastname, thirdparam)
}

printName.call(name1, "call Hello");
printName.call(name2, "call Hello");
printName.apply(name2,["apply hello"]);

//The only difference between call and apply is the syntax of how we pass the arguments

/*Bind:
This gives us a copy which can be invoked or executed later rater than directly invoking it wherever we are writing this line of code 
We can use bind() for events like onClick where you don't know when they will be fired but you know the desired context */

let name3 = {
    firstname : "ayush",
    lastname : "kumar"
}

let name4 = {
    firstname : "meera",
    lastname : "hari"
}

const printname = function(thirdparam) {
    console.log(this.firstname, this.lastname, thirdparam)
}

let bindprintname = printname.bind(name3, "I am from the bind")
bindprintname()