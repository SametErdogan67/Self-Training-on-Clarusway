// //* Dizi Tanımlama

// //! 1.Yöntem Array Literal
// const names = ["emir", "oguzhan", "levent", "tarik"];
// console.log(names);
// console.log(names.length);

// //! 2. Yöntem Object Constructor

// const langs = new Array("C","C++","JS")

// const names1=[
//     "emir",
//     "oğuz"
// ]

const cars = ["BMW", "Mercedes", "Fiat", "Anadol"];
console.log(cars.pop());
console.log(cars);

console.log("LEN:", cars.push("Lexus"));
console.log(cars);

console.log(cars.unshift("togg"));
// console.log(cars);

console.log(cars.shift());
console.log(cars);

cars.splice(1, 0, "VW");
console.log(cars); //?(5) ['BMW', 'VW', 'Mercedes', 'Fiat', 'Lexus']

cars.splice(3, 1, "Maseratti");
console.log(cars);

cars.reverse();
console.log(cars);

cars.sort(); //? text'leri mantikli bir sekilde siralar
console.log(cars);

const numbers4 = [2, 3, 22, 1, 5, 7, 6];
numbers4.sort(); //? Siralama yanlis cikabilir.
console.log(numbers4);

numbers4.sort((a, b) => a - b);
console.log(numbers4); //?(7) [1, 2, 3, 5, 6, 7, 22]

numbers4.sort((a, b) => b - a);
console.log(numbers4); //?(7) [1, 2, 3, 5, 6, 7, 22]
