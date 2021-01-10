import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: (id) => {
      //filter out removed todo and call setTodos with new todos array
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    toggleTodo: (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (id, newTask) => {
      const editedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(editedTodos);
    },
  };
};
