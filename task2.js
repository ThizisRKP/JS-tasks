let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN" },
  { id: 2, name: "John", mark: 45, course: "Python" },
  { id: 3, name: "Priya", mark: 72, course: "Java" },
  { id: 4, name: "Arun", mark: 95, course: "React" },
];

// 📌 Task 1: Print All Students

students.forEach((student) => {
  return console.log(
    `${student.id} ${student.name} ${student.mark} ${student.course}`,
  );
});
// output
// 1 Naveen 85 MERN
// task2.js:11 2 John 45 Python
// task2.js:11 3 Priya 72 Java
// task2.js:11 4 Arun 95 React

// 📌 Task 2: Pass / Fail

students.forEach((std) => {
  if (std.mark >= 50) {
    console.log(`${std.name} - Pass`);
  } else {
    console.log(`${std.name} - Fail`);
  }
});

//output

// Naveen - Pass
// task2.js:30 John - Fail
// task2.js:28 Priya - Pass
// task2.js:28 Arun - Pass

// 📌 Task 3: Grade System

for (let stdGrade of students) {
  if (stdGrade.mark >= 90) {
    console.log(`${stdGrade.name} - A Grade`);
  } else if (stdGrade.mark >= 75) {
    console.log(`${stdGrade.name} - B Grade`);
  } else if (stdGrade.mark >= 50) {
    console.log(`${stdGrade.name} - C Grade`);
  } else {
    console.log(`${stdGrade.name} - Fail`);
  }
}

//output
// Naveen - B Grade
// task2.js:51 John - Fail
// task2.js:49 Priya - C Grade
// task2.js:45 Arun - A Grade

// 📌 Task 4: Topper Student
const stdMarks = [];
for (let topperStudent of students) {
  stdMarks.push(topperStudent.mark);
}
for (let getMark of students) {
  if (getMark.mark === Math.max(...stdMarks)) {
    console.log(`Topper is ${getMark.name} - ${getMark.mark}`);
  }
}
//output
// Topper is Arun - 95

// 📌 Task 5: Course Search

for (let findPerson of students) {
  if (findPerson.course === "React") {
    console.log(
      `The person with React is :- ${findPerson.id} ${findPerson.name} ${findPerson.mark} ${findPerson.course}`,
    );
  }
}
//output
// The person with React is :- 4 Arun 95 React

// 📌 Task 6: Add New Student

students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });
console.log(students);

//output
// [
//   { id: 1, name: 'Naveen', mark: 85, course: 'MERN' },
//   { id: 2, name: 'John', mark: 45, course: 'Python' },
//   { id: 3, name: 'Priya', mark: 72, course: 'Java' },
//   { id: 4, name: 'Arun', mark: 95, course: 'React' },
//   { id: 5, name: 'Rahul', mark: 88, course: 'Node JS' }
// ]

//  📌Task 7: Attendance System

let status = "present";

switch (status) {
  case "present":
    console.log("Welcome");
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
    break;
}

//output
// Welcome

// 📌 Task 8: Login System

let userName = "admin";
let password = "1234";

if (userName === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}

//output
// Login Success
