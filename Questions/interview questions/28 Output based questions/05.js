//What is the output of below logic ?
let a = 'jscafe';
a[0] = 'c';
console.log(a)

/*Output:
-> "jscafe"
-> Strings are immutable in javascript so we cannot change individual characters by index where as we can create a new string with desired modification as below
-> a = "cscafe"// output "cscafe" */