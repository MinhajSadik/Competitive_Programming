//Language: JavaScript
//Path: Problem_Solving/problems.js

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
