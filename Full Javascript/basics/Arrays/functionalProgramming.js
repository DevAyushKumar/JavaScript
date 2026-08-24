//for each and map
const pricing = [10,20,30,40,50];
pricing.forEach(price => console.log(`price is ${price}`));

const doublePrices = pricing.map(price => price * 2);
console.log(doublePrices);

//filter
const users = [
    {name : 'Jhon', active : true},
    {name : 'Jane', active : false}
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

//reduce
const cart = [
    {product : "Laptop", price : 10000},
    {product : "Mouse", price: 50}
];
const totalBill = cart.reduce((total,item) => total + item.price, 0);
console.log(totalBill);

//Sort
const numbers = [1,23,45,67,90];
numbers.sort((a,b) => a-b);
console.log(numbers);

numbers.sort((a,b) => b-a);
console.log(numbers);