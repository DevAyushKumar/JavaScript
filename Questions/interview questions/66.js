/*Plain javascript basic questions:
Write code to changes style of div ? */
let element = document.getElementById("newele");
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
//or
let elem = docuemnt.getElementById("newele");
elem.setAttribute("style", "color:white; background-color");

//Write code to add class to div ?
var element = document.getElementById("myDiv");
element.classList.add("newClass");