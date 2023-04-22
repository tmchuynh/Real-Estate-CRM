import React, { useState } from "react";
import Table from "react-bootstrap";

const DynamicTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const handleCellChange = (event, rowIndex, colIndex) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][colIndex] = event.target.value;
    setTableData(updatedTableData);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {tableData[0].map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>
                <input
                  type="text"
                  value={cell}
                  onChange={(event) => handleCellChange(event, i + 1, j)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicTable;
