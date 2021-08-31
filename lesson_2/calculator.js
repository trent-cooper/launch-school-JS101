const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);

// Check if number valid
let invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

prompt('Welcome to Calculator!');

// Ask user for first number
function firstNumber() {
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmm.. that doesn't look like a valid number..");
    number1 = readline.question();
  }
  return number1;
}

// Ask user for second number
function secondNumber() {
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmm.. that doesn't look like a valid number..");
    number2 = readline.question();
  }
  return number2;
}

// Ask user for operator
function chooseOperator() {
  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt('Must choose 1, 2, 3 or 4');
    operator = readline.question();
  }
  return operator;
}

// Perform calculation
function calculator(number1, number2, operator) {
  switch (operator) {
    case '1':
      return Number(number1) + Number(number2);
    case '2':
      return Number(number1) - Number(number2);
    case '3':
      return Number(number1) * Number(number2);
    case '4':
      return Number(number1) / Number(number2);
  }
}


// Ask user if they want to perform another calculation
let proceed = 'y';

do {
  prompt(`The output is ${calculator(firstNumber(), secondNumber(), chooseOperator())}.`);
  prompt('Would you like to perform another calculation?\n=> (Y/N)');
  proceed = readline.question();

  while (!['y', 'n'].includes(proceed.toLowerCase())) {
    prompt('Must select Y/N');
    proceed = readline.question();
  }
} while (proceed.toLowerCase() === 'y');
