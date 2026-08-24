const func = {
    name : "Ayush",
    greet : function(){
        console.log("My name is: ",this.name);
    }
}

let student = Object.create(func,{rollNo: {value: 10}});

student.greet();
