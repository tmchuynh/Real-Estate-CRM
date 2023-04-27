import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../Style.modules.css/Main.module.css";

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

  const [sortColumnIndex, setSortColumnIndex] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSortClick = (columnIndex) => {
    if (sortColumnIndex === columnIndex) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumnIndex(columnIndex);
      setSortDirection("asc");
    }
  };

  const sortData = () => {
    if (sortColumnIndex !== null) {
      const sortedData = [...tableData].sort((a, b) => {
        const valueA = a[sortColumnIndex];
        const valueB = b[sortColumnIndex];
        if (valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return sortedData;
    } else {
      return tableData;
    }
  };
  const renderData = () => {
    const sortedData = sortData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage + 1;
  
    return sortedData.slice(startIndex + 1, endIndex).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, columnIndex) => (
          <td
            style={{ textAlign: "center" }}
            key={columnIndex}
            onDoubleClick={handleCellDoubleClick}
            onKeyDown={(e) => handleCellKeyDown(e, rowIndex, columnIndex)}
          >
            {sortedData[rowIndex + 1][columnIndex] === "True" ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#06d6a0" }} /> : sortedData[rowIndex + 1][columnIndex] === "False" ? <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ef476f" }} /> : sortedData[rowIndex + 1][columnIndex]}
          </td>
        ))}
        <td>
          <Button className={`${styles.actionButton} ${styles.button} ${styles.marginX}`} onClick={() => handleDetailsClick(row)}>Details</Button>
          <Button className={`${styles.actionButton} ${styles.button} ${styles.marginX}`} onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
        </td>
      </tr>
    ));
  };
  
  

  return (
    <div>
      <Form.Select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.tableSelect} >
        <option value="5">5 rows per page</option>
        <option value="10">10 rows per page</option>
        <option value="15">15 rows per page</option>
        <option value="20">20 rows per page</option>
      </Form.Select>
      <Table striped bordered hover responsive className={styles.table}>
        <thead>
          <tr className="text-center">
            {data[0].map((header, index) => (
              <th key={index}
                onClick={() => handleSortClick(index)}
                style={{ cursor: "pointer" }}
              >{header}

                {sortColumnIndex === index && (
                  <FontAwesomeIcon
                    icon={sortDirection === "asc" ? faSortUp : faSortDown}
                    style={{ marginLeft: "0.5rem" }}
                  />
                )}
              </th>
            ))}
            <th>Actions</th>
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