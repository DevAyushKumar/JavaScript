//Find the smallest word in a given sentence ?
function findSmallestWord() {
    const sentance = "Find the smallest word";
    const words = sentance.split(' ');
    let smallestWord = words[0];

    for(let i = 1; i < words.length; i++){
        if(words[i].length < smallestWord.length){
            smallestWord = words[i];
        }
    }
    console.log(smallestWord);
}

findSmallestWord();