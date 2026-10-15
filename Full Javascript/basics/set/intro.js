/*
Set is a collection of unique values
Set is one dimensional 
new set([iterable]) - creates the set and if an iterable object is provided (usually an array), copies values from it into the set 
set.add(value) - adds a value, returns the set itself
set.delete(value) - removes the value, returns the true if value existed at the moment of the call, otherwise false
set.clear() - removes everything from the set 
set.size - is the element count
*/

let data = new Set()
data.add(1);
data.add("sarishika");
for(let item of data){
    console.log(item)
}