import React, { useState, Fragment, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import Loading from "./Loading";

const Todos = ({ onMarkComplete, onDelete, onAddTodo, posts2, loading2 }) => {
  if (loading2) {
    return <Loading />;
  }
  return (
    <Fragment>
      <AddTodo addTodoFunc={onAddTodo} />
      {posts2.map((todo) => {
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
