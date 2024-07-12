function QusCard({ qus, choice, choicesHandler }) {
  return (
    <div>
      <input
        type="radio"
        name={qus.no}
        placeholder={choice}
        value={choice}
        onChange={() => {
          const choices = {
            no: qus.no,
            selected: choice,
            correctChoice: qus.answer,
          };
          choicesHandler(choices);
        }}
      />
      <label>{choice}</label>
    </div>
  );
}

export default QusCard;
