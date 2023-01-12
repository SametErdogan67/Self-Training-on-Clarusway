// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const names = ["emir", "oğuzhan", "levent", "tarik"];

console.log(names);

//? 4 (names dizisinin lenght property'sine erisiyoruz.)
//* non-primitive verilerde ozellikler olabilir ve bunlara
//* erisim . notasyonu ile olabilir.
console.log(names.length);

const x = 5.234; //? primitive

console.log(x.toFixed(2)); //? object wrapper sayesinde
//? Primitive'lerde normal sartlarda property olmaz.

console.log(typeof names); //? JS de array aslinda object dedigimiz base object'den turetilmistir.

const emptArr = [];
console.log(emptArr);

// ! 2.Yöntem (Object Constructor)
const codingLangs = new Array("C", "C++", "JS", "Go");
console.log(codingLangs);

//? 10 elemanli bos bir dizi olusturur.
const numbers1 = new Array(10);
console.log(numbers1); //?(10) [empty × 10]

// ! 3.Yöntem (Array.of())
const number2 = Array.of(1, 2, 3);
console.log(number2); //?(3) [1, 2, 3]

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

const names1 = [
  "emir",
  "oğuzhan",
  "levent",
  "tarik",
  "Sabata",
  "Mehtap",
  "Rose",
];

console.log(names1[1]); //? oğuzhan
const tarik = names1[3];
console.log(tarik); //?tarik

//? Dizinin en son elemanini okumak istiyoruz.
console.log(names1[5]); //? Mehtap, (hard-coded)

const lastEl = names1[names1.length - 1];
console.log(lastEl); //? Rose

//? Alternative olarak at() metodu
console.log(names1.at(-3)); //? Sabata

console.log(names1);

//! NOT: Bir dizi const ile tanimlansada icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tutulan adresinin degistirilmesini engeller.

//! Diziler farkli veri tiplerini bir arada saklayabilir.
const ageArr = [22, 44, 55];
const people = [
  "John",
  "Varmont",
  new Date().getFullYear() - 1990,
  true,
  ageArr,
];

console.log(people[4]); //?(3) [22, 44, 55]

console.log(++people[4][1]); //? 45

console.log(people); //?(3) [22, 45, 55]
console.log(ageArr); //?  ['John', 'Varmont', 33, true,  [22, 45, 55]]
ageArr[0]--;

console.log(people); //?(5) ['John', 'Varmont', 33, true, [21, 45, 55])]

//! Bir dizi icerisine baska bir diziyi koyarsak aslinda dizinin
//! tum verileri kopyalanmaz sadece o dizinin refransi konulur.
//! Dolayisiyla disarida bu dizideki bir degisikli diger dimizie de yansir.
//! Cunku JS cogu durumda sig (shallow copying) yapar.

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

//** pop() son elemani siler ve sildigi elemani dondurur.
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
console.log(cars.pop());
console.log(cars);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
console.log("LEN:", cars.push("Lexus"));
console.log(cars);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
console.log(cars.unshift("Togg"));
console.log(cars);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
console.log(cars.shift());
console.log(cars);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(1, 0, "VW");
console.log(cars); //?(5) ['BMW', 'VW', 'Mercedes', 'Fiat', 'Lexus']

cars.splice(3, 1, "Maseratti");
console.log(cars);

//* Dizinin tamamini ters siraya cevirir.
cars.reverse();
console.log(cars);

//*sort() Diziyi alfabetik olarak siralar.
//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.

cars.sort(); //? text'leri mantikli bir sekilde siralar
console.log(cars);

const numbers4 = [2, 3, 22, 1, 5, 7, 6];
numbers4.sort(); //? Siralama yanlis cikabilir.
console.log(numbers4);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.

numbers4.sort((a, b) => a - b);
console.log(numbers4); //?(7) [1, 2, 3, 5, 6, 7, 22]

