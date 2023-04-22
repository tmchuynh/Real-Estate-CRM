import React from "react";
import Table from "react-bootstrap/Table";

const DynamicTable = ({ data }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {data[0].map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicTable;