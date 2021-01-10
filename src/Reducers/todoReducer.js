import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "removeTodo":
      return state.filter((todo) => todo.id !== action.id);
    case "toggleTodo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "editTodo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;
