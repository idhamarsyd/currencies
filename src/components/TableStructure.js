import "../App.css";
import { React, useState } from "react";

const Table = (props) => {
  const [Label, setLabel] = useState({
    label1: "Currency",
    label2: "We Buy",
    label3: "Exchange Rate",
    label4: "We Sell",
  });
  return (
    <table className="table-container">
      <thead>
        <tr className="table-row">
          <th className="table-header">{Label.label2}</th>
          <th className="table-header">{Label.label3}</th>
          <th className="table-header">{Label.label4}</th>
          <th className="table-header">{Label.label1}</th>
        </tr>
      </thead>
      <tbody>{props.data}</tbody>
    </table>
  );
};

export default Table;
