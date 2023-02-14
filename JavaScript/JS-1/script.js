// console.log(liElement);
// liElement.style.border = "2px solid red";

// const newLi = document.createElement("li");
// newLi.setAttribute("class", "sam");
// newLi.setAttribute("id", "sam");

// const text = document.createTextNode("Samet");

// newLi.appendChild(text);

// console.log(newLi);

// const list = document.querySelector(".list-ul");
// list.appendChild(newLi);

// event

// const clicked = document.querySelector(".btn");

// clicked.addEventListener("click", () => {
//   console.log("clicked");
// });

// document.querySelector("body").addEventListener("mousemove", (e) => {
//   document.querySelector("body").style.backgroundColor = `rgb(${
//     e.screenX % 255
//   }, ${e.screenY % 250}, ${(e.screenX + e.screenY) % 250})`;
//   document.querySelector(".container1").style.backgroundColor = `rgb(${
//     e.screenX % 200
//   }, ${e.screenY % 200}, ${(e.screenX + e.screenY) % 200})`;
//   document.querySelector(".container2").style.backgroundColor = `rgb(${
//     e.screenX % 175
//   }, ${e.screenY % 175}, ${(e.screenX + e.screenY) % 175})`;
//   document.querySelector(".container3").style.backgroundColor = `rgb(${
//     e.screenX % 150
//   }, ${e.screenY % 150}, ${(e.screenX + e.screenY) % 150})`;

//   document.querySelector(".container4").style.backgroundColor = `rgb(${
//     e.screenX % 120
//   }, ${e.screenY % 120}, ${(e.screenX + e.screenY) % 120})`;
// });

const sayilar = [1, 580, 2, 41, 41, 84, 8, 35, 3];

// sayilar.forEach((sayi) => {
//   console.log(`$(sayi)= sayi`);
// });

sayilar.filter((sayi) => {
  sayi > 40;
  console.log(sayi);
});
