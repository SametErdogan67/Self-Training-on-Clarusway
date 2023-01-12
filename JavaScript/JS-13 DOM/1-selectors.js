console.log("***** SELECTORS *****");

document.title = "❤️ DOM";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

document.getElementById("header").style.color = "red";

const myHeader = document.getElementById("header");

console.log(myHeader);

myHeader.style.backgroundColor = "yellow";

const button = document.getElementById("btn");

console.log(button);

button.style.width = "100px";
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.borderRadius = "20px";

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const list = document.getElementsByTagName("li");

list[0].style.color = "magenta";

const header = document.getElementsByTagName("header");

console.log(header[0]);

//! getElementsByTagName bize bir HTMLCollection(bir nevi dizi) dondurur.

console.log(list.item(3));

//! Icerik degistirme (textContent, innerText, innerHTML)

list[3].textContent = "React / Vue";
list[3].innerText = "React ( Vue / Angular";
console.log(list[2].textContent);

console.log(list[2].textContent); //? Javascript - JS is an object-based language
//? textContent HTML elementinin tum yazi dugumlerini CSS veya HTML 'e bakmasizin verir.

console.log(list[2].innerText); //? innerText CSS parse islemi yaparak yazi elementi dondurur.

console.log(list[2].innerHTML); //? innerHTML tamamen HTML parse islemi yaparak elementlere ulasmamizi saglar

list[4].innerHTML += `<li><a class="link" href="https://www.clarusway.com">CW</a></li>`;

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const itemList = document.getElementsByClassName("list");
console.log(itemList); //?HTMLCollection [section.item-list]
// console.log(itemList);

//? Array.from() (HTMLCollection -> Array)
const itemListArr = Array.from(itemList);
console.log(...itemList);
itemListArr.forEach((x) => console.log(x));

// //? SPREAD (HTMLCollection -> Array)
// const itemListSpread = [...itemList];
// console.log(itemListSpread);
// itemListSpread.map((x) => console.log((x.style.color = "red")));
