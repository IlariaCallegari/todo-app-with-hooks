import React, { useContext } from "react";
import { TodosContext } from "./Contexts/todosContext";
import { Paper, List, Divider } from "@material-ui/core";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = useContext(TodosContext);
  //if there are items on the todo list return items otherwise return null
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            //to add a key to a fragment, we have to use the long-hand version
            //rather than <> </> we have to use <React.Fragment>
            <React.Fragment>
              <TodoItem {...todo} key={todo.id} />
              {index < todos.length - 1 && <Divider key={index} />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
