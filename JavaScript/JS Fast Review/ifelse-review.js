// * =======================================================
// *             Karar Yapilari (Conditions)
// * =======================================================

console.log(" **** Conditions ****");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// let number = Number(prompt("please enter a number"));

// if (number > 0) {
//   console.log("the number is positive");
// } else if (number < 0) {
//   console.log("The number is negative ");
// } else{
//     console.log("the number is equal zero");
// }

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

// const n1 = +prompt("Number1:");
// const n2 = +prompt("Number2:");
// const n3 = +prompt("Number3:");

// console.log(`The Biggest : ${Math.max(n1, n2, n3)}`);

console.log(" **** SWITCH-CASE ****");

//**************** SWITCH-CASE *******************
//************************************************

// console.log("-------------------------------------");
// console.log(" ***** 4 Islem Hesap Makinasi ****** ");
// console.log("-------------------------------------");
// const s1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem = prompt("Islemi giriniz: +,-,*, /");
// const s2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc = 0;

// switch (islem) {
//   case "+":
//     sonuc = s1 + s2;
//     break;
//   case "-":
//     sonuc = s1 - s2;
//     break;
//   case "*":
//     sonuc = s1 * s2;
//     break;
//   case "/":
//     sonuc = s1 / s2;
//     break;
//   default:
//     alert("Yanlis islem girisi");
//     break;
// }
// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);

//! ODEV2
//! Clarusway’deki haftalik ders ve etkinlik programinizi,
//! console’dan girilen gun degerine gore cikti veren kodu
//! switch-case yapisi ile yaziniz.

//! Program
//! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

// let day = prompt("please enter a day of week");

// let day2 = day.toLowerCase();

// switch (day2) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//     console.log("Inclass");
//     break;
//   case "friday":
//     console.log("TW");
//     break;
//   case "saturday":
//     console.log("Inclass+Workshop");
//     break;
//   case "sunday":
//     console.log("Self-Study");
//     break;
//   default:
//     break;
// }

//**************** TERNARY *******************

// console.log(" **** TERNARY-CASE ****");

//  const grade = Number(prompt("Please enter your grade"))

//  if(number<50){
//     console.log("You are failed");
//  }else{
//     console.log("You are passed");
//  }

//  const result = number<50 ? "You are failed":"You are passed";

//  console.log(result);

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

// let salary = Number(prompt("please enter a montly salary"));

// minPrice = 8500;
// let newSalary;

// if (salary <= minPrice && salary > 0) {
//   newSalary = salary * 1.5;
//   console.log(newSalary);
// } else if (salary > minPrice) {
//   newSalary = salary * 1.1;
//   console.log(newSalary);
// } else {
//   console.log("Please enter correct salary");
// }

//! ODEV4: Console’dan kisininin gelir ve gider miktarini alan
//! eger kisinin geliri giderinden en az asgari ucret kadar fazla ise
//! Kredi Verilebilir 🤑 , değilse  Kredi Verilemez 🥺
//! seklinde cikti veren kodu Ternary deyimi kullanarak yaziniz.

// let gelir = Number(prompt("lütfen gelirinizi yazınız"));
// let gider = Number(prompt("lütfen giderinizi yazınız"));
// let netGelir = gelir - gider;
// let asgari = 8500;

// let sonuc = netGelir >= asgari ? "Kredi Verilebilir" : "Kredi Verilemez";

// console.log(sonuc);
