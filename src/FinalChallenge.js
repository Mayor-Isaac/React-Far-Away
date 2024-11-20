// import "./final-challenge.css";
import { useState } from "react";

export default function FinalChallenge() {
  // Hooks
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // Functions

  function decreaseCount() {
    // alert(`Step is ${step} and count is ${count}`);
    setCount(count - step);
  }
  function increaseCount() {
    setCount(count + step);
  }
  return (
    <>
      <div className="step">
        <input
          type="range"
          name="range"
          id=""
          min="0"
          max="10"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <span>{step}</span>
      </div>
      <Count
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        step={step}
        setCount={setCount}
        setStep={setStep}
      />
    </>
  );
}
function Count({
  count,
  decreaseCount,
  increaseCount,
  setCount,
  setStep,
  step,
}) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="count">
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={increaseCount}>+</button>
      </div>
      <p className="message">
        {count === 0 && `Today is ${date.toDateString()}`}
        {count < 0 &&
          ` ${
            count === -1 ? "A day" : `${Math.abs(count)} days`
          } ago was ${date.toDateString()}`}
        {count > 0 &&
          `${
            count === 1 ? "A day" : `${count} days`
          } from Today is ${date.toDateString()}`}
      </p>
      {count !== 0 || step !== 1 ? (
        <button
          className="reset"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : null}
    </>
  );
}
// .toDateString()
