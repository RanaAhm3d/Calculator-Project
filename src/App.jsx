import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear the result
      setResult("");
    } else if (value === "=") {
      try {
        // Evaluate the expression
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      // Append the value to the current result
      setResult(result + value);
    }
  };

  return (
    <div className="container">
      <form>
        <input
          className="input"
          type="text"
          value={result}
          readOnly
        />
      </form>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
    </div>
  );
}

export default App;
