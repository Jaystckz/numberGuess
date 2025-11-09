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
    //when player wins game
    document.querySelector(".message").textContent = "Correct Number 🎉";

    //   to change background color when player wins
    document.querySelector("body").style.backgroundColor = "#60b347";

    // when players guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!!!";
      // to deduct the score by 1 when the guess is higher than the secret number
      document.querySelector(".score").textContent = score = score - 1;
    } else {
      // to display you lost the game
      document.querySelector(".message").textContent = "You lost the game!";
      //   to return score to zero when you loose
      document.querySelector(".score").textContent = 0;
    }

    // when players guess is not up to the secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      // to deduct the score by 2 when the guess is lower than the secret number
      document.querySelector(".score").textContent = score = score - 1;
    } else {
      // to display you lost the game message
      document.querySelector(".message").textContent = "You lost the game";
      //to return score to zero when you loose
      document.querySelector(".score").textContent = 0;
    }
  }
});

// to make the score functionality work
