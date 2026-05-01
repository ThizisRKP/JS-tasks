// LEVEL 1 (Basic Practice)
// 🔹 Task 1: Array Basics

let arr = [10, 20, 30, 40, 50];

console.log("First element :", arr[0]); // First element : 10
console.log("Last element :", arr[arr.length - 1]); // Last element : 50
console.log("Total length :", arr.length); // Total length : 5

// Task 2: Push & Pop

let arrTwo = [1, 2, 3];
arrTwo.push(4, 5);
arrTwo.pop(arrTwo.lastIndexOf());

console.log(arrTwo); // [1,2,3,4]

//  Task 3: Includes Check
// 👉 Check if "javascript" exists in:

let technicalSkills = ["html", "css", "javascript", "react"];
const checkSkill = technicalSkills.includes("javascript");
console.log(
  checkSkill ? "Yes, javascript is exists." : "No, javascript is not exists.",
); // Yes, javascript is exists

// 🥋 LEVEL 2 (Intermediate)
// 🔹 Task 4: Filter Salaries
//👉 Get employees with salary greater than 20000

let employees = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
];

employees.filter((emp) => {
  if (emp.salary >= 20000) {
    console.log(`Employee with salary is greater than 20000 is : ${emp.name}`);
  }
});
//Employee with salary is greater than 20000 is : B
// Employee with salary is greater than 20000 is : C

//🔹 Task 5: Map Names
//👉 From above array, return only: ["A","B","C"]

let eNames = [];
employees.map((emp) => eNames.push(emp.name));
console.log(eNames); // ["A","B","C"]

// 🔹 Task 6: Reduce Sum
// 👉 Find total salary using reduce()

let calculateAllSalary = employees.reduce(
  (accumulator, current, index, totalArray) => {
    return accumulator + current.salary;
  },
  0,
);

console.log("Total salary:", calculateAllSalary); //Total salary: 90000

//🥋 LEVEL 3 (Logic Building)
// 🔹 Task 7: Remove Duplicates

let mixedArr = [1, 2, 2, 3, 4, 4, 5];
let finalArr = [];

mixedArr.forEach((num) => {
  if (!finalArr.includes(num)) {
    finalArr.push(num);
  }
});

console.log(finalArr); // [ 1, 2, 3, 4, 5 ]

// 🔹 Task 8: Find Largest Number

let numbers = [10, 200, 5, 90];
console.log(Math.max(...numbers)); // 200

// 🔹 Task 9: Reverse String WITHOUT reverse()

let greet = "hello";
let reversedGreet = "";

for (let i = greet.length - 1; i >= 0; i--) {
  reversedGreet += greet[i];
}
console.log(reversedGreet); // olleh

// 🥋 LEVEL 4 (Advanced Thinking)
// 🔹 Task 10: Group by Salary

let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 },
];

let sortedObj = {};

for (let e of emp) {
  if (!sortedObj[e.salary]) {
    sortedObj[e.salary] = [];
  }
  sortedObj[e.salary].push(e.name);
}

console.log(sortedObj); // { '10000': [ 'A', 'C' ], '50000': [ 'B' ] }

// 🔹 Task 11: Flatten Array (without flat)

let nestedArr = [1, [2, [3, [4]]]];

function flatten(arr, res = []) {
  for (let i of arr) {
    Array.isArray(i) ? flatten(i, res) : res.push(i);
  }
  return res;
}

console.log(flatten(nestedArr)); // [1, 2, 3, 4]

// 🔹 Task 12: Custom Sort (Descending)

let unOrderArr = [5, 2, 9, 1];
let orderedArr = unOrderArr.sort();
let customArr = [];
for (let i = orderedArr.length - 1; i >= 0; i--) {
  customArr.push(orderedArr[i]);
}
console.log(customArr); // [ 9, 5, 2, 1 ]

// 🥋 BONUS (Interview Level 🔥)
// 🔹 Task 13: Find Second Largest
// let arr = [10, 50, 20, 40];
// 👉 Output: 40

let numArr = [10, 50, 20, 40];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let n of numArr) {
  if (n > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = n;
  } else if (n > secondLargest && n != firstLargest) {
    secondLargest = n;
  }
}

console.log(secondLargest); // 40

// 🔹 Task 14: Count Characters
//let str = "aabbccdde";

let characters = "aabbccdde";

let result = {};

for (let character of characters) {
  result[character] = (result[character] || 0) + 1;
}

console.log(result); // { a: 2, b: 2, c: 2, d: 2, e: 1 }
