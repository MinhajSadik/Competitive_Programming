//Language: JavaScript
//Path: Algorithms/timeOfCode.js
//Time Complexity of sumOfCode: BigO(n)
function sumOfCode(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfCode(10));

//Time Complexity of sumOfCode1: BigO(1)
function sumOfCode1(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumOfCode1(10));

//Time Complexity of multipleOfCode: BigO(n^2)
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

// console.log(multipleOfCode(5));

//Time Complexity of minLog: O(n)
function minLog(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
console.log(minLog(4));

//Time Complexity of maxLog: BigO(1)
function maxLog(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(maxLog(3));

//Time Complexity of Fibonacci: O(n)
function fibonacci(n) {
  const fibo = [0, 1];
  for (let i = 0; i <= n; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
  }
  return fibo;
}

console.log(fibonacci(10));

//Time Complexity of Factorial: O(n)
function factorial(n) {
  // return n === 1 ? 1 : n * factorial(n - 1);
  // if (n === 1) {
  //   return 1;
  // }
  // return n * factorial(n - 1);
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5));

//Time Complexity of isPrime: O(sqrt(n))
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(4));
