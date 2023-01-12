// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

//! Declaration

// function printHello() {
//   console.log("Hello");
// }

// printHello(); //! invoke, call
// printHello(); //! invoke, call

//* ORNEK2:
//*****************************************/

// function greet(firstName, lastName = "-") {
//   console.log(`Hi, ${firstName} ${lastName}`);
// }

//? invoke examples
// greet("Sabata", "2288");
// greet("Sercan", "Yilmaz");
// greet("Harold", "Mariam");

// greet("Ahmet");
// greet("Mehmet");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//******************************************/

// function calculate(name, yob) {
//   const age = new Date().getFullYear() - yob;
//   return `${name}'s age is ${age}`;
// }

// console.log(calculate("elif", 2000));

//* ORNEK4:
//*******************************************/

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

// let number = Number(prompt("please enter a number"));

// function oddEvenNumber(number) {
//   if (number % 2 === 0) {
//     return `${number} is even`;
//   } else if (number % 2 === 1) {
//     return `${number} is odd`;
//   } else {
//     return `${number} is not valid number`;
//   }
// }

// console.log(oddEvenNumber(number));

console.log("*** 2-EXPRESSION ****");

//* ORNEK1:
//***********************************************/

// const topla = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(topla(5, 7));
// let oddOrEven = function (num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// };
// console.log(oddOrEven(5));

// //* ORNEK3: 3 sayinin en buyugunu bulan fonks.
// //*

// const add = function (n1, n2) {
//     return n1 + n2
//   }
//   const sub = function (n1, n2) {
//     return n1 - n2
//   }
//   const div = function (n1, n2) {
//     return n1 / n2
//   }
//   const mul = function (n1, n2) {
//     return n1 * n2
//   }

//   const compute = function (n1, n2, op) {
//     let result = 0
//     switch (op) {
//       case "+":
//         result = add(n1, n2)
//         break
//       case "-":
//         result = sub(n1, n2)
//         break
//       case "/":
//         result = div(n1, n2)
//         break
//       case "*":
//         result = mul(n1, n2)
//         break
//       default:
//         break
//     }
//     return result
//   }

//   console.log(compute(4, 3, "/"))
//   console.log(compute(2, 4, "*"))
//   console.log(compute(3, 1, "+"))

//!   Çalişma Sorulari

//*soru1: Taban ve yüksekliği değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren

// let ucgenAlan = function (a, h) {
//   alan = (a * h) / 2;
//   return alan;
// };

// console.log(ucgenAlan(4, 5));

// *soru2: kareAl, kupAl, usAl şeklinde üç adet arrow fonskiyon tanmlayin. gerekli parametreler ile döndüren

// let kareAl = (a) => a * a;

// console.log(kareAl(4));

// let kupAl = (a) => a * a * a;

// console.log(kupAl(4));

// let usAl = (a) => a ** a;

// console.log(usAl(4));

// *soru3: yil değerlerini parametre olarak alan ve bu yilin artık yil olup olmadığını hesaplayarak sonucu ana programa göndüren fonksiyonu function-expression yöntemi ile yazınız.  not: yıl 4 e tam bölünüyorsa ve 100e tam bölünmüyorsa veya 400 e tam bölünüyorsa artık yıldır, aksi taktirde değild,r

let artikYil = function (a) {
  if (a % 4 === 0 && (a % 100 != 0 || a % 400 === 0)) {
    return `${a} artık yildir`;
  } else {
    return `${a} artık yil degildir`;
  }
};

console.log(artikYil(2000));

// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****");

//* ORNEK: Silindir Hacmi
//******************************************/

//? hacim = Pi x r x r x h

// const r = +prompt("r:")
// const h = +prompt("h:")
// let hacim;
// const silindirHacim = (r, h) => {
//   hacim = Math.PI * r * r * h;
//   return hacim.toPrecision(4);
// };

// console.log(silindirHacim(3, 5));

// / const r = +prompt("r:")
// const h = +prompt("h:")

// const volume = (r, h = 1) => Math.PI * r * r * h
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`);

// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`)

// //* ORNEK: Yas hesapla
// //************************************************/
//! ERROR: Once tanimla sonra kullan
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.
// let result;
// let currentAge = (year) => {
//   result = new Date().getFullYear() - year;
//   return result;
// };

// console.log(currentAge(1988));

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
// fibo(6) => 8
//? fibo(n) = fibo(n-1) + fibo(n-2)

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  for (let i = 3; i <= n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return fib2;
};

const n = +prompt("Please enter n:");
console.log(`Fibonacci (${n}) = ${fibo(n)}`);

// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("*** 4 - RECURSION ***");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("Please enter n:");
if (n <= 0) {
  console.log("n should be bigger than zero");
} else {
  console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
}
