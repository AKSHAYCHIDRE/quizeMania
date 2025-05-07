const quizData = {
  categories: [
    {
      id: "js_basics",
      name: "JavaScript Basics",
      questions: [
        {
          id: "q1",
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which company developed JavaScript?",
          options: ["A. Microsoft", "B. Netscape", "C. Google", "D. Mozilla"],
          correctAnswer: "B",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "react_advance",
      name: "React.js Advance",
      questions: [
        {
          id: "q1",
          question: "What is React Fiber?",
          options: [
            "A. A new version of React DOM",
            "B. An experimental API",
            "C. A completely new algorithm for rendering UI",
            "D. None of the above",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which of the following is a new feature of React 16?",
          options: [
            "A. Error Boundaries",
            "B. Portals",
            "C. Fragments",
            "D. All of the above",
          ],
          correctAnswer: "D",
          timeLimit: 10,
        },
      ],
    },
    {
      id: "angular_basics",
      name: "Angular Basics",
      questions: [
        {
          id: "q1",
          question: "What is Angular CLI?",
          options: [
            "A. A tool for managing Angular projects",
            "B. A library for Angular",
            "C. A framework",
            "D. None of the above",
          ],
          correctAnswer: "A",
          timeLimit: 10,
        },
        {
          id: "q2",
          question: "Which architecture does Angular use?",
          options: [
            "A. MVC",
            "B. MVVM",
            "C. Both A and B",
            "D. None of the above",
          ],
          correctAnswer: "C",
          timeLimit: 10,
        },
      ],
    },
  ],
};

export default quizData;
