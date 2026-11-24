//Program to find Reverse of a string without using built-in meathod ?
const findReverse = (smapleString) => {
    let reverse = "";

    for(let i = smapleString.length - 1; i >= 0; i--){
        reverse += sampleString[i];
    }
    console.log(reverse);
};

findReverse("Hello I am Ayush Kumar");
