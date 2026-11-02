//Guess the output of the code ?
let output = (function(x){
  //  delete x;
    return x;
})(3);

/*Output: 3
Let me break it down for you:
1. The code defines an immediately invoked function expression (IIFE) that takes a paramter x.

2. Inside the function, delete x; is called. However, delete operation is used to delete properties from objects, not varaibles. When u try to delete a varaible, it dosen't actually delete the varaible itself, but it's syntactically incorrect and may not have any effect depending on the context (in strict mode, it throws an error). So, delete x; dosen't do anything in this case

3. Finally, the function return x. Since x was passed as 3 when calling the function (function(x)(...))(3), it returns 3.

4. The retured value is assigned to the variable output

5. console.log(output); then logs the value of output, which is 3*/