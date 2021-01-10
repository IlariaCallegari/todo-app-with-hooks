import React, { createContext, useReducer } from "react";
import todosReducer from "../Reducers/todoReducer";
import useTodoState from "../Hooks/useTodoState";
import seedTodos from "../seedTodos";

const TodosContext = createContext();

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, seedTodos);
  return (
    <TodosContext.Provider
      value={{ todos, dispatch }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider };
