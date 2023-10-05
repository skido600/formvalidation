let username = document.getElementById("username");
let email = document.getElementById("email");
let form = document.querySelector("form");
let password = document.getElementById("password");
let number = document.querySelector("#number");
let error = document.querySelector(".error");
let posi = document.querySelector(".posi");
let posi1 = document.querySelector(".posi1");
let img = [];
img[0] = "visibility_FILL0_wght400_GRAD0_opsz24.svg";
// console.log(username);
//username
let validtxt = /[a-zA-Z]/;
username.addEventListener("input", () => {
  if (username.value == "") {
    error.textContent = "user name cant be empty or less than two";
  } else if (!validtxt.test(username.value)) {
    error.textContent = "username must be valid";
  } else if (username.value.match(validtxt)) {
    error.textContent = "";
  }
  //ends
});
//functions
function formsubmit() {
  if (username.value == "") {
    error.textContent = "username cant be empty";
  }
}
//ends
username.addEventListener("focus", () => {
  return (error.textContent = "");
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  formsubmit();
  submitemail();
  numberval();
  passme();
});
//emails
let emailex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
email.addEventListener("input", () => {
  if (email.value == "") {
    email.nextElementSibling.textContent = "Email cant be empty";
  } else if (email.value.match(emailex)) {
    email.nextElementSibling.textContent = "";
  } else if (!email.value.match(emailex)) {
    email.nextElementSibling.textContent = "Email is not valid";
  }
});
email.addEventListener("focus", () => {
  return (email.nextElementSibling.textContent = "");
});
function submitemail() {
  if (email.value == "") {
    email.nextElementSibling.textContent = "Email cant be empty";
  }
}
//ends
//number
// let number=/[0-9]/
let numval = /^\+(\d{1}\-)?(\d{1,3})$/;
let numtext = /[a-zA-Z]/;
number.addEventListener("input", () => {
  if (number.value == "" || number.value.length > 12) {
    number.nextElementSibling.textContent = "number is not valid";
  } else if (number.value.match(numtext)) {
    number.nextElementSibling.textContent = "number cannot contain alphabet";
  } else if (number.value.match(numval) || number.value.length === 12) {
    number.nextElementSibling.textContent = "";
  }
});
number.addEventListener("focus", () => {
  return (number.nextElementSibling.textContent = "");
});
function numberval() {
  if (number.value == "") {
    return (number.nextElementSibling.textContent = "number cannot be empty");
  }
}
//password
let pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
password.addEventListener("input", () => {
  if (password.value == "") {
    password.nextElementSibling.textContent = "password cant be empty";
  } else if (!password.value.match(pass)) {
    password.nextElementSibling.textContent =
      "password must contain atleast special char";
  } else if (password.value.match(pass)) {
    password.nextElementSibling.textContent = "";
  }
});
password.addEventListener("focus", () => {
  return (password.nextElementSibling.textContent = "");
});

function passme() {
  if (password.value == "") {
    password.nextElementSibling.textContent = "password cant be empty";
  }
}
posi.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
    
  }
});
