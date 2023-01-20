const input = document.getElementById("input");
const addButton = document.getElementById("button");
const list = document.querySelector(".list");
let container = document.querySelector(".container");

let li = document.querySelector("li");

button.addEventListener("click", (e) => {
  if (input.value) {
    if (e.target.id === "button") {
      list.innerHTML += `<li class="text"> <i class="fa-solid fa-check-double"></i> <p>${input.value}</p>
    <i class="fa-regular fa-trash-can"></i>
    </li>`;
    }
  }

  if (e.target.classList.contains("fa-check-double")) {
    e.target.classList.toggle("color");
    console.log();
    console.log(e.target);
    e.target.nextElementSibling.classList.toggle("through");
  }

  if (e.target.classList.contains("fa-trash-can")) {
    // e.target.style.color = "red";
    e.target.parentElement.style.display = "none";
  }

  input.value = "";
});
