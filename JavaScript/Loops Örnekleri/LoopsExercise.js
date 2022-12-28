//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let grade = Number(prompt("your grade:"))

// while (grade < 0 || grade > 100) {
//   console.log("Grade should be 0-100")
//   grade = Number(prompt("your grade:"))
// }
// for (; grade < 0 || grade > 100; ) {
//   console.log("Grade should be 0-100")
//   grade = Number(prompt("your grade:"))
// }

// console.log(`Your grade: ${grade}`)

//! ODEV3 (COZUM): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimiyle yaziniz.

// let number = +prompt("please enter pozitif number");
// let basamakSayisi = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   basamakSayisi++;
// }
// console.log(`Girmiş olduğunuz basamak sayisi ==>${basamakSayisi}`);

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let again = "";
// do {
//   let lastScore = 0;
//   const midterm = Number(prompt("please enter midterm grade:"));
//   const final = Number(prompt("please enter final grade:"));
//   lastScore = midterm * 0.4 + final * 0.6;
//   console.log(`Your last score is ${lastScore}`);
//   again = prompt("Do you want to continue (e/E)?");
// } while (again === "e" || again === "E");
// console.log("See you later. Bye");

// * ============================================
// *            NESTED LOOPS
// * ============================================
// console.log("** NESTED FOR **");

// let result = 0;
// let line = "";
// for (let row = 1; row <= 10; row++) {
//   for (let col = 1; col <= 10; col++) {
//     result = row * col;
//     line = line + result + "\t"; //? \t : bir tab boşluk ekle
//   }
//   line += "\n"; //? \n : bit satır boşluk
// }
// console.log(line);
let guess;
let trial = 5;
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

while (trial > 0) {
  guess = Number(prompt("please enter a guess number"));

  trial--;
  if (guess === randomNumber) {
    console.log("Congrats, you win");
    break;
  } else if (guess < randomNumber) {
    console.log("increase your guess");
  } else {
    console.log("decrease your guess");
  }
  if (trial == 0) {
    console.log("Sorry, you lost");
  }
}
