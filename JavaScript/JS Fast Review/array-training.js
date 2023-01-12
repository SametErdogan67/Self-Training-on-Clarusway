// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem

// const name = ["emir", "oguzhan", "levent", "tarik"];
// console.log(name);

// const langs = new Array("emir", "oguzhan", "levent", "tarik");
// console.log(langs);

// const number = new Array(10);

// console.log(number);

// const number2 = Array.of(1, 2, 3);
// console.log(number2);

// const names1 = [
//   "emir",
//   "oğuzhan",
//   ["levent", "sam"],
//   "tarik",
//   "Sabata",
//   "Mehtap",
//   "Rose",
// ];

// console.log(names1[2][1]);

// console.log(names1.length);
// console.log(names1[names1.length - 1]);

// names1[0] = "sam";

// console.log(names1);

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

// const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

// console.log(cars.pop());
// console.log(cars.push("Toyota"));
// console.log(cars);

// console.log(cars.unshift("Kia"));
// console.log(cars);

// console.log(cars.shift());
// console.log(cars);

//* splice()

//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

// const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];

// cars.splice(2, 1, "Reno");
// console.log(cars);

//* Dizinin tamamini ters siraya cevirir.
// cars.reverse();
// console.log(cars);

//*sort() Diziyi alfabetik olarak siralar.
//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.

// const numbers4 = [2, 3, 22, 1, 5, 7, 6];
// cars.sort();
// console.log(numbers4);

// numbers4.sort((a, b) => a - b);
// console.log(numbers4);

//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================

console.log("**** ACCESS ****");
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3];

//* includes()
//*-----------------------------------------------------------

// console.log(numbers.includes("5"));

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

// console.log(numbers.indexOf("5"));

//* join()
//*-----------------------------------------------------------

// console.log(numbers.join(":)"));

// let data = [3, 1, 5, 7, 8, 910, 22, 3];

// console.log(numbers.sort((a, b) => a - b).join("-"));

//* toString()
//*-----------------------------------------------------------

// console.log(numbers.toString()); //?3,5,2,4,four,3,4,bes,1,3

//* slice(start, end) -- end exclusive

// const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
// console.log(cars.splice(2, 3));

//* concat()
//*-----------------------------------------------------------

// const message = ["The weather", "is", "very", "nice"];
// const now = [new Date().toLocaleString()];

// console.log(message.concat(now));

//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
// const grades = [55, 77, 23, 89, 100, 44, 33];
// let sum = 0;
// for (let i = 0; i < grades.length - 1; i++) {
//   sum += grades[i];
// }
// console.log((sum / grades.length).toFixed(2));

//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.
// const arr = [-5, 15, 22, -4, 45, 78];

// let positives = [];
// let negatives = [];

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] > 0) {
//     positives.push(arr[j]);
//   } else {
//     negatives.push(arr[j]);
//   }
// }

// console.log(negatives);
// console.log(positives);

// const arr = [-5, 15, 22, -4, 45, 78];

// const topla = (arr) => {
//   let negatives1 = 0;
//   let positives1 = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > 0) {
//       positives1 += arr[j];
//     } else {
//       negatives1 += arr[j];
//     }
//   }
//   console.log(negatives1);
//   console.log(positives1);
// };

// topla(arr);

//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

// const students = [
//   "ahmet",
//   "mehmet",
//   "ismet",
//   "feyza",
//   "ahmet",
//   "feyza",
//   "can",
//   "mehmet",
//   "cem",
// ];

// const findStudents = (name) => {
//   let counter = 0;
//   for (let i in students) {
//     if (name.toLowerCase() === students[i]) counter++;
//   }

//   if (counter === 0) {
//     return "öğrenci bulunamado";
//   } else {
//     return counter;
//   }
// };

// console.log(findStudents("Ali"));

//* =========================================
//*            FOR-OF LOOP
//* =========================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

// const students = [
//     "ahmet",
//     "mehmet",
//     "ismet",
//     "feyza",
//     "ahmet",
//     "feyza",
//     "can",
//     "mehmet",
//     "cem",
//   ];

//   const findStudents = (name) =>{
//     let counter = 0;
//     for (student of Students){
//         if student === name.toLowerCase(){
//             counter ++;

//     }
//   }

//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];

// for (price of prices) {
//   console.log(price);
// }

// prices.forEach((x) => console.log(x));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz
// let sum = 0;
// prices.forEach((p) => (sum += p));
// console.log(sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)

//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// let sum = 0;
// prices.forEach((p) => {
//   console.log((sum += p));

//   arr[i] = p * 1.1;
// });

// prices.forEach((p) => console.log(p * 1.1));

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const upperNames = names.map((n) => n.toLocaleUpperCase(9));

// console.log(upperNames);
// console.log(names);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const euro = 18.23;
// const dolar = 18.19;
// const tlPrices = [100, 150, 100, 50, 80];

// const euroTl = tlPrices.map((tl) => Number(tl / euro).toFixed(2));

// console.log(euroTl);

// const dolarTl = tlPrices.map((tl) => (tl / dolar).toFixed(2));

// console.log(dolarTl);

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const moreThan = salaries.filter((p) => p >= 10000);

// console.log(moreThan);

// const range = salaries.filter((s) => s > 6000 && s < 15000);
// console.log(range);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

// const newSalary = salaries
//   .filter((p) => p < 9000)
//   .map((x) => x * 1.1)
//   .forEach((x) => console.log(x));

//! ForEach terminal methodudur. Br deger dondurmedigi icin devamına baska fonksiyon getirlemez.

//* =======================================
//*             REDUCE METHOD
//* =======================================

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const totalSalary = salaries.reduce((t, s) => t + s);
// .forEach((x) => console.log(x)) //! salaries.reduce(...).forEach is not a function
console.log("TOTAL:", totalSalary);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaries = salaries
  .filter((s) => s < 9000)
  .map((s) => s * 1.1)
  .reduce((t, s) => t + s, 0);

console.log(sumOfRaisedSalaries);

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 34, 78, 79, 15];
const check = ages.every((age) => age >= 18);
check ? console.log("All ages are over 18") : console.log("Sum are under 18");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80);
console.log(over80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex); //? 1
