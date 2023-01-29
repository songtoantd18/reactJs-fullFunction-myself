import PropTypes from "prop-types";
import React from "react";

const TodoItem = (props) => {
  const todo = props.todoProps;
  const onClick = props.onClick;
  const onDelete = props.onDelete;

  //   css
  const TodoItemStyle = {
    background: "#00ff00",
    padding: "10px",
    borderBottom: "1px black dotted",
    textDecoration: todo.complete ? "line-through" : "none",
    color: todo.complete ? "red" : "black",
  };
  const deleteButtonStyle = {
    background: "#ff0000",
    color: "white",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
  //css

  return (
    <p style={TodoItemStyle}>
      {todo.title}:{todo.id}
      <button style={deleteButtonStyle} onClick={onClick}>
        check
      </button>
      <button style={deleteButtonStyle} onClick={onDelete}>
        delete
      </button>
    </p>
  );
};
TodoItem.prototype = {
  todoProps: PropTypes.object.isRequired,
  markCompleteFunc: PropTypes.func.isRequired,
  handleDeleteTodos: PropTypes.func.isRequired,
};

export default TodoItem;
