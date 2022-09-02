//Language: JavaScript
//Path: Problem_Solving/Solutions.js

//Output Problem Hackerrank: use this any one line of code
/*ws.write(res + '\n');
ws.write(result.join("\n") + "\n");
*/

//Solutions 1:
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

//Solutions 2:
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

//Solutions 3:
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

//Solutions: 4
function gradingStudents(grades) {
  // Write your code here
  function multipleOfFive(x) {
    let counter = 0;
    while (x % 5 != 0) {
      x++;
      counter++;
    }
    return counter;
  }
  let roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let difference = multipleOfFive(grades[i]);
    let finalGrade = difference + grades[i];

    if (difference < 3 && finalGrade >= 40) {
      roundedGrades.push(finalGrade);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}

//Solutions: 5
function stringConstruction(s) {
  if (s.length == 0) return 0;

  let count = 0;
  let sb = "";

  let ch = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (sb.includes(ch[i]) == false) {
      sb = sb + ch[i];
      count++;
      continue;
    }
  }
  return count;
}

//Solutions: 6
function makeAnagram(s1, s2) {
  var dic = {};
  var i;
  for (i = 0; i < s1.length; i++) {
    dic[s1[i]] = (dic[s1[i]] || 0) + 1;
  }
  for (i = 0; i < s2.length; i++) {
    dic[s2[i]] = (dic[s2[i]] || 0) - 1;
  }
  var total = 0;
  for (var key in dic) {
    if (dic.hasOwnProperty(key)) {
      total += Math.abs(dic[key]);
    }
  }
  return total;
}

//Solutions: 7
function updateMap(map, l, n) {
  map[l]--;
  if (!map[l]) delete map[l];

  if (!map[n]) map[n] = 0;
  map[n]++;

  return map;
}

function getMedian(map, d, p) {
  let index = 0;
  const keys = Object.keys(map);
  let a = 0;
  let b = 0;
  while (p > 0) {
    const key = keys[index];
    p -= map[key];
    if (1 > p) {
      a = key;
    }
    if (!b && 2 > p) {
      b = key;
    }
    index += 1;
  }

  if (d % 2 === 0) {
    return (Number(a) + Number(b)) / 2;
  } else {
    return a;
  }
}
function activityNotifications(expenditure, d) {
  let map = {};
  let count = 0;
  let list = [];
  const p = d % 2 === 0 ? d / 2 + 1 : (d + 1) / 2;

  expenditure.slice(0, d).forEach((i) => {
    if (!map[i]) map[i] = 0;
    map[i]++;
  });

  for (let i = 0; expenditure.length - d > i; i++) {
    if (i !== 0) {
      map = updateMap(map, expenditure[i - 1], expenditure[i + d - 1]);
    }
    const m = getMedian(map, d, p);
    const s = expenditure[i + d];

    if (s >= m * 2) count++;
  }

  return count;
}

//Solutions: 8
function playingWithNumbers(arr, queries) {
  // let arr2 = arr;
  let res = [];
  for (var i = 0; i < queries.length; i++) {
    res[i] = 0;
    for (var j = 0; j < arr.length; j++) {
      arr[j] += queries[i];
      res[i] += arr[j] > 0 ? arr[j] : arr[j] * -1;
    }
  }
  return res;
}

//Solutions: 9
function matchingStrings(strings, queries) {
  // Write your code here
  return queries.map((x) => strings.filter((y) => y === x).length);
}

//Solutions: 10
function buildString(a, b, s) {
  // Write your code here
  let arr = s
    .split("")
    .map((c) => s.split("").map((c2) => 0 + (c == c2)))
    .map((e, i) => e.slice(0, i))
    .reverse()
    .map((e, i, ar) =>
      e.map((l, j) => {
        try {
          ar[i][j] = l ? ar[i - 1][j + 1] + l : 0;
        } catch (u) {
          ar[i][j] = l;
        }
        return ar[i][j];
      })
    )
    .reverse();
  let cost = arr.map((e) => e.map((l) => 0));
  cost[0] = [a];

  let calc = (r, c) => {
    if (cost[r][c]) return;
    let ucost = Math.min(...cost[r - 1]);
    if (arr[r][c] * a < b) {
      // cheaper new
      cost[r][c] = ucost + a;
    } else {
      for (let i = 0; i < arr[r][c]; i++) {
        cost[r + i][c + i] = ucost + b;
      }
    }
  };
  arr.map((re, r) => re.map((e, c) => calc(r, c)));
  return Math.min(...cost[cost.length - 1]);
}

function findSubstringLength(letters, str, currentPosition, minCopyString) {
  const letter = str[currentPosition];

  if (!letters[letter]) {
    return 0;
  }

  let maxLength = 0;
  for (let index in letters[letter]) {
    if (index + minCopyString >= currentPosition) {
      return;
    }
    let currentLength = 1;

    while (
      index + currentLength < currentPosition &&
      str[index + currentLength] === str[currentPosition + currentLength]
    ) {
      currentLength += 1;
    }
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}

function buildString1(a, b, s) {
  let cost = 0;
  const letters = {};
  const minCopyString = Math.ceil(b / a);

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    letters[letter] = letters[letter] || {};
    letters[letter][i] = true;

    if (i < minCopyString) {
      cost += a;
    } else {
      const maxCopy = findSubstringLength(letters, s, i, minCopyString);

      if (maxCopy > 0) {
        cost += b;
        i += maxCopy - 1;
        for (let k = i + 1; k < i + maxCopy; k += 1) {
          letters[s[k]][k] = true;
        }
      } else {
        cost += a;
      }
    }
  }
  return cost;
}

//BuildString problem another solution and it works
function findBiggestSubstring(string, remainder, min) {
  for (var i = min; i <= remainder.length; i++) {
    if (string.indexOf(remainder.substring(0, i)) == -1) {
      return i - 1;
    }
  }
  return i - 1;
}

function buildString(a, b, s) {
  let costPerState = [];
  costPerState[s.length - 1] = 0;
  let biggestPerState = [];
  let biggest = 0;
  for (let i = 0; i < s.length; i++) {
    let substring = s.substring(0, i + 1);
    let remainder = s.substring(i + 1);
    biggest = findBiggestSubstring(substring, remainder, biggest);
    biggestPerState[i] = biggest;
  }
  for (let i = s.length - 2; i >= 0; i--) {
    let minCost = a + costPerState[i + 1];
    for (var j = 1; j <= biggestPerState[i]; j++) {
      var cost = b + costPerState[i + j];
      minCost = Math.min(minCost, cost);
    }
    costPerState[i] = minCost;
  }
  console.log(a + costPerState[0]);
  return a + costPerState[0];
}
