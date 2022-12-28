//! Declaration

function greeting(name, surname) {
  return `Merhaba ${name} ${surname}`;
}

console.log(greeting("samet", "erdoğan"));

//* Ornek 3:

// let dateOfBirth = +prompt("please enter your birth year");
// let date = new Date().getFullYear();
// function age(name) {
//   return `${name}'s age is ${date - dateOfBirth}`;
// }

// console.log(age("Samet"));

//* Ornek 4:
//Console giilen bir sayının tek yada çift olduğunu

//! Çözüm 1:

// let number = Number(prompt("Please enter a number"));

// function oddEven(number) {
//   if (number % 2 == 0) {
//     return `${number} is even`;
//   } else {
//     return `${number} is odd `;
//   }
// }

//!Çözüm 2:
// function oddOrEven(number) {
//   return number % 2 === 0 ? "your number is even" : "your number is odd";
// }

// let number = Number(prompt("please enter odd or even number"));

// console.log(oddOrEven(number));

// //* EXPRESSION

// const printHello = function(){
//     console.log("Hello");
// }

// printHello()

//! Örnek Tek mi Çift mi

// let odd_Even = function (number) {
//   return number % 2 === 0 ? "your number is Even" : "your number is Odd";
// };

// console.log(odd_Even(24));

// //! Bir fonksiyon içerisinde başka fonksiyon çağrılabilir

// const add = function (n1, n2) {
//   return n1 + n2;
// };

// const sub = function (n1, n2) {
//   return n1 - n2;
// };

// const div = function (n1, n2) {
//   return n1 / n2;
// };

// const mul = function (n1, n2) {
//   return n1 * n2;
// };

// const compute = function (n1, n2, op) {
//   let result = 0;
//   switch (op) {
//     case "+":
//       result = add(n1, n2);
//       break;
//     case "-":
//       result = sub(n1, n2);
//       break;
//     case "*":
//       result = mul(n1, n2);
//       break;
//     case "/":
//       result = div(n1, n2);
//       break;

//     default:
//       break;
//   }
//   return result;
// };

// console.log(compute(4, 3, "/"));

// let ucgenAlan = function (a, h) {
//   alan = (a * h) / 2;
//   return alan;
// };

// console.log(ucgenAlan(5, 4));

let kareAl = function (a, "2") {
  kare = a ** 2;
  return kare;
};

let kupAl = function (a, 3) {
  kup = a ** 3;
  return kup;
};

let usAl = function (a, n) {
  us = a ** n;
  return us;
};

// let compute = function(a,n){
//     switch (key)
//     let{
//         case value:

//             break;

//         default:
//             break;
//     }
// }

console.log(kareAl(5));
