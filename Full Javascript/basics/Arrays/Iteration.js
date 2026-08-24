//Traditiional iteration
const letters = Array.from("abcdefgh");
for(let i = 0; i < letters.length; i++){
    console.log(`Index ${i} : ${letters[i]}`);
}

//for of loop
for(const letter of letters){
    console.log(letter);
}
