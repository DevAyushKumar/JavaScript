//concat
const a = [1,2];
const b = [3,4];
console.log(a.concat(b));

//join
const words = ["code", "Is", "life"];
console.log(words.join('-'));

//reverse
const word = [1,2,3,4,5];
const reverse = word.reverse();
console.log(reverse);

//fill
const emptyGrid = new Array(3).fill(0);
console.log(emptyGrid);

//flat and flatmap
const nested = [1,[2,[3]]];
console.log(nested.flat(2));

const sentences = ["Hello world", "Js rule"];
console.log(sentences.flatMap(s => s.split(" ")));

//copyWithin
const nums = [10,20,30,40,50];
nums.copyWithin(0,3,5);
console.log(nums);