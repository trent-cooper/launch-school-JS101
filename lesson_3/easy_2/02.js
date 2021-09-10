let numbers = [1, 2, 3, 4, 5];
console.log(Array.from(numbers).reverse());
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log(Array.from(numbers).sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let reverseNumbers = [];

numbers.forEach(num => reverseNumbers.unshift(num));

console.log(reverseNumbers);
