import React from "react";

const QuizScreen = ({
  question,
  currentIndex,
  totalQuestions,
  timer,
  handleAnswer,
  handleNext,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="quiz-app">
            <div className="question-container d-flex align-items-center flex-column">
              <h2>{question?.question}</h2>
              <div className="options">
                <form>
                  {question?.options.map((option, idx) => (
                    <div key={idx} className="form-check radio-wrapper">
                      <input
                        type="radio"
                        id={`option-${idx}`}
                        name="quiz-options"
                        value={option}
                        className="form-check-input"
                        onChange={() => handleAnswer(option)}
                      />
                      <label
                        htmlFor={`option-${idx}`}
                        className="form-check-label"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="controls">
                <p>Time remaining: {timer}s</p>
                <button onClick={handleNext} className="primary-button btn">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
