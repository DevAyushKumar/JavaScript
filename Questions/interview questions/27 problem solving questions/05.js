//Program to find longest word in a given sentences ?
const findLongestWord = (sentence) => {
    let wordsArray = sentence.split(" ");
    let longestWord = " ";

    for(let i = 0; i < wordsArray.length; i++){
        if(wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
    console.log(lengestWord);
}


findLongestWord("Hi I am Ayush I am UI Developer");