import React from "react";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {
  const { sayac, text } = useSelector((state) => state.counterReducer);
  const dispatchhh = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1> {sayac} </h1>
      <h2> {text} </h2>
      <div>
        <button onClick={()=>dispatchhh(arttir())} className="counter-button positive">
          ARTTIR
        </button>
        <button onClick={()=>dispatchhh(sifirla())} className="counter-button ">RESET</button>
        <button onClick={()=>dispatchhh(azalt())} className="counter-button negative">AZALT</button>
      </div>
    </div>
  );
};

export default Counter;
