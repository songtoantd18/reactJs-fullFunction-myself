// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Posts2 from "./Posts2";
// import Page2 from "./Page2";
// import Loading from "./Loading";
// import Todos from "./Todos";

// const Pagination2 = () => {
//   const [posts2, setPosts2] = useState([]);
//   const [loading2, setLoading2] = useState(false);
//   const [currentPage2, setCurrentPage2] = useState(1);
//   const [postPerPage2, setPostPerPage2] = useState(1);

//   useEffect(() => {
//     //////////////
//     const fetchPosts2 = async () => {
//       setLoading2(true);
//       const res = await axios.get(
//         "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses"
//       );
//       // console.log("res.data:", res.data);
//       setPosts2(res.data);
//       setLoading2(false);
//     };
//     fetchPosts2();

//     //////////
//   }, []);
//   const indexOfLastPost = currentPage2 * postPerPage2;
//   const indexOfFirstPost = indexOfLastPost - postPerPage2;
//   const cureentPosts2 = posts2.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate2 = (pageNumber) => {
//     console.log("pageNumber:", pageNumber);
//     console.log("1:", 1);
//     return setCurrentPage2(pageNumber);
//   };

//   return (
//     <div>
//       <Todos />
//       <Posts2 posts2={cureentPosts2} loading2={loading2} />

//       <Page2
//         postPerPage2={postPerPage2}
//         totalPosts2={posts2.length}
//         paginate2={paginate2}
//       />
//     </div>
//   );
// };

// export default Pagination2;
