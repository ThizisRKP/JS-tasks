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
