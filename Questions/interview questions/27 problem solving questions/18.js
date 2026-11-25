//Given a string, write a javascript function to count the occurance of each character in a string

function countCharaacter(str) {
    const charCount = {};
    const len = str.length;

    for(let i=0; i<len; i++){
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

const result = countCharaacter("Hellooo")

console.log(result);