//Reversing a string safetly
function reverseString(str){
    return [...str].reverse().join("");
}

//Truncate with ellipses
function truncate(str,max){
    return str.length > max ? str.slice(0,max) + "..." : str;
}

//Capitalize first letter
function capatalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Title case
function titleCase(str){
    return str
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

//slugify
function slugify(str){
    return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
console.log(slugify("  Hello, World!  How are You?  "))