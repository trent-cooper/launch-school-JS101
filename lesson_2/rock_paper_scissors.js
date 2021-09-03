const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let prompt = (message) => console.log(`=> ${message}`);

let diplayWinner = (playerInput, computerInput) => {
  if ((playerInput === 'rock' && computerInput === 'scissors') ||
      (playerInput === 'paper' && computerInput === 'rock') ||
      (playerInput === 'scissors' && computerInput === 'paper')) {
    prompt('You win!');
  } else if (playerInput === computerInput) {
    prompt ('It\'s a tie');
  } else {
    prompt ('Computer wins!');
  }
};

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice, please try again');
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, Computer chose ${computerChoice}.`);

  diplayWinner(choice, computerChoice);

  prompt('Do you want to play again? (Y/N)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}