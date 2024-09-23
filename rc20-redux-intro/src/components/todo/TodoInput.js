import { useState } from "react";
import { useDispatch } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";


const TodoInput = () => {



  return (
    <form >
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
