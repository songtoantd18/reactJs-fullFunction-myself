import React from "react";

const Page2 = ({ postPerPage2, totalPosts2, paginate2 }) => {
  const pageNumbers2 = [];
  for (let i = 1; i <= Math.ceil(totalPosts2 / postPerPage2); i++) {
    pageNumbers2.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers2.map((number) => {
        return (
          <li key={number} className="page-item">
            <a
              className="page-link"
              onClick={() => paginate2(number)}
              href="!#"
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Page2;
