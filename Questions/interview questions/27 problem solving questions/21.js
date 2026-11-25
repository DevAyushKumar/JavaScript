//Write a javascript function that reverses the order of words in a sentance without using the built-in reverse() meathod.

const reverseWords = (sampleString) => {
    let reversedSentence = "";
    let word = "";

    for(let i=0; i<sampleString.length; i++){
        if(sampleString[i] !== ' '){
            word += sampleString[i];
        } else {
            reversedSentence = word + ' ' + reversedSentence;
            word = "";
        }
    }
    reversedSentence = word + ' ' + reversedSentence;

    console.log(reversedSentence.trim());
};
reverseWords("chatGPT is awesome");

function reveseWords(sentence) {
    let words = [];
    let wordStart = 0;
    for(let i=0; i<sentence.length; i++) {
        if(sentence[i] === ' '){
            words.unshift(sentence.substring(wordStart, i))
            wordStart = i + 1;
        } else if(i === sentence.length - 1){
            words.unshift(sentence.substring(wordStart, i))
        }
    }

    return words.join(' ');
}

const sentence = "ChatGpt is awesome";
console.log(reverseWords(sentence));