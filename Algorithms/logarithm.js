//Language: JavaScript
//Path: Algorithms/logarithm.js

function logarithm(n) {
  while (n > 1) {
    n /= 2;
    console.log(n);
  }
  return n;
}

// console.log(logarithm(16));

function anotherLogarithm(n) {
  if (n <= 1) {
    return n;
  }
  return anotherLogarithm(n / 2);
}

console.log(anotherLogarithm(8));
