import React from "react";

const StartScreen = ({
  username,
  setUsername,
  selectedTopic,
  setSelectedTopic,
  startQuiz,
  categories,
}) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="start-screen">
            <h1 className="heading">
              Welcome to{" "}
              <span>
                QUIZ<strong>Mania</strong>
              </span>
            </h1>
            <div className="inner-wrapper">
              <div className="quiz-rules mb-3">
                Please read all the rules about this quiz before you start.
              </div>
              <div className="form-control border-0 p-0 mb-4">
                <label htmlFor="username">Full Name</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your full name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="username-input form-control"
                />
              </div>
              <div className="topic-selection">
                <label className="mb-2">Select a Topic:</label>
                <div className="d-flex flex-wrap">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="col-6 d-flex align-items-center radio-wrapper"
                    >
                      <input
                        type="radio"
                        id={category.id}
                        name="topic"
                        value={category.id}
                        className="form-check-input me-2"
                        checked={selectedTopic === category.id}
                        onChange={() => setSelectedTopic(category.id)}
                      />
                      <label htmlFor={category.id} className="form-check-label">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={startQuiz}
                className="primary-button btn mt-3"
                disabled={!username || !selectedTopic}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
