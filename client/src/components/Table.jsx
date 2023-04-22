import React, { useState } from "react";
import {Table, Button} from "react-bootstrap";
import DynamicPagination from "./Pagination";

const ITEMS_PER_PAGE = 15;

const DynamicTable = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleDeleteRow = (rowIndex) => {
    const newData = [...tableData];
    newData.splice(rowIndex, 1);
    setTableData(newData);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderData = () => {
    return data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <td
            key={columnIndex}
            onDoubleClick={handleCellDoubleClick}
            onKeyDown={(e) => handleCellKeyDown(e, rowIndex, columnIndex)}
          >
            {cell}
          </td>
        ))}
        <td>
          <Button onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
        </td>
      </tr>
    ));
  };
  

  return (
    <>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {data[0].map((header, i) => (
            <th key={i}>{header}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </Table>
    <DynamicPagination
    itemsPerPage={ITEMS_PER_PAGE}
    totalItems={data.length}
    currentPage={currentPage}
    onPageChange={handlePageChange}
  />
    </>
  );
};

export default DynamicTable;
