//!1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit
// console.log(calFahrenheit(30)) // output: 86

// function change(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }

// console.log(change(30));

// let change = (celsius) => {
//   fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// };

// console.log(change(30));

// //! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// // console.log(reverseString('hello world')) // output: dlrow olleh

// let str = "Hello World";

// let reverseWord = () => {
//   let newWord = str.split("").reverse().join("").toLowerCase();
//   return newWord;
// };

// console.log(reverseWord());

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?(Büyük , küçük harf duyarlılığı olmamalıdır.)
// const string = 'selles'
// console.log(isPalindrome(string)) // output: true
// let string = "merhaba";
// let reversed = string.split("").reverse().join("").toLowerCase();
// console.log(reversed);
// const isPalindrome = function (string) {
//   if (string === reversed) {
//     return "String is palindrome";
//   } else {
//     return "String is not a palindrome";
//   }
// };

// console.log(isPalindrome(string));

//! 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo

function findVowels(str) {
  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "o" ||
      str[i] == "i" ||
      str[i] == "u"
    ) {
      vowels += str[i];
    }
  }
  return vowels;
}

console.log(findVowels("Hello World"));

// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true
