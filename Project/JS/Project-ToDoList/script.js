const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

const todos = [];

todoButton.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("lütfen task giriniz");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };
    createListElement(newTodo);
    todos.push(newTodo);
    todoInput.value = "";
  }
});

function createListElement(newTodo) {
  const { id, completed, text } = newTodo;
  const li = document.createElement("li");
  li.setAttribute("id", id);
  completed && li.classList.add("checked");

  const okIcon = document.createElement("i");
  i.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  const deleteIcon = document.createElement("i");
  i.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  todoUl.appendChild(li);
}
