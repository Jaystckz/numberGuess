const button = document.querySelector(".check");
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".number").textContent = secretNumber;

// to add click functionality to the check button
button.addEventListener("click", function () {
  // to display the inputed number
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // to display input a number when the input field is empty
  if (!guess) {
    document.querySelector(".message").textContent = "Input a number!";
  } else if (guess === secretNumber) {
    //to check if the guessed number is equals to the secret number
    document.querySelector(".message").textContent = "Correct Number 🎉";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!!!";
    // to deduct the score by 1 when the guess is higher than the secret number
    document.querySelector(".score").textContent = score = score - 1;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    // to deduct the score by 2 when the guess is lower than the secret number
    document.querySelector(".score").textContent = score = score - 1;
  }
});

// to make the score functionality work
