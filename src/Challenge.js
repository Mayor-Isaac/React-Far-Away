// import "./challenge.css";
import { useState } from "react";
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7354,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 2945,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 2620,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 4087,
    question: "How to give components memory?",
    answer: "useState Hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with city?",
    answer: "Controlled element",
  },
];
export default function Challenge() {
  return (
    <>
      <div className="title">Challenge Page</div>
      <Cards />
    </>
  );
}

function Cards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="cards">
      {questions.map((question) => {
        return (
          <div
            className={selectedId === question.id ? "card answer" : "card"}
            onClick={() => handleClick(question.id)}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}
