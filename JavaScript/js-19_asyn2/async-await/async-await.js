//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
// https://newsapi.org/v2/top-headlines?country=us&apiKey=ff67d80a9de24478bd5e1ed815d94190

let getNews = async () => {
  const API_KEY = "ff67d80a9de24478bd5e1ed815d94190";
  const URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

  try{
    const await fetch(URL)
    if (!res.ok){
        throw new Error("Something went wrong")
,
    }

  }

  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
};

getNews();
