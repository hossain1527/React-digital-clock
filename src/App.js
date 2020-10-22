import React, { useState } from "react";
import "./App.css";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  let currentDate = new Date().toLocaleDateString();

  const [currT, setCurrT] = useState(currentTime);

  const changeTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setCurrT(currentTime);
  };

  setInterval(changeTime, 1000);

  return (
    <div className="container">
      <p>REACT DIGITAL CLOCK</p>
      <h1> {currentTime} </h1>
      <h1> {currentDate} </h1>
    </div>
  );
}
export default App;
