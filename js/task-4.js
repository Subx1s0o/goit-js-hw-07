const form = document.querySelector(".login-form");
const inputEmail = form.elements["email"];
const inputPassword = form.elements["password"];

const user = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputEmail.value.trim() === "" && inputPassword.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    user.email = inputEmail.value;
    user.password = inputPassword.value;
    form.reset();
    console.log(user);
  }
});
