
const questions = [
  { text: "Do you prefer structured plans?", system: "MBTI", trait: "Judging" },
  { text: "Do you seek peace and avoid conflict?", system: "Enneagram", trait: "Type 9" },
  { text: "Are you emotionally sensitive to feedback?", system: "Big Five", trait: "Neuroticism" },
  { text: "Do you take charge in group situations?", system: "DISC", trait: "Dominance" },
  { text: "Do you act based on gut feeling?", system: "Temperament", trait: "Choleric" },
  { text: "Do you fear rejection in relationships?", system: "Attachment", trait: "Anxious" }
];

let index = 0;
let scores = {};

function startTest() {
  document.getElementById("test-area").style.display = "block";
  document.querySelector("button").style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (index >= questions.length) {
    showResults();
    return;
  }
  document.getElementById("question-text").innerText = questions[index].text;
}

function answer(choice) {
  const trait = questions[index].trait;
  if (!scores[trait]) scores[trait] = 0;
  if (choice === 'A') scores[trait] += 1;
  index++;
  showQuestion();
}

function showResults() {
  document.getElementById("test-area").style.display = "none";
  document.getElementById("results").style.display = "block";
  const output = document.getElementById("output");
  output.innerHTML = Object.entries(scores).map(([trait, score]) => 
    `<p><strong>${trait}:</strong> ${score}</p>`).join('');
}
