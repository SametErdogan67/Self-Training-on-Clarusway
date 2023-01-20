let todoInput = document.querySelector("#todo-input");
let addButton = document.querySelector("#added-button");
let deleteButton = document.querySelector(".close");

let myList = document.querySelector("#my-list");
let html = "";

let items = ["item1", "item2", "item3", "item4"];

items.forEach(function (item) {
  createItem(item);
});

myList.addEventListener("click", function (item) {
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
    toggleDeleteButton();
  }
});

document.querySelector("#btn-delete").onclick = function () {
  let elements = documnet.querySelectoAll(".checked");
  elements.forEach(function (item) {
    item.style.display = "none";
  });
};

function toggleDeleteButton() {
  let checkList = document.querySelectorAll(".list-group-item.checked");
  if (checkList.length > 0) {
    document.querySelector("#btn-delete").classList.remove("btn-delete");
  } else {
    document.querySelector("#btn-delete").classList.add("btn-delete");
  }
}

let btnCreate = document.querySelector("#btn-create");
btnCreate.addEventListener("click", function () {
  let item = document.querySelector("#txtItem").value;

  if (item === "") {
    alert("lütfen bir değer giriniz");
    return;
  }
  createItem(item);
  event.preventDefault();
});

function createItem(item) {
  let li = document.createElement("li");
  let t = document.createTextNode(item);

  li.className = "list-group-item";
  li.appendChild(t);
  myList.appendChild(li);

  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
    li.classList.remove("checked");
  };
}
