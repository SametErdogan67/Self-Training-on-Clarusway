const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    error(username, "username gerekli");
  } else {
    success(username);
  }
  if (email.value === "") {
    error(email, "email gerekli");
  } else if (!validateEmail(email.value)) {
    error(email, "düzgün bir mail adresi giriniz");
  } else {
    success(email);
  }
  if (password.value === "") {
    error(password, "password gerekli");
  } else {
    success(password);
  }
  if (rePassword.value === "") {
    error(rePassword, "repassword gerekli");
  } else {
    success(rePassword);
  }
});
