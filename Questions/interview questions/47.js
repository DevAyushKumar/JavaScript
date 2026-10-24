/*
1. What is this in javascript ? 
-> This refeers to the object that is currently executng the code

2. What is the value of this in global scope ?
-> Its a global object, its value can be global or window. It depends on where you are running javscript code (like browser or node environment etc)

3. I will usee non strict mode. Now if i use this inside a function, what will be the output ?
-> Its a global object
In non strict mode, when een this keyword value is null or undefined, javascript will replace it's value with global object (Due to this substitution)

4. In strict mode, what will the value of this inside a function ?
*/
function x(){
    console.log(this)
}
/* In strict mode, the value of this will be undefined 

5. Now In strict mode, If i call above function using window.x() then what is the result of this ?*/
function y(){
    console.log(this)
}
window.y()
/* It will log window object 

6. What will be the value of this inside object meathod below ?*/
let obj = {
    x : "hello",
    y : function(){
        console.log(this.x)
    }
}
obj.z()
/*It will print Hello because, when even we are inside the meathod, the value of this keyword is the object where this meathod is present. 

7. What will be the this value if it's logged inside arrow function ? */
let obj1 = {
    x : "Hello",
    y : () => {
        console.log(this)
    }
}
obj1.z()
/*It will print window becuase, arrow function does not have their own this binding. The take the value of their lexical environment where they are enclosed

8. What will be this value if i use in button element ?

<button oneclick = "alert(this)"> click </button>*/