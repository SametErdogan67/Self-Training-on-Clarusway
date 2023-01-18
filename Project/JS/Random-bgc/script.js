document.querySelector(".btn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 50) +
    ")";
});

document.querySelector(".btn").addEventListener("mouseover", function () {
  document.querySelector(".btn").style.backgroundColor = "black";
});

document.querySelector(".btn").addEventListener("mouseout", function () {
  document.querySelector(".btn").style.backgroundColor = "transparent";
});
