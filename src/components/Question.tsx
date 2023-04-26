import React from "react";

interface Props {
  question: string;
  choices: string[];
  answer: string;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = ({ question, choices, answer, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {choices.map((choice) => (
          <button onClick={() => onAnswer(choice)}>{choice}</button>
        ))}
      </div>
    </div>
  );
};

export default Question;
