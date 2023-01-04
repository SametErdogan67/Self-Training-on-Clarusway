let ad = "Samet";
// let soyad = "Erdoğan";
// let yas = 34;
// let sehir = "Zonguldak";

// let mesaj =
//   "Benim adım" +
//   ad +
//   "ve soyadım" +
//   soyad +
//   ". " +
//   sehir +
//   "'de yasıyorum. " +
//   "Emekliliğe" +
//   (65 - 34) +
//   "yılım kaldı";

// console.log(mesaj);

// let mesaj1 = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} 'de yaşıyorum. Emekliliğe ${
//   65 - yas
// } yılım kaldı.`;

// console.log(mesaj1);

// let kursAdi = "Komple Uygulamali Web Geliştirme Eğitimi";

// let sonuc = kursAdi.toLowerCase();

// let sonuc1 = kursAdi.slice(0, 5);

// console.log(sonuc1);

// let url = "https://www.sadikturan.com";
// let kursAdi = "Komple Uygulamali Web Geliştirme";

// let sonuc;

// sonuc = url.length;

// console.log(sonuc);

// let sonuc1 = kursAdi.split(" ").length;

// console.log(sonuc1);

// let sonuc2 = url.startsWith("https");

// console.log(sonuc2);

// let sonuc3 = kursAdi.includes("Eğitimi");

// console.log(sonuc3);

// let yeniKursAdi = kursAdi.replaceAll(" ", "-").toLowerCase();

// console.log(yeniKursAdi);

// // let text3 = text1.concat(" ", text2);

// let newString = url.concat("/", yeniKursAdi);

// console.log(newString);

// let email = "s.erdogan@gmail.com";

// let email = "s.erdogangmail.com";

// console.log(email.includes("@"));

// if (email.includes("@")) {
//   console.log("email is valid");
// } else {
//   console.log("email is invalid");
// }

// function findCount(source, search) {
//   let count = 0;
//   let position = source.indexOf(search);

//   while (position !== -1) {
//     count++;
//     position = source.indexOf(search, ++position);
//   }

//   return count;
// }

// let str = "You do not know what you do not know until you know";

// console.log(findCount(str, "know"));

// const dizi = [-5, 15, 22 - 4, 45, 78];

// const topla = (dizi) => {
//   let negatifler = 0;
//   let pozitifler = 0;
//   for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] < 0) {
//       negatifler = negatifler + dizi[i];
//     } else {
//       pozitifler = pozitifler + dizi[i];
//     }
//   }
//   console.log(`dizideki pozitifler toplamı: ${pozitifler}`);
//   console.log(`dizideki negatifler toplamı: ${negatifler}`);
// };

// topla(dizi);

// const sayilar = [-5, 15, 22, -4, 45, 78, -25];

// let sonuc = 0;
// for (let i in sayilar) {
//   sonuc += sayilar[i];
// }
// console.log(sonuc);

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

const birlestir = (x, y) => {
  let adSoyad = [];
  for (let i in x) {
    adSoyad[i] = `${x[i]} ${y[i]}`;
  }
  return adSoyad;
};

console.log(birlestir(adlar, soyAdlar));
