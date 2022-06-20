//Language: JavaScript
//Path: Algorithms/analyzeComplexity.js

//Time Complexity O(n^2) & Space Complexity: O(n)
function uniqueName(name) {
  let uniqueName = [];
  for (let i = 0; i < name.length; i++) {
    const currentName = name[i];
    if (!uniqueName.includes(currentName)) {
      uniqueName.push(currentName);
    }
  }
  return uniqueName;
}

console.log(uniqueName(["sharminhaj", "minhaj", "sharmina", "sharminhaj"]));
