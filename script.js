// Part 1: Variables & Conditionals

function getGrade(score) {
  if (score >= 90 && score <= 100) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else if (score >= 0) return "F";
  else return null;
}

// Part 2: Functions (Reusable Logic)

function formatMessage(name, grade) {
  if (!grade) return `Invalid score entered, ${name}. Please try again.`;
  return `Hey ${name}, your grade is ${grade}.`;
}

// Part 3: Loops

const students = []; // Start with empty class list

// Part 1 & 2: Single Student Grade Checker

function checkGrade() {
  let name = prompt("Enter your name:");
  if (!name) {
    alert("You must enter a name to check your grade.");
    return; // Exit if no name
  }

  let scoreInput = prompt("Enter your exam score (0 - 100):");
  if (scoreInput === null || scoreInput.trim() === "") {
    alert("You must enter a score to check your grade.");
    return; // Exit if no score
  }

  let score = Number(scoreInput);

  // Validate score range
  if (isNaN(score) || score < 0 || score > 100) {
    alert("Invalid score. Please enter a number between 0 and 100.");
    return;
  }

  students.push({ name, score });

  let grade = getGrade(score);
  let message = formatMessage(name, grade);

  console.log(message);
  document.getElementById("single-result").innerText = message;

  document.querySelector("h1").innerText = " Grade Checker Running!";
}

// Part 3: Class Grade Checker (forEach loop)

function checkClassGrades() {
  const resultDiv = document.getElementById("class-result");
  resultDiv.innerHTML = "";

  if (students.length === 0) {
    resultDiv.innerText = "No class grades available yet.";
    return;
  }

  const ul = document.createElement("ul");

  students.forEach((student) => {
    if (student && student.name && student.score !== null) {
      const grade = getGrade(student.score);
      const message = formatMessage(student.name, grade);

      console.log(message);

      const li = document.createElement("li");
      li.innerText = message;
      ul.appendChild(li);
    }
  });

  resultDiv.appendChild(ul);

  resultDiv.style.background = "#f0f8ff";

  document.querySelector(
    "button[onclick='checkClassGrades()']"
  ).disabled = true;
}
