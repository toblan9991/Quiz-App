import { useState } from "react";

function QuestionCard({ questionSet }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState([]);

  function choicesHandler(choices) {
    console.log("check array: ", selectedChoices);
    if (selectedChoices.find((c) => c.no === choices.no)) {
      selectedChoices.map((c) => {
        c.selected = c.no === choices.no ? choices.selected : c.selected;
      });
    } else {
      setSelectedChoices([...selectedChoices, choices]);
    }

    setCorrectAnswers(
      selectedChoices.filter((ans) => ans.selected === ans.correctChoice).length
    );

    // console.log("correct answers: ", correctAnswers);
    // console.log("selected Array: ", selectedChoices);
  }

  function submitHandler() {
    setCorrectAnswers(
      selectedChoices.filter((ans) => ans.selected === ans.correctChoice).length
    );
    const finalScore = selectedChoices.filter(
      (ans) => ans.selected === ans.correctChoice
    ).length;
    console.log("Submitted: ", selectedChoices, correctAnswers);
    console.log("Final Score: ", finalScore, "/", questionSet.length);
  }

  return (
    <div>
      {questionSet?.map((qus) => {
        return (
          <div
            key={qus.no}
            style={{
              padding: "1rem",
              margin: "2rem",
              boxShadow: "8px 8px 8px 2px rgba(90, 90, 90, 0.2)",
              borderRadius: "1rem",
              backgroundColor: "rgba(216, 123, 123, 0.2)",
            }}
          >
            <p>
              Q{qus.no}. {qus.question}
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              {qus.choices.map((c, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      name={qus.no}
                      placeholder={c}
                      value={c}
                      onChange={() => {
                        const choices = {
                          no: qus.no,
                          selected: c,
                          correctChoice: qus.answer,
                        };
                        choicesHandler(choices);
                      }}
                    />
                    <label>{c}</label>
                  </div>
                  // <p key={i}>{c}</p>
                );
              })}
            </div>
          </div>
        );
      })}
      <button onClick={() => submitHandler()}>Submit</button>
    </div>
  );
}

export default QuestionCard;
