/*Slice vs splice in javascript ?

Slice:
If we want to create an array that is subset of existing array with out changing the original array, then we will use slice */
let arr = [1,2,3,4]
let newarr = arr.slice(1,3)
console.log(arr)
console.log(newarr)

/*Splice:
If we want to add/delete/replace the existing elements in the array, then we will use splice */
let arr1 = [1,2,3,4,5,0,10]
let newarr1 = arr1.splice(2,4,8,9)
console.log(arr1)
console.log(newarr1)