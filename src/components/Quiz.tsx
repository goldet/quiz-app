import { useState } from "react";
import Question from "./Question";

const questions = [
  {
    question: 'What layout components make up the css "box model',
    choices: [
      "Content, Padding, Border, Margin",
      "Inner Content, Outer Content, Border, Margin",
      "Center, Padding, Edges, Margin",
    ],
    answer: "Content, Padding, Border, Margin",
  },

  {
    question: "Which statement is true about REST web services?",
    choices: [
      "It works based on HTTP protocols",
      "It does not support XML image, or ext",
      "It is not a very lightweight protocol",
    ],
    answer: "It works based on HTTP protocols",
  },

  {
    question: "What is Cross-Site Scripting (XSS)?",
    choices: [
      "Cross-Site Scripting is a type of security vulnerability that occurs when a user is tricked into downloading malicious software onto their computer.",
      " Cross-Site Scripting is a type of security vulnerability that occurs when a user visits a fake website designed to look like a legitimate one, in order to steal their credentials.",
      "Cross-Site Scripting is a type of security vulnerability that occurs when an attacker is able to inject malicious code into a website or web application that is viewed by other users.",
    ],
    answer:
      "Cross-Site Scripting is a type of security vulnerability that occurs when an attacker is able to inject malicious code into a website or web application that is viewed by other users.",
  },

  {
    question: "What is Strict Mode",
    choices: [
      "Strict mode is a feature in JavaScript that allows developers to write code in a more relaxed, permissive syntax.",
      "Strict mode is a feature in JavaScript that enforces a stricter, more secure syntax, disallowing certain behaviors and reporting more errors.",
      "Strict mode is a feature in JavaScript that enables asynchronous execution of code, improving performance in certain situations.",
    ],
    answer:
      "Strict mode is a feature in JavaScript that enforces a stricter, more secure syntax, disallowing certain behaviors and reporting more errors.",
  },

  /* {
    question: "",
    choices: [],
    answers: "",
  }, */
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`You finished the quiz! You scored ${score}/${questions.length}`);
    }
  };
  
  return (
    <div>
      <h1>Junior Fullstack Developer Quiz</h1>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          answer={questions[currentQuestion].answer}
          onAnswer={handleAnswer}
        />
      ) : (
        "null"
      )}
    </div>
  );
};

export default Quiz;
