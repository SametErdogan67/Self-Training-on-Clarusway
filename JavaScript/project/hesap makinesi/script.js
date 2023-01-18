"use strict";

let sayilar1 = document.getElementsByTagName("button"),



for (let i = 0; i< sayilar1.lenght; i++){
    sayilar1[i].onclick = hesapla;
}

let sonuc1 = document.getElementById("sonuc")

function hesapla()