
let questions = [
  { text: "Do you prefer ideas over facts?", system: "MBTI" },
  { text: "Do you tend to withdraw under stress?", system: "Enneagram" }
];
let answers = [];
let current = 0;

function startTest() {
  document.getElementById("question-area").style.display = "block";
  document.querySelector("button").style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (current >= questions.length) {
    showResults();
    return;
  }
  document.getElementById("question-text").innerText = questions[current].text;
}

function answer(choice) {
  answers.push({ question: questions[current], answer: choice });
  current++;
  showQuestion();
}

function showResults() {
  document.getElementById("question-area").style.display = "none";
  document.getElementById("results").style.display = "block";
  document.getElementById("results-text").innerText = "Test complete. " + JSON.stringify(answers);
}
