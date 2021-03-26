import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  addRedAction,
  addBlueAction,
  addGreenAction,
} from "../store/actions/colorActions";

function App() {
  const dispatch = useDispatch();
  const red = useSelector((state) => state.red);
  const green = useSelector((state) => state.green);
  const blue = useSelector((state) => state.blue);
  return (
    <main>
      <div
        className='container'
        style={{ backgroundColor: `rgb(${red}+${green}+${blue})` }}>
        <div className='box'>
          <button
            className='red big-button'
            onClick={() => dispatch(addRedAction())}>
            Red
          </button>
          <button
            className='green big-button'
            onClick={() => dispatch(addGreenAction())}>
            Green
          </button>
          <button
            className='blue big-button'
            onClick={() => dispatch(addBlueAction())}>
            Blue
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
