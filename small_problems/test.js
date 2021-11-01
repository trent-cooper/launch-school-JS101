/* eslint-disable max-len */

// Given a non-empty string check if it can be constructed by taking a substring of it and
// appending multiple copies of the substring together. You may assume the given string
// consists of lowercase English letters only.

// Example 1:

// Input: 'abab'
// Output: True
// Explanation: It's the substring 'ab' twice.
// Example 2:

// Input: 'aba'
// Output: False

console.log(repeatedSubstringPattern("abab")); //true
console.log(repeatedSubstringPattern("aba")); // false
console.log(repeatedSubstringPattern("aabaaba")); //false
console.log(repeatedSubstringPattern("abaababaab")); // true
console.log(repeatedSubstringPattern("abcabcabcabc")); // true

// input: non-empty string - lowercase letters only
// output: boolean value

// explicit requirements:
//  a single substring must be able to make-up the entire string if chained together.

// implicit requirements:
//  must be 2+ repetitions of the substring chained.
//  the input string must be an even number of characters

// algorithm:
//  findSubStr()
//  iterate over string and find all possible substrings that are:
//    2 or more characters
//    equal to, or less than half the string's length
//  due to above logic, only need to iterate over first half of string
//
//  main func:
//    iterate over substr array
//    divide string length by substring length, and step to next substr if not divisible
//    if divisible, repeat substr number of times divided by
//    if equal to initial string, return true
//    if no match after loop, return false


function repeatedSubstringPattern(str) {
  let subStrings = findSubStr(str);
  for (let idx = 0; idx < subStrings.length; idx++) {
    if ((str.length % subStrings[idx].length) !== 0) {
      continue;
    } else {
      let repeatNum = str.length / subStrings[idx].length;
      if (str === subStrings[idx].repeat(repeatNum)) {
        console.log(subStrings[idx]);
        return true;
      }
      continue;
    }
  }
  return false;
}

function findSubStr(str) {
  let arr = [];
  let halfLength = str.length / 2;

  for (let idx = 1; idx <= halfLength; idx++) {
    arr.push(str.slice(0, idx));
  }
  return arr;
}
