import axios from "axios";
import React, { useEffect, useState } from "react";
import NumberPage from "./NumberPage";
import Todos from "./Todos";

const Pagination = ({
  todosState,
  setTodoState,
  onMarkComplete,
  onDelete,
  onAddTodo,
}) => {
  const posts = todosState;
  const setPosts = setTodoState;
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses"
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const cureentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Todos
        todosState={todosState}
        setTodoState={setTodoState}
        onMarkComplete={onMarkComplete}
        onDelete={onDelete}
        onAddTodo={onAddTodo}
        posts2={cureentPosts}
        loading2={loading}
      />

      <NumberPage
        postPerPage2={postPerPage}
        totalPosts2={posts.length}
        paginate2={paginate}
      />
    </div>
  );
};

export default Pagination;
