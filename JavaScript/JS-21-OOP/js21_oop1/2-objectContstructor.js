// //* =============================================
// //*        OOP - Object Constructor (ES5)
// //* =============================================

// //* Javascript, prototype-temelli bir dildir.
// //* Butun JavaScript nesneleri (objects) ozellikleri (properties)
// //* ve metotlari bir prototipten miras olarak almaktadir.
// //* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
// //* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

// //? Object Constructor

// function Book(title, author, year) {
//   this.title = title
//   this.author = author
//   this.year = year
//   //   this.getSummary = function () {
//   //     return `${this.title} was written by ${this.author} in ${this.year}`
//   //   }
// }

// //! Prototype, belirli bir Nesne'nin (Object) tum instance'larina
// //! kolay bir sekilde metotlar tanimlamaya izin vermektedir.
// //! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un
// //! olusan tum instance'larin belleginde yer kaplamamasi ancak tum
// //! instance'larin bu metota ulasabilmesidir.

// //* Ornegin Book nesnesinin tum instance'lari getSummary() fonksiyonunu miras alabilir.
// //* Ancak, getSummary() fonksiyonu bellekte sadece bir yer kaplamaktadir.

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`
// }

// //! Book kalibinda yeni bir ornek (instance) olusturduk.
// const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920)
// console.log(book1)
// console.log(book1.getSummary())

// //* Bir nesnenin prototiplerine .prototype ile erisilebilir.
// //* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.
// console.log(Book.prototype)
// console.log(book1.__proto__)

// //? instance
// const book2 = new Book("Simyaci", "Pauolo Coelho", 1990)
// console.log(book2.getSummary())

// // book1.price = 250
// Book.prototype.price = 0
// book1.price = 200
// book2.price = 300

// console.log(book1, book2)
// // console.log(new Date().getFullYear())

// //? INHERITANCE (Kalitim - ES5)
// //?----------------------------------------------------------

// //? Sub-Class
// function Magazine(title, author, year, month) {
//   //? INHERITANCE
//   Book.call(this, title, author, year)
//   this.month = month
// }

// //! Prototipleri miras almak icin Object.create() metodu kullanabilir.
// Magazine.prototype = Object.create(Book.prototype)

// // const mag1 = new Magazine("SRE", "Einstion", 1930, "Nov")
// // console.log(mag1)

// // //! Prototipler dogrudan miras olarak gelmez.
// // console.log(mag1.getSummary())

// // let modal = document.querySelector("#result");
// // setTimeout(function () {
// //   modal.classList.remove("hidden");
// // }, 10000);
// // console.log("Results shown");

// // let Storm = function () {};
// // Storm.prototype.precip = "rain";
// // let WinterStorm = function () {};
// // WinterStorm.prototype = new Storm();
// // WinterStorm.prototype.precip = "snow";
// // let bob = new WinterStorm();
// // console.log(bob.precip);

// // function logThis() {
// //   this.desc = "logger";
// //   console.log(this);
// // }
// // new logThis();

// let users = [
//   { firstName: "Susan", lastName: "Steward", age: 14 },
//   { firstName: "Daniel", lastName: "Longbottom", age: 16 },
//   { firstName: "Bruno", lastName: "Black", age: 56 },
//   { firstName: "Jacob", lastName: "Joyo", age: 15 },
//   { firstName: "Sam", lastName: "Drogo", age: 64 },
// ];

// let usersFullNames = users.map((user) => {
//   let fullName = `${user.firstName} ${user.lastName}`;
//   return fullName;
// });

// console.log(usersFullNames);

// const youngPeople = users.filter((person) => {
//   return person.age <= 15;
// });

// const itSchool = {
//   name: "Clarusway",
//   location: "U.S.",
//   established: "2019",
// };

// let nameofitSchool = itSchool.name;
// console.log(nameofitSchool);
// console.log(itSchool["name"]);

const note = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
  author: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  },
};
// // traditional way
// const id = note.id;
// const title = note.title;
// const firstName = note.author.firstName;
// destructuring
const {
  id,
  title,
  date,
  author: { firstName, lastName, email },
} = note;
console.log(`${firstName} ${lastName}`, id, title, date, email);
