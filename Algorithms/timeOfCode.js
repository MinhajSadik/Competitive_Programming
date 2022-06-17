function sumOfCode(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfCode(10));

function sumOfCode1(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumOfCode1(10));
