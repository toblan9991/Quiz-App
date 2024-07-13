
import { useState } from "react";
import QusCard from "./QusCard";
import ScoreCard from "./ScoreCard";

function QusCardTwo({ questionSet }) {
  const [currentQus, setCurrentQus] = useState(1);
  const [buttonText, setButtonTxt] = useState("Next");
  const [showScore, setShowScore] = useState(false);

  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState([]);

  function choicesHandler(choice) {
    // console.log("choice selected: ", choice);
    if (selectedChoices.find((c) => c.no === choice.no)) {
      selectedChoices.map((c) => {
        c.selected = c.no === choice.no ? choice.selected : c.selected;
      });
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }

    setCorrectAnswers(
      selectedChoices.filter((ans) => ans.selected === ans.correctChoice).length
    );
  }

  function nextBtnHandler() {
    // console.log("choices next: ", selectedChoices, correctAnswers);

    if (currentQus < questionSet.length) {
      setCurrentQus(currentQus + 1);
    }
    if (currentQus === questionSet.length - 1) {
      setButtonTxt("Submit");
    }
    // console.log("button pressed");
  }

  function submitHandler() {
    // console.log("Submitted");
    setShowScore(true);
    const finalScore = selectedChoices.filter(
      (ans) => ans.selected === ans.correctChoice
    ).length;
    console.log("Final Score: ", finalScore, "/", questionSet.length);
  }

  return (
    <div style={{ margin: "auto 5rem" }}>
      {questionSet?.map((qus, i) => {
        return (
          currentQus === qus.no && (
            <div
              key={i}
              style={{
                padding: "1rem",
                boxShadow: "8px 8px 8px 2px rgba(90, 90, 90, 0.2)",
                borderRadius: "1rem",
                backgroundColor: "rgba(216, 123, 123, 0.2)",
              }}
            >
              <p style={{ fontSize: "1.5rem" }}>
                Q{qus.no}. {qus.question}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                  margin: "1rem 0",
                }}
              >
                {qus.choices.map((c, i) => {
                  return (
                    <QusCard
                      qus={qus}
                      choice={c}
                      choicesHandler={choicesHandler}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          )
        );
      })}
      <div
        style={{
          margin: "2rem auto",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <button
          style={{
            width: "100px",
            height: "30px",
            border: 0,
            borderRadius: "1rem",
            backgroundColor: "blueviolet",
            color: "white",
          }}
          onClick={buttonText === "Next" ? nextBtnHandler : submitHandler}
        >
          {buttonText}
        </button>
      </div>
      {showScore && (
        <ScoreCard correct={correctAnswers} noOfQus={questionSet.length} />
      )}
    </div>
  );
}

export default QusCardTwo;
