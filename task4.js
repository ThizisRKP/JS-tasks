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
  checkSkill ? "Yes, javascript is exists" : "No, javascript is not exists",
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
