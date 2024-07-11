import QusCardTwo from "./QusCardTwo";

const questionSet = [
  {
    no: 1,
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    no: 2,
    question: "What is the most abundant gas in the Earth's atmosphere?",
    choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    answer: "Nitrogen",
  },
  {
    no: 3,
    question: "Which planet has the most extensive ring system?",
    choices: ["Jupiter  ", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
  {
    no: 4,
    question: "What is the most abundant gas in the Earth's atmosphere?",
    choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    answer: "Nitrogen",
  },
  {
    no: 5,
    question: "Which planet has the most extensive ring system?",
    choices: ["Jupiter  ", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
];

function TakeQuiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <QusCardTwo questionSet={questionSet} />
    </div>
  );
}

export default TakeQuiz;
