import React, { useState } from 'react';
import QusCard from "./QusCard";
import ScoreCard from "./ScoreCard";

function QusCardTwo({ questionSet }) {
  const [currentQusIndex, setCurrentQusIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const currentQus = questionSet[currentQusIndex];

  function choicesHandler(choice) {
    const updatedChoices = [...selectedChoices];
    const existingChoice = updatedChoices.find(c => c.no === choice.no);

    if (existingChoice) {
      existingChoice.selected = choice.selected;
    } else {
      updatedChoices.push(choice);
    }

    setSelectedChoices(updatedChoices);
  }

  function nextBtnHandler() {
    if (currentQusIndex < questionSet.length - 1) {
      setCurrentQusIndex(currentQusIndex + 1);
    } else {
      setShowScore(true);
      const correctAnswers = selectedChoices.filter(choice => choice.is_correct).length;
      console.log("Final Score: ", correctAnswers, "/", questionSet.length);
    }
  }

  return (
    <div style={{ margin: "auto 5rem" }}>
      <div
        key={currentQus.no}
        style={{
          padding: "1rem",
          boxShadow: "8px 8px 8px 2px rgba(90, 90, 90, 0.2)",
          borderRadius: "1rem",
          backgroundColor: "rgba(216, 123, 123, 0.2)",
        }}
      >
        <p style={{ fontSize: "1.5rem" }}>
          Q{currentQus.no}. {currentQus.question}
        </p>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", margin: "1rem 0" }}>
          {currentQus.choices.map((c, i) => (
            <QusCard
              qus={currentQus}
              choice={c}
              choicesHandler={choicesHandler}
              key={i}
            />
          ))}
        </div>
      </div>
      <button
        style={{
          width: "100px",
          height: "30px",
          border: 0,
          borderRadius: "1rem",
          backgroundColor: "blueviolet",
          color: "white",
        }}
        onClick={nextBtnHandler}
      >
        {currentQusIndex < questionSet.length - 1 ? "Next" : "Submit"}
      </button>
      {showScore && (
        <ScoreCard correct={selectedChoices.filter(choice => choice.is_correct).length} noOfQus={questionSet.length} />
      )}
    </div>
  );
}

export default QusCardTwo;
