const matrix = [[1,2], [3,4]];
const copy = structuredClone(matrix);
copy[0][0] = 99;

console.log(matrix);
console.log(copy);