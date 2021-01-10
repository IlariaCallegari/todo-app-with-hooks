import React, { useContext } from "react";
import useInputState from "./Hooks/useInputState";
import { Paper, TextField } from "@material-ui/core";
import { TodosContext } from "./Contexts/todosContext";

function TodoForm(props) {
  const { addTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
