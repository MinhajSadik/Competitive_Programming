//Language: JavaScript
//Path: Algorithms/timeOfCode.js
//Time Complexity: BigO(n)
function sumOfCode(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfCode(10));

//Time Complexity: BigO(1)
function sumOfCode1(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfCode1(10));

//Time Complexity: BigO(n^2)
function multipleOfCode(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      sum += i * j;
      console.log(i, j);
    }
  }
  return sum;
}

console.log(multipleOfCode(5));
