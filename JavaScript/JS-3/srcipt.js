const age = prompt("please enter your age");
const healty = confirm("are you healty");

if (age >= 18 && healty == true) {
  console.log("Ehliyet alabilir");
} else {
  console.log("Ehliyet alamaz");
}
