import React, { useState } from "react";
import { dataValue } from "./dataValue";

const Sorting = () => {
  const [data, setData] = useState(dataValue);
  console.log("data:", data);
  const [order, setOrder] = useState("ASC");
  console.log("order:", order);
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <th onClick={() => sorting("first_name")}>first name</th>
          <th onClick={() => sorting("last_name")}>last name</th>
          <th onClick={() => sorting("email")}>email</th>
          <th onClick={() => sorting("gender")}>gender</th>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sorting;
