//!Odev 1
// Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.
let count = +prompt("please enter how many number");

let toplam = 0;
for (let i = 1; i <= count; i++) {
  let numbers = +prompt("please " + i + ". number enter");
  toplam += numbers;
}
let result = toplam / count;

console.log(`Avarage is ${result}`);

// //! ODEV2:
// Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

let taban = +prompt("lütfen taban değerini giriniz:");
let us = +prompt("Lütfen pozitif üs değerini giriniz:");

let sonuc = 0;

for (let i = 0; i <= us; i++) {
  sonuc = taban ** us;
}
console.log(`${taban}'nin ${us}.inci üssü ${sonuc}`);

// //!ODEV3 (ZOR):
// "Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.
"
let number = +prompt("please enter pozitif number");
let basamakSayisi = 0;
while (number > 0) {
  number = Math.floor(number / 10);
  basamakSayisi++;
}
console.log(`Girmiş olduğunuz basamak sayisi ==>${basamakSayisi}`);
