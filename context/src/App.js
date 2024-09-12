import { useState } from "react";
import { createContext } from "react";
import React from "react";
import data from "./data";
import Home from "./components/Home";

export const StudentContext = createContext();

const App = () => {
  const [student, setStudent] = useState(data);
  const changeColor = (id, newRenk) => {
    setStudent(
      student.map((a) => (a.id === id ? { ...a, color: newRenk } : a))
    );
  };

  return (
    <div className="App">
      <StudentContext.Provider value={{ student, changeColor }}>
        <Home />
      </StudentContext.Provider>
    </div>
  );
};

export default App;
