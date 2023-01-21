import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Header = () => {
  const [todosState, setTodoState] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses"
        );
        setTodoState(res.data);
      } catch (error) {
        console.log("error.message:", error.message);
      }
    };
    getTodos();
  }, []);
  const markComplete = async (id, complete, title, img) => {
    console.log("id:", id);

    try {
      console.log("1:", 1);
      const res = await axios.put(
        `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/${id}`,
        {
          id,
          title,
          complete: !complete,
          img,
        }
      );
      console.log("res.data:", res.data);
    } catch (error) {
      console.log("error:", "loi k lay api duoc");
    }
    const demo = async () => {
      try {
        console.log("2:", 2);
        const res1 = await axios.get(
          `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/`
        );

        setTodoState(res1.data);
      } catch (error) {
        console.log("error.message:", error.message);
      }
    };
    demo();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses/${id}`
      );

      const newTodos = todosState.filter((item) => {
        return item.id !== id;
      });
      setTodoState(newTodos);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleAddTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses",
        {
          title,
          complete: false,
        }
      );
      const newTodos = [...todosState, res.data];
      setTodoState(newTodos);
      console.log("res.data:", res.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const headerStyles = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  return (
    <div style={headerStyles}>
      <Pagination
        todosState={todosState}
        onMarkComplete={markComplete}
        onDelete={handleDelete}
        onAddTodo={handleAddTodo}
        setTodoState={setTodoState}
      />
    </div>
  );
};

export default Header;
