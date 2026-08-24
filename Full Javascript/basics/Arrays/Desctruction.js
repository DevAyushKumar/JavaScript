//Array destruction
const arr = [12,23];
const [width, height] = arr;
console.log(arr);
console.log(width, height);

//Spread operator
const mechanicalParts = ["Springs", "gears"];
const electricalParts = ["Wires", "resistors"];
const fullKit = [...electricalParts, ...mechanicalParts];
console.log(fullKit);

//Rest operator
const medals = ["First", "Second", "Third", "Fourth", "Fifth"];
const [gold, silver, ...theRest] = medals;
console.log(theRest);

//Multidimesional array
const ticktak = [
    ['X', 'O', 'X'],
    ['O', 'X', ' '],
    [' ', ' ', 'O']
];
console.log(ticktak[1][1]);