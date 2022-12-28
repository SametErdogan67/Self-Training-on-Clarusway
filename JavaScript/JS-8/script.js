// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 4 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

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

if (n <= 0) {
  console.log("n should be bigger than zero");
} else {
  console.log(` Fibonacci (${n}) = ${fibo(n)}`);
}
