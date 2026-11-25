//Write a function which converts string input into an object
/*StringToObject("a,b,c","someValue");
output -> {a:{b:{c:"someValue"}}} */
function stringToObject(str, finalValue){
    const keys = str.split('.');
    let result = {};
    let current = result;

    for(let i=0; i<keys.length; i++){
        const keys = keys[i];
        current[key] = (i === keys.length - 1) ? finalValue : str;
        current = current[key];
    }

    return result;
}

const output = stringToObject("a.b.c", "someValue");
console.log(output);