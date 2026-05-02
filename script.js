function calculate() {
  let input = document.getElementById("grades").value;
  let grades = input.split(",");

  let sum = 0;

  for (let g of grades) {
    sum += Number(g);
  }

  let avg = (sum / grades.length).toFixed(2);

  let grade;

  if (avg >= 85) {
    grade = "A";
  } else if (avg >= 75) {
    grade = "B";
  } else if (avg >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }

  document.getElementById("result").innerText =
    "Average: " + avg + " | Grade: " + grade;
}