numbers4.sort((a, b) => b - a);
console.log(numbers4); //?(7) [22, 7, 6, 5, 3, 2, 1]

//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================

console.log("**** ACCESS ****");
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1", 3];

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes(4)); //? false
console.log(numbers.includes("4")); //? true

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf(3)); //? 0
console.log(numbers.lastIndexOf(3)); //? 9
console.log(numbers.lastIndexOf(7)); //? -1

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
const strNumbers = numbers.join("-");
console.log(strNumbers); //?3,5,2,4,four,3,4,bes,1,3

let data = [3, 1, 5, 7, 8, 910, 22, 3];

data = data.sort((a, b) => b - a).join(" ");
console.log(data); //?910 22 8 7 5 3 3 1

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(numbers.toString()); //?3,5,2,4,four,3,4,bes,1,3

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
console.log(cars.slice(2, 3)); //? (2) ['Fiat']
console.log(cars.slice(2)); //? (2) ['Fiat', 'Anadol']
//! Tek rakam baslangic anlamina gelir ve sonuna kadar alir.

const newCars = cars.slice(3, 4);
console.log(newCars, cars); //? ['Anadol'] (4) ['BMW', 'Mercedes', 'Fiat', 'Anadol']

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"];
const now = [new Date().toLocaleString()];
console.log(now); //? ['04.01.2023 20:36:48']

const concattedMsg = message.concat(now, "JS Arrays", [["1,3,4"]]);
console.log(concattedMsg);

//* ============================================
//*                FOR LOOP
//* ============================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

console.log((sum / grades.length).toFixed(2));
//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.
const arr = [-5, 15, 22, -4, 45, 78];

let negatives = [];
let positives = [];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}

console.log(negatives);
console.log(positives);
console.log(arr);

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

const students = [
  "ahmet",
  "mehmet",
  "ismet",
  "feyza",
  "ahmet",
  "feyza",
  "can",
  "mehmet",
  "cem",
];

const findStudent = (name) => {
  let counter = 0;
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }

  if (counter === 0) {
    return `${name} can not be found`;
  } else {
    return `${name} found ${counter} times`;
  }
};

console.log(findStudent("MehMet"));
console.log(findStudent("ismet"));
console.log(findStudent("feyza"));

//* =========================================
//*            FOR-OF LOOP
//* =========================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentForOf = (name) => {
  let counter = 0;

  for (let student of students) {
    //* Ternary
    // student === name.toLowerCase() ? counter++ : null

    //* Short-Circuit yontemi
    // ? kosul false uretirse counter'ı eksilt
    //! student === name.toLowerCase() || counter--

    // ? kosul true uretirse counter'ı arttir
    student === name.toLowerCase() && counter++;
  }

  return !counter
    ? `${name} can not be found`
    : `${name} found ${counter} times`;
};

console.log(findStudentForOf("MehMet"));
console.log(findStudentForOf("ismet"));
console.log(findStudentForOf("feyza"));

//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

for (let price of prices) {
  console.log(price);
}
console.log("*****");
prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0;
prices.forEach((price) => (sum += price));

console.log("SUM:", sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let total = 0;
prices.forEach((p, i, arr) => {
  total += p;
  console.log(`${i + 1}.iteration: ${total}`);
  arr[i] = Math.trunc(p * 1.1);
});

console.log(prices);

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperNames = names.map((name) => name.toLocaleUpperCase());
console.log(upperNames);
console.log(names);

console.log(names.map((name) => name.toLocaleUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));
const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));

console.log(euroPrices, dolarPrices);

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const moreThan10000 = salaries.filter((s) => s >= 10000);
console.log(moreThan10000);

const range = salaries.filter((s) => s >= 6000 && s <= 20000);
console.log(range);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Inc = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));

console.log(lessThan9000Inc);

salaries
  .filter((x) => x < 9000)
  .map((x) => Math.trunc(x * 1.1))
  .forEach((x) => console.log(x));
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
