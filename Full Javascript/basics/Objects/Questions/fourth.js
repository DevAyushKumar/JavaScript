function mergeobj(obj1, obj2){
    const temp = {...obj1, ...obj2};
    return temp;
}

const obj1 = {name : "Ayush", age : 18};
const obj2 = {role : "Student", city : "Chennai"};

console.log(mergeobj(obj1,obj2));
