function longest(str){
    let count = {};
    let res = "";
    for(let i of str){
        count[i] = (count[i] || 0) + 1;
    }
    for(let char of str){
        if(count[char] === 1){
            res += char;
        } else {
            break;
        }
    }
    return res;
}

const char = "ABCDEEERRGRW";

console.log(longest(char));