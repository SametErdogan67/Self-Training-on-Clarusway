//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

// const grades = [55, 77, 23, 89, 100];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
// }
// console.log(sum / grades.length);

// const arr = [-5, 15, 22, -4, 45, 78];

// let negatives = [];
// let positives = [];

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] < 0) {
//     negatives.push(arr[j]);
//   } else {
//     positives.push(arr[j]);
//   }
// }

// console.log(negatives);
// console.log(positives);
//* =========================================
//*             FOR-IN LOOP
//* =========================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudent = (name) => {
//   let count = 0;
//   for (let i in students) {
//     if (name.toLowerCase() === students[i]) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     return `${name} cannot be found`;
//   } else {
//     return `${name} found ${count} times`;
//   }
// };

// console.log(findStudent("Mehmet"));
// console.log(findStudent("feyza"));
//* =========================================
//*            FOR-OF LOOP
//* =========================================

// const sayilar=[-5,15,22,-4,45,78,-25]

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudentForOf = (name) => {
  let counter = 0;

  for (let student of students) {
    student === name.toLowerCase() ? counter++ : null;
  }
};
