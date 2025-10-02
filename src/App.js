import React, { useState } from "react";
import "./App.css";

const colors = [
  { name: "Red", code: "#FF0000" },
  { name: "Green", code: "#00FF00" },
  { name: "Blue", code: "#0000FF" },
  { name: "Yellow", code: "#FFFF00" },
  { name: "Orange", code: "#FFA500" },
  { name: "Purple", code: "#800080" },
];

function App() {
  const [current, setCurrent] = useState(Math.floor(Math.random() * colors.length));
  const [feedback, setFeedback] = useState("");

  const handleClick = (name) => {
    if (name === colors[current].name) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try Again!");
    }
  };

  const nextColor = () => {
    setCurrent(Math.floor(Math.random() * colors.length));
    setFeedback("");
  };

  return (
    <div className="container">
      <h1>Learn Colors</h1>
      <div
        className="color-box"
        style={{ backgroundColor: colors[current].code }}
      ></div>
      <div>
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleClick(color.name)}
          >
            {color.name}
          </button>
        ))}
      </div>
      <h2>{feedback}</h2>
      <button onClick={nextColor}>Next Color</button>
    </div>
  );
}

export default App;
