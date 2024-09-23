import React from 'react'
import Counter from "./components/counter/Counter"
import "./App.css";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="app">
      <Provider>
         <Counter /> 
      </Provider>
     
    </div>
  );
}

export default App