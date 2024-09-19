import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const[todos, settodos] = useState(JSON.parse(localStorage.getItem("todos") ) || [])

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
},[todos])

  return (
    <div className="App">
     <Header settodos={settodos} todos={todos}/>
     <TodoList settodos={settodos} todos={todos}/>
    </div>
  );
}

export default App;
