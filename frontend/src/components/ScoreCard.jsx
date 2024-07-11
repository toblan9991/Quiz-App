function ScoreCard({ correct, noOfQus }) {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "2rem",
          borderRadius: "1rem",
          textAlign: "center",
          boxShadow: "8px 8px 8px 2px rgba(90, 90, 90, 0.2)",
        }}
      >
        <p>Score: {correct}</p>
        <p>Total no of qus: {noOfQus}</p>
      </div>
    );
  }
  
  export default ScoreCard;
  