function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function operate(operationFunc, a, b){
    return operationFunc(a, b);
}

console.log(operate(sum, 5, 6));
console.log(operate(diff, 5,6));

//operate is higher oder function