/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  date: string;
  done: boolean;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  let nextIdState = initialTodos.length;
  console.log(nextIdState);

  const incrementNextId = () => {
    nextIdState = nextIdState + 1;
    console.log(nextIdState);
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data!);
    if (initialTodos && initialTodos.length >= 1) {
      incrementNextId();
      console.log(nextIdState);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const toggleTodo = (id: number) => {
    console.log(id);
    //@TODO
    const newTodo = todoState.map(
      (todo: Itodo): Itodo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      }
    );
    setTodoState(newTodo);
  };

  const removeTodo = (id: number) => {
    console.log(id);

    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo) => {
    const nextId = todoState.length + 1;
    console.log(todo.id);
    console.log(nextId);
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextId
      })
    );
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
