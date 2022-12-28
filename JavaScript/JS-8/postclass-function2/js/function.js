// ARROW FUNCTION

//*********************************************************************************************/
console.log("ARROW FUNCTION");

//?Arrow function

// const topla = a,b) => a+b;

// alert(topla(1,2))

//? Function Expression

// const toplam = function(1,2){
//     return a+b;
// }

// alert(topla(1,2));

//? Function Declaration

// function topla(1,2){
//     return a+b;
// }

// alert(topla(1,2))

//! ÖRNEK

// const yasHesapla = function (dogumTarihi) {
//   return new Date().getFullYear() - dogumTarihi;
// };

// console.log(yasHesapla(1988));

// const yasHesapla = (dogumTarihi) => 2022 - dogumTarihi;

// console.log(yasHesapla(1988));

//! Bir dairenin alanını hesaplaya fonk. arrow ile

// daireAlani = Math.PI.r*r;
// let r = +prompt("please enter r");

// const alan = (r) => {
//   daireAlani = Math.PI * r * r;
//   return daireAlani;
// };
// console.log(alan(r));

//! FIBONACCI sayıları

// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let sum = 0;

//   for (let i = 3; i <= n; i++) {
//     sum = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = sum;
//   }

//   return fib2;
// };

// const n = +prompt("please enter n: ");
// if (n <= 0) {
//   console.log("n should be bigger than zero");
// } else {
//   console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
// }


//! RECURSIVE yöntem

const fibo = (n) => {
fibo(n) = fibo(n-2)+fibo(n-1)
if(n<=0){
    return 0
} else if (n===1 || n===2){
    return 1
}else{
    return fibo(n-1)+fibo(n-2)
    
} 
}
  const n = +prompt("please enter n: ");
  if (n <= 0) {
    console.log("n should be bigger than zero");
  } else {
    console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
  }