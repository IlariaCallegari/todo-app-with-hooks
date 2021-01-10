import React, {createContext } from "react";
import useTodoState from "../Hooks/useTodoState";
import seedTodos from "../seedTodos";

const TodosContext = createContext();

function TodosProvider(props) {
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    seedTodos
  );
  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
