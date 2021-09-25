function wordSizes(string) {
  let obj = {};
  let arr = string.split(' ');

  arr.forEach(word => {
    if (obj.hasOwnProperty(word.length)) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    }
  });

  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}