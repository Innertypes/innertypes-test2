const mbtiQuestions = [
  { text: "You enjoy being the center of attention.", axis: "EI", value: "E" },
  { text: "You feel drained after social interactions.", axis: "EI", value: "I" },
  { text: "You prefer group activities over solitary tasks.", axis: "EI", value: "E" },
  { text: "You often reflect deeply before speaking.", axis: "EI", value: "I" },
  { text: "You speak up quickly in group settings.", axis: "EI", value: "E" },
  { text: "You focus more on facts than possibilities.", axis: "SN", value: "S" },
  { text: "You enjoy exploring abstract concepts.", axis: "SN", value: "N" },
  { text: "You trust past experiences more than gut feelings.", axis: "SN", value: "S" },
  { text: "You frequently imagine future possibilities.", axis: "SN", value: "N" },
  { text: "You notice small details that others miss.", axis: "SN", value: "S" },
  { text: "You value logic over emotions in decisions.", axis: "TF", value: "T" },
  { text: "You avoid conflict to preserve harmony.", axis: "TF", value: "F" },
  { text: "You remain objective even in personal situations.", axis: "TF", value: "T" },
  { text: "You’re quick to empathize with others’ feelings.", axis: "TF", value: "F" },
  { text: "You prioritize fairness over personal needs.", axis: "TF", value: "T" },
  { text: "You like to make decisions early.", axis: "JP", value: "J" },
  { text: "You prefer to keep your options open.", axis: "JP", value: "P" },
  { text: "You use to-do lists to stay on track.", axis: "JP", value: "J" },
  { text: "You often change plans spontaneously.", axis: "JP", value: "P" },
  { text: "You work best with structure and deadlines.", axis: "JP", value: "J" }
];
const mbtiScores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

const questions = [
let currentIndex = 0;

function startTest() {
  document.getElementById("test-area").style.display = "block";
  document.querySelector("button").style.display = "none";
  showQuestion();
}

function showQuestion() {
  if (currentIndex >= mbtiQuestions.length) {
    showResults();
    return;
  }

  document.getElementById("question-text").innerText = mbtiQuestions[currentIndex].text;
}

function answer(choice) {
  const currentQ = mbtiQuestions[currentIndex];
  if (choice === 'A') mbtiScores[currentQ.value]++;
  currentIndex++;
  showQuestion();
}


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

  const mbtiType = 
    (mbtiScores.E >= mbtiScores.I ? "E" : "I") +
    (mbtiScores.S >= mbtiScores.N ? "S" : "N") +
    (mbtiScores.T >= mbtiScores.F ? "T" : "F") +
    (mbtiScores.J >= mbtiScores.P ? "J" : "P");

  let resultHTML = `<h3>Your MBTI Type: ${mbtiType}</h3><ul>`;
  for (const trait in mbtiScores) {
    resultHTML += `<li>${trait}: ${mbtiScores[trait]}</li>`;
  }
  resultHTML += `</ul>`;

  document.getElementById("output").innerHTML = resultHTML;
}
