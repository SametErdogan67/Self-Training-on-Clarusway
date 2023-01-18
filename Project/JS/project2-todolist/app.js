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
  if ((item.target.tagName = "li")) {
    item.target.classList.toggle("checked");
  }
});

let btnCreate = document.querySelector("#btn-create");
btnCreate.addEventListener("click", function () {
  let item = document.querySelector("#txtItem").value;
  console.log(item);

  if (item === "") {
    alert("lütfen bir değer giriniz");
  }
  createItem(item);
});

function createItem(item) {
  let li = document.createElement("li");
  let text = document.createTextNode(item);

  li.className = "list-group-item";
  li.appendChild(text);
  myList.appendChild(li);

  let span = document.createElement("span");
  let text1 = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text1);
  li.appendChild(span);

  span.onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
  };
}
