Javascript is dynamic language.

Variables in js:

Primitives data types(string, integer, boolean, null, undefined):
 => when you put some value in javascript but do not assign value then it is assigned undefined.
 => when you want to put some value but you want it to be empty then assign it to null.
 => null gives object when its type is asked.

Referacne data types(objects, arrays, functions):
 => Its a basically a pair of key value pair.
 => we can asses it using two types:
 1. Dot notation: console.log(person.name);
 2. Bracket notation: console.log(person['name']);

Difference between value types and referance types:
 => when we assign the value of one to another in value types and then change the main value the other one where the value is assigned will not be channged as the value of main is copied.
 => In referance types when we do the same the assigned value will also change as it referances to the original value not a copied value.

Arrays:
 => Arrays are actually objects
 => stored using const name ={'Ayush', 18, 2204, null};

Functions:
 => when u want to do some task in a repeated manner.

How javascript works:
 => The environment wehere the code is executed is called execution context.
 => Everytime you run a code or create a javascript code it is executed in GLOBAL EXECUTION CONTEXT(GEC).
 => Everytime you create a new funtion a new execution context is created which is added to the callstack.
 
 2 main component in execution context:
   1. Varible environmnet (before running the code):
     => Memory in alloacted to the variables and functions.
     => This phase is called memory phase.
     => Only memory is alloacted in this phase.

    2. Code phase:
     => It is executed line by line in single threaded synchronous manner.
  
  In memory phase the memory for the object is alloted for the variables and the functions and then the code phase starts in which the code starts running in synchronus manner. So if a variable is used before it is declared then its value will be undefined but after the the variable is declared, it will receive its value.

  If you extract functions and use them before dclaring them then it is known as hoisting.

let, var and const: 
  => const: wherever you want constant value, it cannot be changed or updated. It is initialized with <value unavailable>(temperal dead zone).

  => var: where

  => let: 

  => use either use const or let, avoid using var as const and let are not in global and cannot be accessed before initializing them.

  => const and let are block scoped and const is function scoped.

Lexical scope: Lexical scope in javascript means that the accessibility of variables is determined by where they are written in the code, not by where a function is called.

  => We can access the global scope inside local scope but we cannot access the local in global scope.

Functions in details:
  => Functions can be assigned to variables.
  => Functions can be passed as a argumnet.
  => Functions can be stored in a data scructure as well.
  => Functions are called first class citizens in javascript.

    => Functions as an argument:
    example: function sum(a,b){
      return a+b;
    }
            function diff(a,b){
              return a-b;
            }

            function operate(operationfunc, a, b){
              return operationfunc(a,b);
            }

            console.log(operate(sum, 2, 3));
            console.log(operate(diff, 2,3));

    => A higher order function is a function that takes one or more function as an argument or return a function as its result.

  arrow function: It is just a different way of writing the function.
  example: let sum = (a,b) => a+b;
           or let sum = (a,b) => a+b;

    Functions returned from another functions:
    Closure = function with lexical scope. Having too much closure can have memory leaks.

Note:
=> let and const are not global scope. Var is not a global scope.

=> We can access the var before declaring but when we try to do the same with the let and const it gives referance error as we will be in a temporal dead zone, this happens because the var is initialized with undefined as let and const are not initialized with undefined.

Non blocking behaviour/ asynchronous operations:
1. callbacks:
  => It can be called automatically after a certain amount of time of after something is completed.

  CallbackHell/pyramid of doom:
    => asycncoperation1(arg1, (result1) => {
          asyncoperation2(result1, (result2) => {
            asyncoperation3(result2, (result 3)
          => {
            //More nested callbacks
            asyncoperations(resul3, (result4) => {
                //and so on
            })
          });
        });
      });  
    
Promises:
  =>  It has 3 stages, pending, fulfilled and rejected.
  => example: function getdata(){
    return new promise{(resolve, reject)
    => {
      setTimeout(() => {
        resolve('data fetched');
      }, 5000);
    }};
  }

  getdata()
        .then(result => {
          console.log(result);
        })
        .catch(error)