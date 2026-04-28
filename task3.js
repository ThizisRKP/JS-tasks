//🟡 Level 1 - Functions Basics
//Task 1: Student Form Function

function studentForm(name, age, course) {
  console.log("Name: " + name); //Name: Naveen
  console.log("Age: " + age); //Age: 22
  console.log("Course: " + course); //Course: MERN
}

studentForm("Naveen", 22, "MERN");

//Task 2: Calculator Function
function calculator(a, b) {
  console.log(a + b); //150
  console.log(a - b); //50
  console.log(a * b); //5000
}

calculator(100, 50);

//Task 3: Reusable Greeting

function greeting(userName) {
  console.log(`Hello ${userName}`);
}

greeting("Kamal"); //Hello Kamal
greeting("Praveen"); //Hello Praveen
greeting("Sai"); //Hello Sai

//🟡 Level 2 – Return & Scope
//Task 4: Return Value

const square = (a) => {
  return a * a;
};

console.log(square(5)); // 25

//Task 5: Scope Check

function checkPrinting() {
  let secret = "javascript";
  return secret;
}
checkPrinting();
// console.log(secret); //ReferenceError: secret is not defined

// Explanation for why secret is not printing outside of the scope

// let is block-scoped, that means its only accessible inside block scope(checkPrint) function, So seceret variable belongs to funcion scope(block scope), its does not exist in the global scope, if we want to print secret variable in global scope means we need to call the function and store it in a variable in global scope and that function should return the secret variable that time only we can get a secret variable's value.

//🟠 Level 3 – Spread / Rest
//Task 6: Merge Arrays

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];
let allToys = [...boys, ...girls];
console.log(allToys); //[ 'car', 'bike', 'doll', 'teddy' ]

//Task 7: Unlimited Numbers

function sumAll(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
}

console.log(sumAll(10, 20, 30, 40)); //100

//🔵 Level 4 – Destructuring
//Task 8: Array Destructuring

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;
console.log(c1); //red
console.log(c2); //green
console.log(c3); //blue

//Task 9: Object Destructuring

let emp = {
  name: "Krishnaprabhu",
  role: "Developer",
  salary: "5LPA",
};

let { name: eName, role, salary } = emp; //using aliasing for rename the name of the variable

console.log(eName, role); //Krishnaprabhu Developer

//🔴 Level 5 – Real-Time Logic
//Task 10: Offer Generator

function* offer() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}

let allOffers = offer();
console.log(allOffers.next().value); //10% cashback
console.log(allOffers.next().value); //20% cashback
console.log(allOffers.next().value); //50% cashback
console.log(allOffers.next().value); //Try again

if (allOffers.next().done) {
  console.log("No more offers"); //No more offers
}

//🟣 Level 6 – Advanced
//Task 11: Curry Function

function add(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30)); //60

//Task 12: Student Marks Analyzer

function marksAnalyzer(...marks) {
  let totalMarks = 0;
  marks.forEach((mark) => {
    totalMarks += mark;
  });
  const avrage = totalMarks / marks.length;

  return (
    console.log(`Total Marks = ${totalMarks}`),
    console.log(`Avarage = ${avrage}`)
  );
}

marksAnalyzer(80, 90, 70, 60);
//Total Marks = 300
//Avarage = 75

//🏆 Challenge Task (Real Company Level)

function register(userName, userRole, ...skills) {
  (console.log(`Name: ${userName}`),
    console.log(`Role: ${userRole}`),
    console.log("Skills:", ...skills));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");

// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React
