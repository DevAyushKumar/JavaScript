//Given two strings. Find if one string can be formed by rearranging the letters of other string
/*Inputs and Outputs:
"aaz","zza" => false
"qwerty","qeywrt" => true */

function isStringCreated(str1,str2) {
    if(str1.length !== str2.length) return false
    let freq = {};

    for(let val of str1){
        freq[val] = (freq[val] || 0) + 1;
    }

    for(let val of str2){
        if(freq[val]){
            freq[val] -= 1;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isStringCreated('Ayush','Meera'))
