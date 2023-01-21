import React from "react";
import Loading from "./Loading";
const Posts2 = ({ posts2, loading2 }) => {
  if (loading2) {
    return <Loading />;
  }
  return (
    <ul>
      1111
      {posts2.map((item) => {
        return (
          <li key={item.id}>
            {" "}
            {item.id}:{item.title}
          </li>
        );
      })}
      2222
    </ul>
  );
};

export default Posts2;
