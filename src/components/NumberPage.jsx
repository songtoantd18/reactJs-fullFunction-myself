import React from "react";

const NumberPage = ({
  postPerPage2,
  totalPosts2,
  paginate2,
  // isActive
}) => {
  const pageNumbers2 = [];
  for (let i = 1; i <= Math.ceil(totalPosts2 / postPerPage2); i++) {
    pageNumbers2.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers2.map((number) => {
        return (
          <li key={number} className="page-item  ">
            <a
              // style={{
              //   backgroundColor: isActive ? "salmon" : "",
              //   color: isActive ? "white" : "",
              // }}
              className="page-link "
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

export default NumberPage;
