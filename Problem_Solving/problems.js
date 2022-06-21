//Language: JavaScript
//Path: Problem_Solving/problems.js

//Problem 1:
function getHigherAndLower(arr) {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    const current = arr[i];
    if (current > higher) {
      higher = current;
    }
    if (current < lower) {
      lower = current;
    }
  }
  return [lower, higher];
}

console.log(getHigherAndLower([-4, 5, "emit", -9, 11, -3]));

//Problem 2:
function charCount(str) {
  let countedChar = {};
  for (let i = 0; i < str.length; i++) {
    //remove white space and extra symbols
    let currentChar = str[i].replace(/[^a-zA-Z]/g, "");
    if (currentChar === "") continue;

    let char = str[i].toLowerCase();
    if (countedChar[char]) {
      countedChar[char]++;
    } else {
      countedChar[char] = 1;
    }
  }
  return countedChar;
}

console.log(charCount("hello Everyone! @@  ##"));

//Problem 3:
function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  return true;
}

console.log(sameFrequency([2, 3, 4], [9, 4, 16]));
