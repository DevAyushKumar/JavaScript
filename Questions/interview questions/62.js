/*What are the main advantages of arrow functions ?
-> Arror functions allow us to write shorter and concise syntax and reduces the size of code.
-> It increases the readility of code. */
const square = x => x*x;
/*-> Arrow functions will solve thee common pain points of this binding in traditional functional expression. Arror functions does not have their own this. It will take the this value from the parent's scope(i.e, code that contains the arror functions the code arrow function). For example, look at the setTimeout function below */
//ES5
var obj = {
    id : 42,
    counter: function counter(){
        setTimeout(function() {
            console.log(this.id);
        }.bind(this), 1000);
    }
};
obj.counter();

//ES6
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};
obj.counter()
/*ES6 arrow functions can't be bound to a this keyword, so it will lexically go up a scope, and use the value of this in the scope in which it was it was defined */