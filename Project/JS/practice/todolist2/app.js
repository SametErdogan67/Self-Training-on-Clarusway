const inputDiv = document.querySelector(".inputDiv");
const input = document.querySelector("#input-text");
const addButton = document.querySelector("#addButton");
const contentDiv = document.querySelector(".contentDiv");

let calculate = 0;
addButton.addEventListener("click", calis);

function calis() {
  if (input.value != "") {
    calculate++;
    let createElement = document.createElement("p");
    let deleteButton = document.createElement("div");
    let finishButton = document.createElement("div");
    finishButton.classList.add("finishButton");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    finishButton.innerText = "Done";
    createElement.innerText = calculate + " . " + input.value;
    contentDiv.appendChild(createElement);
    createElement.appendChild(deleteButton);
    createElement.appendChild(finishbutton);
    input.value = "";

    deleteButton.addEventListener("click", function () {
      calculate--;
      contentDiv.removeChild(createElement);
    });
  }
}
