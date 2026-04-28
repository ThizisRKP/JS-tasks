//Task 1 :  Variable Update

var val = 50;
console.log(val);
let num1 = val; //50
var val = 100;
console.log(val); //100

//Task 2: Let Variable Math
let marks = 80;
marks += 10;
console.log(marks); //90

//Task 3: Const Value
const prize = 500;
const finalPrize = prize + 100;
console.log(finalPrize); // 600

// Task 4: Printing Statements
let greet = "Welcome Team";
let year = 2026;
let statement = true;

console.log(greet); // Welcome Team
console.log(year); // 2026
console.log(statement); // true

//Task 5: Datatype Check
console.log(typeof "JavaScript"); //string
console.log(typeof 250); //number
console.log(typeof false); //boolean

// Task 6: Array Task
const fruits = ["apple", "banana", "orange", "mango", "graps"];
console.log(fruits); //[ 'apple', 'banana', 'orange', 'mango', 'graps' ]
console.log("First fruit : " + fruits[0]); //First fruit : apple
console.log("Last fruit : " + fruits[fruits.length - 1]); //Last fruit : graps

// Task 7: Object Task
const student = {
  name: "Krishna",
  age: "25",
  course: "MERN",
};
console.log(student.name); //Krishna
console.log(student.age); //25

// Task 8: Arithmetic Operators
console.log(20 + 10); //30
console.log(50 - 25); //25
console.log(5 * 5); //25
console.log(100 / 4); //25
console.log(20 % 3); //2

//Task 9: Increment / Decrement
let x = 5;
x++;
console.log(x); //6

let y = 10;
y--;
console.log(y); //9

//Task 10: Comparison Operators
console.log(10 > 5); //true
console.log(5 < 2); //false
console.log(20 == "20"); //true
console.log(15 === "15"); //false
console.log(10 != 8); //true

// Task 11: Logical Operators
console.log(5 > 2 && 10 > 3); // true
console.log(7 < 5 || 8 > 2); // true
console.log(!(10 > 5)); //false

//Task 12: Ternary Operator
let age = 18;
age >= 18 ? console.log("Eligible") : console.log("Not Eligible"); //Eligible
