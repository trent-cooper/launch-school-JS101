let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(inner => {
  return inner.filter(num => {
    return (num % 3) === 0;
  });
});

console.log(arr);
console.log(newArr);