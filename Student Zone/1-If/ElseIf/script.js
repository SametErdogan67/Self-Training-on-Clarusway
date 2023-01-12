//? Örnek 1
// Bir sayının tek mi çift mi olduğunu belirten

// let sayi = Number(prompt("please enter odd or even number"));

// if (sayi <= 0) {
//   console.log("please enter higher than zero");
// } else if (sayi % 2 === 1) {
//   console.log("number is odd");
// } else if (sayi % 2 === 0) {
//   console.log("number is even");
// }

//? Örnek 2
// Bir sayinin 0 ile 100 arasında olup olmadığı

// let number = Number(prompt("please enter a number"));

// if (number >= 0 && number <= 100) {
//   console.log("number is between 0-100");
// } else {
//   console.log("number is out of 0-100");
// }

// console.log(
//   number >= 0 && number <= 100
//     ? "number is between 0-100"
//     : "number is out of 0-100"
// );

//? Örnek 3
// 18 yaşından büyüklerin oy kullanabileceği, 18 yaşından küçüklerin oy kullanamayacağı

// let age = Number(prompt("please enter a age for election"));

// console.log(age >= 18 ? "oy kullanabilir" : "oy kullanamaz");

//? Örnek 4

let dayNumber = Number(prompt("please enter the number of day"));

switch (dayNumber) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;

  default:
    break;
}
