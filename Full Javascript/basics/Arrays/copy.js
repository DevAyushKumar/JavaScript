//Shallow copy
//Have the same memory location
const original = [{name : "Ayush"}, {name: "Rishu"}];
const shallow = [...original];
console.log(shallow);
console.log(original);

//Deepcopy
//copies everything and not have a same memory location
const deepcopy = crypto.randomUUID ? structuredClone(original):
JSON.parse(JSON.stringify(original));
deepcopy[0].name = "Alice";
console.log(original);
console.log(deepcopy);