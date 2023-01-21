// import React from "react";

// const Pagiantion3 = () => {
//   const [posts3, setPosts3] = useState([]);
//   const [loading3, setLoading3] = useState(false);
//   const [currentPage3, setCurrentPage3] = useState(1);
//   const [postPerPage3, setPostPerPage3] = useState(1);
//   useEffect(() => {
//     const fetchPosts3 = async () => {
//       setLoading3(true);
//       const res = await axios.get(
//         "https://62fbae6be4bcaf53518af2ed.mockapi.io/api/list-courses"
//       );
//       setPosts3(res.data);
//       setLoading3(false);
//     };
//     fetchPosts3();
//   }, []);
//   const indexOfLastPost = currentPage3 * postPerPage3;
//   const indexOfFirstPost = indexOfLastPost - postPerPage3;
//   const cureentPosts3 = posts3.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate3 = (pageNumber) => {
//     console.log("pageNumber:", pageNumber);
//     console.log("1:", 1);
//     return setCurrentPage3(pageNumber);
//   };
//   return <div></div>;
// };

// export default Pagiantion3;
