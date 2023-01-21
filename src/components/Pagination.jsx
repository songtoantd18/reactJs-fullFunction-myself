// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Posts from "./Posts";
// import Page from "./Page";

// const Pagination = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(7);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(res.data);
//       setLoading(false);
//     };
//     fetchPosts();
//   }, []);

//   const indexOfLastPost = currentPage * postPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;
//   const cureentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   console.log("indexOfLastPost:", indexOfLastPost);
//   console.log("indexOfFirstPost:", indexOfFirstPost);
//   console.log("cureentPosts:", cureentPosts);

//   const paginate = (pageNumber) => {
//     console.log("pageNumber:", pageNumber);
//     console.log("1:", 1);
//     return setCurrentPage(pageNumber);
//   };
//   return (
//     <div>
//       <Posts posts={cureentPosts} loading={loading} />
//       <Page
//         postPerPage={postPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default Pagination;
