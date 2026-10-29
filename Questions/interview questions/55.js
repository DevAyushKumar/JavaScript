/*What is the difference between some and every in javascript ?
-> Some(): will check if atleast one of the element in the array satisfies the specified condition. It returns true if any element passes the condition. else returns false*/
const numbers = [1,2,3,4,5,6,7,8,9.10]
const someGreateerThan10 = numbers.some(number => number > 2)
console.log.apply(someGreateerThan10)

/*every(): will check if all the elements of the array satisfies the specified condition. it return true if all the elements satisfies the condition, else return false */
const number = [1,2,3,4,5,6,7,8]
const numberGreater = numbers.every(number => number > 10)
console.log(numberGreater)