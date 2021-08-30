// Ask user for first number
// Ask user for second number
// Ask user for operator
// Perform calculation
// Print result

const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log("What's the first number?");
let number1 = Number(readline.question());

console.log("What's the second number?");
let number2 = Number(readline.question());

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operator = readline.question();

let output;
if (operator === '1') {
  output = number1 + number2;
} else if (operator === '2') {
  output = number1 - number2;
} else if (operator === '3') {
  output = number1 * number2;
} else if (operator === '4') {
  output = number1 / number2;
}

console.log(`The output is ${output}.`)
