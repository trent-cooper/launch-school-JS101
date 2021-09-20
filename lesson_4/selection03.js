let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndeces(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

console.log(doubleOddIndeces(myNumbers));