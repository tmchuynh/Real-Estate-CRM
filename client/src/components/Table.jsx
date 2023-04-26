import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const DynamicTable = ({ data, handleDetailsClick }) => {
  const DEFAULT_ITEMS_PER_PAGE = 15;
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);

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

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
  };





  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage + 1;
  
    return tableData.slice(startIndex +1, endIndex).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <td
            style={{ textAlign: "center" }}
            key={columnIndex}
            onDoubleClick={handleCellDoubleClick}
            onKeyDown={(e) => handleCellKeyDown(e, rowIndex, columnIndex)}
          >
            {cell === "True" ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#04a201" }} /> : cell === "False" ? <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#d80e0e", }} /> : cell}
          </td>
        ))}
        <td>
          <Button onClick={() => handleDetailsClick(row)}>Details</Button>
          <Button onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
        </td>
      </tr>
    ));
  };
  



  return (
    <div>
      <Form.Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <option value="5">5 rows per page</option>
        <option value="10">10 rows per page</option>
        <option value="15">15 rows per page</option>
        <option value="20">20 rows per page</option>
      </Form.Select>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {data[0].map((header, i) => (
              <th style={{ textAlign: "center" }} key={i}>{header}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderData()}
        </tbody>
      </Table>
      <DynamicPagination
        totalItems={tableData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DynamicTable;