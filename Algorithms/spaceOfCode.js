//Language: JavaScript
//Path: Algorithms/spaceOfCode.js

//Space Complexity: BigO(1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5]));

//Space Complexity: BigO(n)
function sum1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(sum1([1, 2, 3, 4, 5]));
