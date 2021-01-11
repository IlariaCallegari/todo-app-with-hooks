import React, { createContext } from "react";
import useLocalStorageReducer from "../Hooks/useLocalStorageReducer"
import todosReducer from "../Reducers/todoReducer";
import seedTodos from "../seedTodos"
// import useTodoState from "../Hooks/useTodoState";


const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos", seedTodos, todosReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosContext, TodosProvider, DispatchContext };
