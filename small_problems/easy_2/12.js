const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    num *= -1;
    return '-' + integerToString(num);
  } else if (Math.sign(num) === 1) {
    return '+' + integerToString(num);
  }
  return integerToString(num);
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

/*
**
*/