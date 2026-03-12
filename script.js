document.getElementById("studentForm").addEventListener("submit", function(event){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let age = document.getElementById("age").value;
let course = document.getElementById("course").value;

let gender = document.querySelector('input[name="gender"]:checked');

if(name === ""){
alert("Please enter your name");
event.preventDefault();
return;
}

if(email === ""){
alert("Please enter your email");
event.preventDefault();
return;
}

if(age === ""){
alert("Please enter your age");
event.preventDefault();
return;
}

if(!gender){
alert("Please select your gender");
event.preventDefault();
return;
}

if(course === ""){
alert("Please select a course");
event.preventDefault();
return;
}

alert("Form submitted successfully!");

});