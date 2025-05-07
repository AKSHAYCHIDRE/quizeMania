import React, { useState, useEffect } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import Header from "./components/Header";
import quizData from "./data/quizData";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [username, setUsername] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    if (isStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (isStarted && timer === 0) {
      handleNext();
    }
  }, [timer, isStarted]);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimer(10);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    handleNext();
  };

  const startQuiz = () => {
    if (username.trim() && selectedTopic) {
      const selectedCategory = quizData.categories.find(
        (category) => category.id === selectedTopic
      );
      setQuestions(selectedCategory?.questions || []);
      setIsStarted(true);
    } else {
      alert("Please enter your name and select a topic to continue.");
    }
  };

  <Header />;
  if (!isStarted) {
    return (
      <>
        <StartScreen
          username={username}
          setUsername={setUsername}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
          startQuiz={startQuiz}
          categories={quizData.categories}
        />
      </>
    );
  }

  if (showResults) {
    return <ResultScreen score={score} total={questions.length} />;
  }

  return (
    <QuizScreen
      question={questions[currentIndex]}
      currentIndex={currentIndex}
      totalQuestions={questions.length}
      timer={timer}
      handleAnswer={handleAnswer}
      handleNext={handleNext}
    />
  );
};

export default App;
