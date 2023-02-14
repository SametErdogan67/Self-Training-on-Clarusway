let productPrice = document.querySelector(".product-price strong");
let reduce = document.querySelector(".fa-minus");
let increase = document.querySelector(".fa-plus");
let counter = document.getElementById("product-quantity");
let remove = document.querySelector(".remove-product");
let productTotal = document.querySelector(".product-total");

reduce.addEventListener("click", (e) => {
  counter.innerHTML--;
  productTotal.innerHTML = productPrice.innerHTML * counter.innerHTML;
});

increase.addEventListener("click", (e) => {
  counter.innerHTML++;
});
