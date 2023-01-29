import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const search = props.search;
  const setSearch = props.setSearch;
  const addTodo = props.addTodoFunc;
  const todosState = props.todosState;
  const setTodoState = props.setTodoState;
  const [order, setOrder] = useState("ASC");
  const [title, setTitle] = useState([]);

  const handleSort = (e, col) => {
    e.preventDefault();
    if (order === "ASC") {
      const sorted = [...todosState].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTodoState(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      console.log("order:", order);
      const sorted = [...todosState].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTodoState(sorted);
      setOrder("ASC");
    }
  };

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
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search title"
      />
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
      <button onClick={(e) => handleSort(e, "title")}>Sorting</button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodoFunc: PropTypes.func.isRequired,
};

export default AddTodo;
