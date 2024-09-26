import React from "react";
import "./counter.css";

const Counter = () => {
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1> </h1>
      <h2> </h2>
      <div>
        <button className="counter-button positive">Arttir</button>
        <button className="counter-button ">Reset</button>
        <button className="counter-button negative">Azalt</button>
      </div>
    </div>
  );
};

export default Counter;
