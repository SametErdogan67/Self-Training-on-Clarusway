// const number1 = +prompt("Number1:");
// const number2 = +prompt("Number2:");
// const deger = prompt("(+,-,*,/) dört işlemden birini giriniz");

// if (deger === "+") {
//   result = number1 + number2;
//   console.log(`sonuç: ${result}`);
// } else if (deger === "-") {
//   result = number1 - number2;
//   console.log(`sonuç: ${result}`);
// } else if (deger === "*") {
//   result = number1 * number2;
//   console.log(`sonuç: ${result}`);
// } else if (deger === "/") {
//   result = number1 / number2;
//   console.log(`sonuç: ${result}`);
// } else {
//   console.log("yanlis değer girildi");
// }
// function printHello() {
//   console.log("merhaba");
// }

// printHello();

// function greeting(name, surname) {
//   console.log(`Hi ${name} ${surname}. How are you??`);
// }

// greeting("Samet", "Erdoğan");
// greeting("Mert", "Erdoğan");

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   console.log(`${name}'s age is ${age}`);
// }
// calculate("Samet", 1988);

// function topla(s1, s2) {
//   return s1 + s2;
// }

// console.log(topla(3, 2));

// let number = Number(prompt("Please enter a number"));

// function oddEven(number) {
//   if (number % 2 == 0) {
//     return `${number} is even`;
//   } else {
//     return `${number} is odd `;
//   }
// }

// console.log(oddEven(number));

// let findBiggest = function (a, b, c) {
//   if (a > b && a > c) {
//     return `The biggest is ${a}`;
//   } else if (c > a && c > b) {
//     return `The biggest is ${c}`;
//   } else if (b > a && b > c) {
//     return `The biggest is ${c}`;
//   } else {
//     return "please enter different number";
//   }
// };

// console.log(findBiggest(-3, -4, -5))

// let number1 = Number(prompt("sayı gir"))

// if (typeof number1 == Number){
//   if(number1%2==0){
//     console.log("girilen tek");
//     else{
//       console.log("çiftir");
//     }
//   }

// }
//  else{
//   console.log("karakter");
// }

const karealani = function (kenar) {
  let alan = kenar ** 2;
  return alan;
};

console.log(karealani(6));

const karealani = (kenar) => kenar ** 2;
