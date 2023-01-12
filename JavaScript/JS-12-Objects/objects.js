//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yöntem ile Object oluştutulabilir

// ********************************************
// *1-Object() class'ından new Operatoru le
// ***********************************************

const car = new Object();
car.brand = "Volvo";
car.model = "1990";
car.color = "eagean blue";

console.log(car);
console.log(car.model);
console.log(car["color"]);

// ********************************************
//*   2- Object Constructor kullanarak
// ********************************************

function Personel(id, ad, maas) {
  this.tc = id;
  this.name = ad;
  this.salary = maas;
}

const p1 = new Personel("12345678901", "Selim", 40000);
console.log(p1);

//* ---------------------------------------------------------
//* 3- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surname: "Canan",
  age: 33,
  languages: ["C++", "Go", "Java", "Javascript"],
  salary: 10000,
};

console.log(worker);

//? Write
worker.age += 1;
console.log({ worker });

worker["languages"].forEach((lang) => console.log(lang));

const upperCaseLangs = worker["languages"].map((l) => l.toUpperCase());
console.log(upperCaseLangs);

//? yeni bir property ve value eklenebilir.
worker.nationality = "T.C";
console.log(worker);

const person = worker; //? Shallow Copying vs Deep Copying
person.dob = 2000;
console.log({ worker });
console.log({ person });

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker)); //? Deep Copy
console.log(JSON.stringify(worker));

//* ======================================================
//*              Object Metotlari
//* ======================================================
const personel = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  salary: 10000,
  job: "developer",
  drivingLicence: false,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: function () {
    return `${this.name} is ${this.calculateAge()} years old.`;
  },
};

//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

console.log(personel.dob);
console.log("AGE:", personel.calculateAge());
console.log(personel.summary());

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.

console.log(people);
//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }
// ;("strict")
for (let person in people) {
  console.log(person);
  console.log(people[person].salary);
  console.log(people[person].name);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

//? Object methods
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let v of Object.values(people)) {
  console.log(v);
}

for (let [k, v] of Object.entries(people)) {
  console.log("KEY:", k, "VALUE:", v.job);
}

//! ARRAY METOTLARI ILE
console.log("*********");
Object.keys(people).forEach((p) => console.log(p));
console.log("*********");

Object.values(people).forEach((p) => console.log(p.name));
//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//? job'i developer olanlarin dob degerlerini yazdiriniz.
console.log("*****");

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

console.log("*****");
const dobs = Object.values(people)
  .filter((p) => p.job === "developer")
  .map((p) => p.dob); //? (2) ['1990', '2000']

console.log(dobs);

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
const team = [
  { name: "Josh", surname: "Adams", job: "developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]; //* JSON

console.log(team);
console.log(team[1]);

//? team dizisine veri ekledik
team.push({ name: "Ahmet", surname: "yilmaz", job: "developer", age: 22 });
console.log(team);

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const agesIncByOne = team.map((x) => x.age + 1);
console.log(agesIncByOne); //?(4) [31, 23, 21, 23]

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i olarak saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

// const teamFullName = team.map((p) => {
//   return {
//     fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//     age: p.age + 5,
//   }
// })

//? alternative yontem
const teamFullName = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

console.log(teamFullName);

//* Ornek: teamFullName dizisindeki 30 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const teamUnder22 = teamFullName
  .filter((p) => p.age < 30)
  .map((p) => p.fullName);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges =
  teamFullName.reduce((sum, person) => sum + person.age, 0) /
  teamFullName.length;
console.log(avgAges);
