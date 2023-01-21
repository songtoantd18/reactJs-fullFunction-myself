import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            {" "}
            {item.id} : {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
