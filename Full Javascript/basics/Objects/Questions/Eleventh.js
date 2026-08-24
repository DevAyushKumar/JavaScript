//Ways to alter data
//1st
const data1 = {a:1, b:2, c:3};
delete data1.a;
console.log(data1);

//2nd 
const data2 = {a:1, b:2, c:3};
let {a,b,...rest} = data2;
console.log(rest);

//3rd
const data3 = {a:1, b:2, c:3, d:4};
const result = Object.fromEntries(Object.entries(data3).filter(([key]) => key !== 'b'));
console.log(result);

//Ways to add data
//1st 
const data4 = {a:1, b:2, c:3};
data4.d = 4;
console.log(data4);

//2nd
const data5 = {a:1, b:2, c:3};
const newObj = {...data5, d:4};
console.log(newObj);

//3rd
const data6 = {a:1, b:2, c:3};
const result1 = Object.fromEntries([...Object.entries(data6), ["d",4]]);
console.log(result1);