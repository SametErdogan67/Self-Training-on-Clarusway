let guess;
let trial = 5;
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

while (trial > 0) {
  guess = Number(prompt("please enter a guess number"));

  trial--;
  if (guess === randomNumber) {
    console.log("Congrats, you win");
    break;
  } else if (guess < randomNumber) {
    console.log("increase your guess");
  } else {
    console.log("decrease your guess");
  }
  if (trial == 0) {
    console.log("Sorry, you lost");
  }
}
