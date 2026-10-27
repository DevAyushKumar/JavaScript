/*What is the difference between shallow copy and deep copy ?

-> Shallow copy:
A shallow copy creates a new object or array and copies the references of the original elements. */
let originalArray = [1,2 [3,4]]
let shallowCopy = [...originalArray]

shallowCopy[2][0] = 100
console.log(originalArray)

/*-> Deep copy:
A deep copy creates a new object or array that has its own copies of the properties of the original object */
let originalarray = [1,2 [3,4]]
let deepcopy = JSON.parse(JSON.stringify(originalarray))
deepcopy[2][0] = 100;
console.log(originalarray)
