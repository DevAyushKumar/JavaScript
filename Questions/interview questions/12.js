/*What are the differences between the map and set ? 
Map:- 
Map is the collection of key value pairs
Map is two dimensional */
let data = new Map()
data.set("name","ayush")
data.set("id","1")
for(let item of data){
    console.log(item)
}
/* new Map[(iterable)] - creates the map, with optional iterable (e.g array) or [key,value] pairs for initialization

map.set(key,value) - stores the value ny the key, returns the map itself

map.get(key) - returns the value by the key, undefined if key dosen't exist in map

map.has(key) - returns true if the key exists, false otherwise 

map.delete(key) - removes the element by the key, returns true if key existed at the moment of the cell, otehrwise false 

map.clear() - removes everything from the map

map.size() - removes the current element count*/



/*Set
Set is a collection of unique values
Set is one dimensional */
let data1 = new Set();
data1.add(1)
data1.add("Ayush")
for (let item of data1){
    console.log(item)
}
/*new Set([iterable]) - creates the set, and if an itterable object is provided (usually an array), copies the values from it into a set

set.add(value) - adds a values, returns the set itself

set.delete(value) - removes the values the value, return true if value existed at the moment of the call, otherwise false

set.has(value) - returns true if the value exists in the set, otherwise false 

set.clear() - removes everything from the set

set.size(0 - is the element count*/