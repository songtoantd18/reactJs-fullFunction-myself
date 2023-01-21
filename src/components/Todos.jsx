import React, { useState, Fragment, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import Loading from "./Loading";

const Todos = ({ onMarkComplete, onDelete, onAddTodo, posts2, loading2 }) => {
  const [search, setSearch] = useState("");

  if (loading2) {
    return <Loading />;
  }
  return (
    <Fragment>
      <AddTodo addTodoFunc={onAddTodo} search={search} setSearch={setSearch} />
      {posts2
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((todo) => {
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
