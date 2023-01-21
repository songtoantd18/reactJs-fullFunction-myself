import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const addTodo = props.addTodoFunc;

  const [title, setTitle] = useState([]);
  ///////////css
  const addTodoFormStyle = {
    display: "flex",
  };
  const addTodoInputStyle = {
    flex: "10",
    padding: "5px",
  };
  const addTodoSubmitStyle = {
    color: "red",
  };
  ////////////////css
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0) {
      addTodo(title);
      setTitle("");
    }
  };
  return (
    <form style={addTodoFormStyle}>
      <input
        value={title}
        style={addTodoInputStyle}
        type="text"
        name="title"
        placeholder="them viec"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)} style={addTodoSubmitStyle}>
        add
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
