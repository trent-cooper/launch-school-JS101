// Ask user for first number
// Ask user for second number
// Ask user for operator
// Perform calculation
// Print result

const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);

let invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm.. that doesn't look like a valid number..");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm.. that doesn't look like a valid number..");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operator = readline.question();

while (!['1', '2', '3', '4'].includes(operator)) {
  prompt('Must choose 1, 2, 3 or 4');
  operator = readline.question();
}

let output;
switch (operator) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}


prompt(`The output is ${output}.`);
