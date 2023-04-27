import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../Style.modules.css/Main.module.css";

const DynamicTable = ({ data, handleDetailsClick, validations }) => {
  const DEFAULT_ITEMS_PER_PAGE = 15;
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  const [cellErrors, setCellErrors] = useState([]);

  const handleCellEdit = (newValue, rowIndex, columnIndex) => {
    // Reset cellErrors state
    setCellErrors(null);

    // Perform validations on the new value here
    if (validations[columnIndex] && !validations[columnIndex](newValue)) {
      setCellErrors("Please enter a valid value.");
      return;
    }

    // Update the table data state with the new value
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = newValue;
    setTableData(newData);
  };


  const handleCellKeyDown = (e, rowIndex, columnIndex) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const rows = document.querySelectorAll("tr");
      const cells = rows[rowIndex].querySelectorAll("td");
      const nextColumnIndex = (columnIndex + 1) % cells.length;
      const nextRowIndex = rowIndex + Math.floor((columnIndex + 1) / cells.length);
      if (nextRowIndex < rows.length) {
        cells[nextColumnIndex].setAttribute("contentEditable", true);
        cells[nextColumnIndex].focus();
      }
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

  /**
   * The function sorts table data based on a specified column index and direction.
   * @returns The `sortData` function returns either the sorted data (if `sortColumnIndex` is not null)
   * or the original `tableData` (if `sortColumnIndex` is null).
   */
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

    return sortedData.slice(startIndex + 1, endIndex).map((row, rowIndex) => {
      // Define cell errors for this row
      return (
        <tr key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <td
              style={{
                textAlign: "center",
                direction: "ltr",
                unicodeBidi: "embed",
              }}
              key={columnIndex}
              onDoubleClick={columnIndex !== row.length - 1 ? handleCellDoubleClick : null}
              onKeyDown={(e) => handleCellKeyDown(e, rowIndex + 1, columnIndex)}
              contentEditable={columnIndex !== row.length - 1}
            >

              {cell === "True" ? (
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#06d6a0" }} />
              ) : cell === "False" ? (
                <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ef476f" }} />
              ) : (
                cell
              )}
            </td>
          ))}
          <td>
            <Button className={`${styles.actionButton} ${styles.button} ${styles.marginX}`} onClick={() => handleDetailsClick(row)}>Details</Button>
            <Button className={`${styles.actionButton} ${styles.button} ${styles.marginX}`} onClick={() => handleDeleteRow(rowIndex)}>Delete</Button>
          </td>
        </tr>
      );
    });

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