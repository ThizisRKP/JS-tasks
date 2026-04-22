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

// 📌 Task 2: Pass / Fail

students.forEach((std) => {
  if (std.mark >= 50) {
    console.log(`${std.name} - Pass`);
  } else {
    console.log(`${std.name} - Fail`);
  }
});

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

// 📌 Task 5: Course Search

for (let findPerson of students) {
  if (findPerson.course === "React") {
    console.log(
      `The person with React is :- ${findPerson.id} ${findPerson.name} ${findPerson.mark} ${findPerson.course}`,
    );
  }
}

// 📌 Task 6: Add New Student

students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });
console.log(students);

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

// 📌 Task 8: Login System

let userName = "admin";
let password = "1234";

if (userName === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}
