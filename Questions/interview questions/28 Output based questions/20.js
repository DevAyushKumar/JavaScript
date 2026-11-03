//What would be the output of the folloeing of the code?
function getName1(){
    console.log(this.name);
}
Object.prototype.getName2 = () => {
    console.log(this.name)
}
let personObj = {
    name : "Ayush",
    print:getName1
}
personObj.print()
personObj.getName2();

/*Output: Tony undefined

Explaination: getName1() function works fine because it's being called from personObj, so it has access to this.name property. But when while calling getnName2 which is defined under Object.prototype dosen't have any property named this.name. There should be name propeerty under prototype. Following is the code: */

function getName3(){
    console.log(this.name);
}
Object.prototype.getName4 = () => {
    console.log(Object.getPrototypeOf(this).name);
}
let personObj1 = {
    name:"Tony",
    print:getName3
}
peronsObj.print()
Object.prototype.name="Meera";
personObj.getName3();