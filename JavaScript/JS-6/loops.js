// Çarpım Tablosu

// let result = 0;
// for (let row = 1; row <= 10; row++) {
//   for (let col = 1; col <= 10; col++) {
//     result = row * col;
//     console.log(result);
//   }
//   console.log("-");
// }

// let result;
// //? 10 x10 = 100 kere doner
// let line = "";
// for (let row = 1; row <= 10; row++) {
//   for (let col = 1; col <= 10; col++) {
//     result = row * col;
//     line += result + "\t"; //? \t : bir tab bosluk ekle
//   }
//   //   console.log("-")
//   line += "\n"; //? \n : yeni bir satira gec
// }

// console.log(line);

// let grade = Number(prompt("please enter a grade"));

// while (grade > 100 || grade < 0) {
//   console.log("please enter a correct grade");
//   grade = Number(prompt("your grade:"));
// }
// console.log("Your Grade:", grade);

let counter = 0;
let number = Number(prompt("please enter a number"));

while (number > 0) {
  number = Math.floor(number / 10);
  counter++;
}
console.log(counter);
