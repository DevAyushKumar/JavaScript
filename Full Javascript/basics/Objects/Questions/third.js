function high(obj){
    return Object.entries(obj).reduce((max,[Key ,value]) => (value > obj[max] ? key : max),
    Object.keys(obj)[0]);
}
const obj = {
    ayush : 90,
    rishu : 50
};
console.log(high(obj));