/*What are the different types of errors in javscript ?
-> Syntax errors: These aree occured when code is not written accordingly to the javascript syntax rules 
eg: let x=;

-> Referance errors: These occurs when we refer any variables or meathods that does not exists.
let val = y;
function x(){
data ()
}

-> Type errors: These errors occurs when operations is performned on the value of wrong datatype
try{
null.f();
} catch(e) {
 console.log(e);
}
 
Range errors: These errors occurs when the value is not present in allowed range. 
try{
new array(-1);
} catch (e) {
 console.log(e);
}
Eg2: if (num < 30) throw new RangeError("Wrong number");
RangeError: wrong number

Eval or evaluation errors: These errors occur in eval functions. Not commonly used in modern browsers
try {
eval('eval'("invalid code")');
} catch(e) {
 console.log(e);
}
 
URI errors: These errors occurs when wrong characters used in URI functions 
console.log(decodeURI("https://www.eductive.io")
console.log(decodeURI("%sdfk"));
decodeURIComponent('%');*/