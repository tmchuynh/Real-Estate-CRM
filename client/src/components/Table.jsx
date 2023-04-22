import React, { useState } from "react";
import Table from "react-bootstrap";

const DynamicTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const handleCellEdit = (newValue, rowIndex, columnIndex) => {
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = newValue;
    setTableData(newData);
  };

  const handleCellKeyDown = (e, rowIndex, columnIndex) => {
    if (e.key === "Enter") {
      const newValue = e.target.textContent;
      handleCellEdit(newValue, rowIndex, columnIndex);
    }
  };

  const handleCellDoubleClick = (e) => {
    e.target.contentEditable = true;
    e.target.focus();
  };

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
        {tableData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td
                key={columnIndex}
                onDoubleClick={handleCellDoubleClick}
                onKeyDown={(e) =>
                  handleCellKeyDown(e, rowIndex, columnIndex)
                }
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DynamicTable;
