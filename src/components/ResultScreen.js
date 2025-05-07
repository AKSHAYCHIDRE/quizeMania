import React from "react";

const ResultScreen = ({ score, total }) => {
  return (
    <div className="results">
      <h2>Quiz Results</h2>
      <p>
        You scored {score} out of {total} ({((score / total) * 100).toFixed(2)}
        %)
      </p>
      <p>
        {score / total >= 0.8
          ? "Great job!"
          : score / total >= 0.6
          ? "Well done!"
          : "Keep practicing!"}
      </p>
    </div>
  );
};

export default ResultScreen;
