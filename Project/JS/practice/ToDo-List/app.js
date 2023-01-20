let addForm = document.querySelector(".add");
let list = document.querySelector(".todos");
let trashIcon = document.querySelector(".delete");
let searchInput = document.querySelector("#input");

const createElement = (input) => {
  const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="text-primary">${input}</span>
    <i class="fa-solid fa-trash-can delete text-primary"></i>`;
  list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = addForm.add.value.trim();
  //   console.log(input);
  if (input.length) {
    createElement(input);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
