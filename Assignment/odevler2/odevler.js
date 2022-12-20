//?*******************************************************************************
//? Ödev 1

const number1 = +prompt("Number1:");
const number2 = +prompt("Number2:");
const deger = prompt("(+,-,*,/) dört işlemden birini giriniz");

if (deger === "+") {
  result = number1 + number2;
  console.log(`sonuç: ${result}`);
} else if (deger === "-") {
  result = number1 - number2;
  console.log(`sonuç: ${result}`);
} else if (deger === "*") {
  result = number1 * number2;
  console.log(`sonuç: ${result}`);
} else if (deger === "/") {
  result = number1 / number2;
  console.log(`sonuç: ${result}`);
} else {
  console.log("yanlis değer girildi");
}

//?********************************************************************************

//? Ödev2

//! Clarusway’deki haftalik ders ve etkinlik programinizi,
//! console’dan girilen gun degerine gore cikti veren kodu
//! switch-case yapisi ile yaziniz.

//! Program
//! Pazartesi, Sali ,Çarsamba, Persembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

let day = prompt(
  "Lütfen Haftanin Gününü Giriniz(Lütfen ingilizce karakter  ve baş harfi büyük giriniz): "
);

switch (day) {
  case "Pazartesi":
    console.log("Inclass");
    break;
  case "Sali":
    console.log("Inclass");
    break;
  case "Carsamba":
    console.log("Inclass");
    break;
  case "Persembe":
    console.log("Inclass");
    break;

  case "Cuma":
    console.log("Teamwork");
    break;
  case "Cumartesi":
    console.log("InClass + Workshop");
    break;
  case "Pazar":
    console.log("Self-Study");
    break;
  default:
    console.log("Yanlis gun girildi.");
}

//?*************************************************************************************

// //? Ödev 3

// //! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
// //! fazla olanlara ise %10 zam yapmak istiyoruz.
let realSalary = +prompt("Lütfen Maaşinizi Giriniz");
let salary = 5500;
newSalary1 = realSalary * 1.5;
newSalary2 = realSalary + realSalary / 10;

if (realSalary >= salary) {
  console.log(
    `Maaşiniza yüzde 10 zam yapilarak maaşiniz ${newSalary2} olmuştur. `
  );
} else if (realSalary < salary) {
  console.log(
    `Maaşiniza yüzde 50 zam yapilarak maaşiniz ${newSalary1} olmuştur. `
  );
} else {
  console.log("Lütfen geçerli maaş değeri giriniz.");
}

//?***************************************************************************************

//? ODEV4:

//!Console’dan kisininin gelir ve gider miktarini alan
//! eger kisinin geliri giderinden en az asgari ucret kadar fazla ise
//! Kredi Verilebilir 🤑 , değilse  Kredi Verilemez 🥺
//! seklinde cikti veren kodu Ternary deyimi kullanarak yaziniz.

let gelir = +prompt("Lütfen gelirinizi yaziniz:");
let gider = +prompt("Lütfen giderinizi yaziniz:");
let fark = gelir - gider;
let asgari = 5500;

console.log(
  fark >= asgari ? "🎉🎉Kredi Verilebilir" : " ⛔️⛔️Kredi verilemez"
);
