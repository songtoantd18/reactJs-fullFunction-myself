import React, { Fragment, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import Loading from "./Loading";

const Todos = ({
  todosState,
  setTodoState,
  onMarkComplete,
  onDelete,
  onAddTodo,
  posts2,
  loading2,
  handleEdit,
}) => {
  const [search, setSearch] = useState("");
  if (loading2) {
    return <Loading />;
  }
  return (
    <Fragment>
      <AddTodo
        todosState={todosState}
        setTodoState={setTodoState}
        addTodoFunc={onAddTodo}
        search={search}
        setSearch={setSearch}
      />
      {search.length === 0
        ? posts2.map((todo) => {
            return (
              <TodoItem
                todoProps={todo}
                key={todo.id}
                onMarkComplete={() =>
                  onMarkComplete(todo.id, todo.complete, todo.title, todo.img)
                }
                onDelete={() => onDelete(todo.id)}
                handleEdit={() => handleEdit(todo.id)}
              />
            );
          })
        : todosState
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
                  onMarkComplete={() =>
                    onMarkComplete(todo.id, todo.complete, todo.title, todo.img)
                  }
                  onDelete={() => onDelete(todo.id)}
                  handleEdit={() => handleEdit(todo.id)}
                />
              );
            })}
    </Fragment>
  );
};

export default Todos;
