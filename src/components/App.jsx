import React, { useState } from "react";
import "../App.css";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [bgColor, setBgColor] = useState("");

  const bgColorHandler = () => {};
  const redHandler = () => {
    setRed(red + 25);
  };
  const greenHandler = () => {
    setGreen(green + 25);
  };
  const blueHandler = () => {
    setBlue(blue + 25);
  };
  return (
    <main>
      <div
        className='container'
        style={{ backgroundColor: `rgb(${red}+${green}+${blue})` }}>
        <div className='box'>RGB</div>
        <button className='red big-button' onClick={() => redHandler()}>
          Red
        </button>
        <button className='green big-button' onClick={() => greenHandler()}>
          Green
        </button>
        <button className='blue big-button' onClick={() => blueHandler()}>
          Blue
        </button>
      </div>
    </main>
  );
}

export default App;
