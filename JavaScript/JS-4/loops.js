// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// const n = +prompt("Enter a number");
// let sum = 0;

// for (i = 0; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// const num = Number(prompt("Enter a number"));

// //

// for (let i; i <= num; i++) {
//   const randomNum = Math.round(Math.random() * 100);
//   console.log(` ${i}.random number: ${randomNum}`);
// }

const primeNum = Number(prompt("Enter a number"));

for (let i = 2; i < primeNum; i++) {
  if (primeNum % i === 0) {
    console.log("number is not primeNumber");
  } else if (primeNum === 2) {
    console.log("2 is primeNumber");
  } else {
    console.log("number is primeNumber");
  }
}
