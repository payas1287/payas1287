import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddToDo";
import axios from "axios";
import TodoList from "../components/TodoList";
import { notify, SweetIcon } from "../helper/sweetAlerts";

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  const [todos, setTodos] = useState<ITodoType[]>([]);
  console.log(todos);

  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddTodo: AddFn = async (task) => {
    try {
      await axios.post(erl, { task, isDone: false });
      notify("Todo created", SweetIcon.SUCCESS);
      getTodos();
    } catch (error) {
      console.log(error);
      notify("Todo not created!", SweetIcon.ERROR);
    }
  };
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
      notify("Todo updated", SweetIcon.SUCCESS);
      getTodos();
    } catch (error) {
      console.log(error);
      notify("Todo not updated!", SweetIcon.ERROR);
    }
  };

  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Main;
