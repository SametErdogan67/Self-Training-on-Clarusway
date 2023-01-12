// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");

// //? Ornek: 1 den n kadar sayilari toplayan kodu yaziniz.

// let n = Number(prompt("please enter a number"));
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//? Ornek: 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

// const number = Number(prompt("please enter a number"));

// for (let i = 1; i <= number; i++) {
//   let randomNum = Math.round(Math.random() * 100);
//   console.log(`${i}. random number is ${randomNum}`);
// }

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

// const primeNum = Number(prompt("Enter a number"));

// //? Flag method
// let isPrime = true;

// if (primeNum < 2) {
//   console.log("Number should be bigger than 1 ");
// } else {
//   for (let i = 2; i < primeNum; i++) {
//     if (primeNum % i === 0) {
//       //? Tam bolunuyorsa asal degildir
//       console.log(`${primeNum} is not a prime number-${i}`);
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime === true) {
//     console.log(`${primeNum} is a prime number`);
//   }
// }

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

// let count = 1
// while (count <= 10) {
//   console.log("Count:", count)
//   count++
// }

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let grade = Number(prompt("your grade:"));

// while (grade < 0 || grade > 100) {
//   console.log("Grade should be 0-100");
//   grade = Number(prompt("your grade:"));
// }

// console.log(`Your grade: ${grade}`);

// if (grade < 0 || grade > 100) {
//   console.log("Incorrect grade");
// }

//! ODEV3 (COZUM): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimiyle yaziniz.

// let counter = 0;
// let number = Number(prompt("your number:"));

// while (number != 0) {
//   number = Math.trunc(number / 10);

//   counter++;
// }

// console.log(`Digit count is ${counter}`);

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
//   let avg = 0;
//   let midterm = Number(prompt("your midterm grade:"));
//   let final = Number(prompt("your final grade:"));
//   avg = midterm * 0.4 + final * 0.6;
//   console.log(`Your Score is ${avg}`);
//   again = prompt("Do you want to continue(e/E)?");
// } while (again === "e" || again === "E");
// console.log("See you later. Bye");

// * ============================================
// *            NESTED LOOPS
// * ============================================
console.log("** NESTED FOR **");

//? 10  + 10 = 20 kere doner
// for (let row = 1; row <= 10; row++) {
//   console.log(row)
// }
// for (let col = 1; col <= 10; col++) {
//   console.log(col)
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
//   console.log(line);
// }

// console.log(line);

//! Guess Game
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
