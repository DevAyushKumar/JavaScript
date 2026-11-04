//Ouput of the code ?
var a = 1;
function data() {
    if(!a) {
        var a = 10;
    }
    console.log(a);
}
data();
console.log(a);

/*Explanation:
va a = 1
function toTheMoon() {
var a; //var has function scope, hence it's declaration
if(!a) {
a = 19;
}
console.log(a): //10 precendece will be given to local
}
console.log(a); //1 refers to the 'a' defined at the top */
