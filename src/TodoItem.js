import React, { useContext } from "react";
import { TodosContext } from "./Contexts/todosContext";
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./Hooks/useToggleState";

function TodoItem({ task, id, completed }) {
  const {dispatch} = useContext(TodosContext)
  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleRemove = () => {
    dispatch({type: "removeTodo", id})

  };
  const handleToggle = () => {
    dispatch({type: "toggleTodo", id})
  };

  const listItem = (
    <ListItem style={{height: "64px"}}>
      <Checkbox checked={completed} tabIndex={-1} onClick={handleToggle} />
      <ListItemText style={{ textDecoration: completed && "line-through" }}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={handleRemove}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
  const editTodoForm = (
    <EditTodoForm
      id={id}
      toggleIsEditing={toggleIsEditing}
      task={task}
    />
  );

  return <>{isEditing ? editTodoForm : listItem}</>;
}

export default TodoItem;
