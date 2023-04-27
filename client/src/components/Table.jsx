import React, { useState } from "react";
import { Table, Button, Form, Stack } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../Style.module.css/Table.module.css";

const DynamicTable = ({ data, handleDetailsClick, validations, columnsToShow }) => {
  const DEFAULT_ITEMS_PER_PAGE = 15;
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [cellErrors, setCellErrors] = useState([]);

  const handleCellEdit = (newValue, rowIndex, columnIndex) => {
    // Reset cellErrors state
    setCellErrors([]);
    // Perform validations on the new value here
    if (validations[columnIndex] && !validations[columnIndex](newValue)) {
      setCellErrors((prev) => {
        const updatedErrors = [...prev];
        updatedErrors[rowIndex] = updatedErrors[rowIndex] || [];
        updatedErrors[rowIndex][columnIndex] = "Please enter a valid value.";
        return updatedErrors;
      });
      return;
    }

    // Update the table data state with the new value
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = newValue;
    setTableData(newData);
  };

  const handleCellKeyDown = (e, rowIndex, columnIndex) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const rows = document.querySelectorAll("tr");
      const cells = rows[rowIndex].querySelectorAll("td");
      const nextColumnIndex = (columnIndex + 1) % cells.length;
      console.log(nextColumnIndex);
      const nextRowIndex = rowIndex + Math.floor((columnIndex + 1) / cells.length);
      if (nextRowIndex < rows.length) {
        cells[nextColumnIndex].setAttribute("contentEditable", true);
        cells[nextColumnIndex].focus();
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
    } else {
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

  /**
   * This function handles sorting of a table column based on the column index and current sort
   * direction.
   */
  const handleSortClick = (columnIndex) => {
    if (sortColumnIndex === columnIndex) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumnIndex(columnIndex);
      setSortDirection("asc");
    }
  };

  // Filter columns to show only those specified in the `columnsToShow` prop
  const filteredData = tableData.map(row => {
    const filteredRow = {};
    Object.keys(row).forEach((key, index) => {
      if (columnsToShow.includes(index)) {
        filteredRow[key] = row[key];
      }
    });
    return filteredRow;
  });

  // Sort the data based on the selected column and direction
  if (sortColumnIndex !== null && sortDirection !== null) {
    const sortedData = [...filteredData].sort((a, b) => {
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
    filteredData = sortedData;
  }
  // Get the current page of data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columnsToShow.map((columnIndex, index) => (
              <th key={index}>
                <Stack direction="horizontal" className={styles.tableHeader}>
                  <span>{data[0][columnIndex]}</span>
                  <FontAwesomeIcon icon={sortColumnIndex === columnIndex ? sortDirection === "asc" ? faSortUp : faSortDown : null} onClick={() => handleSortClick(columnIndex)} />
                </Stack>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cellValue, cellIndex) => (
                <td
                  key={cellIndex}
                  onKeyDown={(e) => handleCellKeyDown(e, rowIndex, cellIndex)}
                  onDoubleClick={(e) => handleCellDoubleClick(e)}
                  onBlur={(e) => handleCellEdit(e.target.textContent, rowIndex, cellIndex)}
                  contentEditable
                  suppressContentEditableWarning={true}
                  className={cellErrors[rowIndex] && cellErrors[rowIndex][cellIndex] ? styles.errorCell : null}
                >
                  {cellValue}
                </td>
              ))}
              <td>
                <Button variant="outline-secondary" onClick={() => handleDetailsClick(rowIndex)}>Details</Button>{' '}
                <Button variant="outline-danger" onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DynamicPagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default DynamicTable;