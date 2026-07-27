//slice and splice
const original = ['A', 'B', 'C', 'D', 'E', 'F'];
const sl = original.slice(1,4);

const removed = original.splice(1,3, "NewTask", "Task1", "Task2");
console.log(original);
console.log(removed);