import React from "react";

const Page = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        console.log("number:", number);
        return (
          <li key={number} className="page-item">
            <a className="page-link" onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Page;
