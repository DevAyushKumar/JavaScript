const fruits = ["Apple", "Mango", "Apple", "Mango", "Mango"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);