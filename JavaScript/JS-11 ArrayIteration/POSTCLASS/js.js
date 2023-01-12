// const grades = [55, 77, 23, 89, 100];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum = sum + grades[i];
// }
// console.log((sum / grades.length).toFixed(1));

// const arr = [-5, 15, 22, -4, 45, 78];
// let negatives = [];
// let positives = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     negatives.push(arr[i]);
//   } else {
//     positives.push(arr[i]);
//   }
// }

// console.log(negatives);
// console.log(positives);

// *************************************************************
//? FOR IN LOOP
// *************************************************************

// const sayilar = [-5, 15, 22, -4, 45, 78, -25];

// let sum = 0;

// for (let i in sayilar) {
//   sum = sum + sayilar[i];
// }

// console.log(sum);

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudent = (name) => {
//   let count = 0;
//   for (let i in students) {
//     if (name === students[i]) {
//       count++;
//     }
//   }

//   if (count === 0) {
//     return `${name} can not be found`;
//   } else {
//     return `${name}  found ${count}`;
//   }
// };

// console.log(findStudent("mehmet"));

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (name) => {
//   let counter = 0;
//   for (let i in students) {
//     if (name === students[i]) {
//       counter++;
//     }
//   }
//   if (counter === 0) {
//     return `${name} is not found`;
//   } else {
//     return `${name} is found ${counter} times`;
//   }
// };

// console.log(findStudents("ahmet"));

// *************************************************************
//? FOR OF LOOP
// *************************************************************

// const sayilar = [-5, 15, 22, -4, 45, 78, -25];

// let sum = 0;

// for (sayi of sayilar) {
//   sum = sum + sayi;
// }
// console.log(sum);

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudentsOf = (name) => {
//   let counter = 0;
//   for (let student of students) {
//     student === name.toLowerCase() ? counter++ : null;
//   }

//   if (counter === 0) {
//     return `${name} is not found`;
//   } else {
//     return `${name} found ${counter} times`;
//   }
// };
// console.log(findStudentsOf("ahmet"));
// console.log(findStudentsOf("ismet"));
// console.log(findStudentsOf("ali"));

// const prices = [100, 250, 50, 89];

// // for (let price of prices) {
// //   console.log(price);
// // }

// // prices.forEach((price) => console.log(price));
// let sum = 0;
// prices.forEach((price) => (sum += price));

// console.log(sum);

// *************************************************************
//? forEach method
// *************************************************************

//! Örnek

//! prices dizisindeki her bir ara toplam değerini
//! konsola basturiniz.
// const prices = [100, 250, 50, 89];
// let sum = 0;
// prices.forEach((p, i, arr) => {
//   sum += p;
//   console.log(`${i + 1}.iteration : ${sum}`);

//   arr[i] = Math.trunc(p * 1.1);
// });

// console.log(prices);

// // *************************************************************
// //? map() method
// // **********************************************************

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const upperNames = names.map((n) => n.toLocaleUpperCase());
// console.log(upperNames);

// !Örnek
//?tl prices dizisindeki rakamların EURO ve DOLAR karşılıklarını hesabplayarak yeni dizilere kaydadin

// const euro = 19.75;
// const dolar = 18.75;
// const tlPrices = [100, 150, 100, 50, 80];

// const exchangeEuroTl = tlPrices.map((n) => Math.trunc(n / euro));
// const exchangeDolarTl = tlPrices.map((n) => n / dolar);

// console.log(exchangeEuroTl);
// console.log(exchangeDolarTl);
