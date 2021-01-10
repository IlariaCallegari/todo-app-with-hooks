import React, {useContext} from "react";
import { TodosContext } from "./Contexts/todosContext";
import useInputState from "./Hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm({id, toggleIsEditing, task }) {
  const {editTodo} = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleIsEditing();
  };

  return (
    <form style={{marginLeft:"1.75rem", width: "50%", height: "64px" }} onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        fullWidth
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
