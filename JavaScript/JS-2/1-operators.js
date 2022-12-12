// *******************************************
//             Aritmetik Oparetörler
// *********************************************

console.log(" ***** Operatörler *****");

const cola = 20;
const gum = 5;
const biscuits = 15;

const totalPrice = cola + gum + biscuits;

//! totalPrice++; olmaz hata verir
console.log(totalPrice);

console.log("Total Price: ", totalPrice);
console.log("Total Price: " + totalPrice); //? String concatination

const firstName = "Ahmet";
const lastName = "Can";

console.log(firstName + " " + lastName);

const s1 = 5,
  s2 = 7,
  s3 = "5";
s4 = "3";
s5 = "two";

console.log(s1, s2, s3);

console.log(s2 + s3);
console.log(s2 - s3); // JS insiyatif alıyor, stringi değiştirdi

console.log(s3 - s4);
console.log(s4 - s5); // NaN (not a number)

const difference = s2 - s5;
console.log(difference);

console.log(isNaN(difference));

//? Ornek

const yearOfBirth = 1990;
const name = "Jane";

console.log(name + "is" + 2022 - yearOfBirth + "years old");

let birthDate = `${name}  is ${
  new Date().getFullYear() - yearOfBirth
} yaşındadır`;

console.log(`${name}  is ${new Date().getFullYear() - yearOfBirth} yaşındadır`);

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

// let randomNumber = Math.random();

// console.log(Math.trunc(randomNumber * 100));

//? 0-100 arasında sayı üretmek

//! Mod Alma

const number = prompt("Please enter a 3-digits number:");

remain = number % 10;
console.log(remain);

remain1 = Math.floor(number / 10);
console.log(remain1 % 10);

hundreds = Math.trunc(number / 100);
console.log(hundreds);

//! ********************************************************

// ? ********* KARŞILAŞTIRMA  ******************

// ! *******************************************************

const num1 = 5;
const num2 = 7;

console.log(num1 > num2);
