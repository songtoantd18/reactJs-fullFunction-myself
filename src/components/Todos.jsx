import React, { useState, Fragment, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Todos = ({ todosState, onMarkComplete, onDelete, onAddTodo }) => {
  return (
    <Fragment>
      <AddTodo addTodoFunc={onAddTodo} />
      {todosState.map((todo) => {
        return (
          <TodoItem
            todoProps={todo}
            key={todo.id}
            onClick={() =>
              onMarkComplete(todo.id, todo.complete, todo.title, todo.img)
            }
            onDelete={() => onDelete(todo.id)}
          />
        );
      })}
    </Fragment>
  );
};

export default Todos;
