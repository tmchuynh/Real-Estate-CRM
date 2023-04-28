import React, { useState } from "react";
import { Table, Button, Form, Stack } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import CopyButton from '../components/CopyBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../Style.module.css/Table.module.css";

const DynamicTable = ({ data, handleDetailsClick, validations }) => {
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
      console.log(cellErrors);
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
    e.target.contentEditable = false;
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
  
  This function handles sorting of a table column based on the column index and current sort
  direction.
  */
  const handleSortClick = (columnIndex) => {
    if (sortColumnIndex === columnIndex) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumnIndex(columnIndex);
      setSortDirection("asc");
    }
  };

  const sortedTableData = tableData.slice(1).sort((a, b) => {
    const valA = a[sortColumnIndex];
    const valB = b[sortColumnIndex];

    if (typeof valA === "string" && typeof valB === "string") {
      return sortDirection === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    } else {
      return sortDirection === "asc" ? valA - valB : valB - valA;
    }
  });
  const renderTableHeader = () => {
    if (data.length === 0) return null;
    const header = Object.keys(data[0]);
    return (
      <tr className={styles.headerFont}>
        {header.map((key, index) => {
          return (
            <th key={index} style={{ textAlign: "center" }}>
              {key.toUpperCase()}
              <Button
                variant="link"
                size="sm"
                className={styles.sortButton}
                onClick={() => handleSortClick(index)}
              >
                <FontAwesomeIcon
                  icon={faSortUp}
                  className={
                    sortColumnIndex === index && sortDirection === "asc"
                      ? styles.sortIconActive
                      : styles.sortIconInactive
                  }
                />
                <FontAwesomeIcon
                  icon={faSortDown}
                  className={
                    sortColumnIndex === index && sortDirection === "desc"
                      ? styles.sortIconActive
                      : styles.sortIconInactive
                  }
                />
              </Button>
            </th>
          );
        })}
      </tr>
    );
  };
  // return( {sortedTableData .map( => ( {Object.assign(Object.keys(row).map((key, colIdx) => (
  const renderTableBody = () => {
    return (
      <tbody>
        {sortedTableData
          .slice(
            (currentPage - 1) * itemsPerPage,
            (currentPage - 1) * itemsPerPage + itemsPerPage
          )
          .map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((lead, columnIndex) => (
                <td
                  key={columnIndex}
                  contentEditable={true}
                  value={row[lead]}
                  suppressContentEditableWarning={false}
                  onKeyDown={(e) =>
                    handleCellKeyDown(e, rowIndex, columnIndex)
                  }
                  onDoubleClick={handleCellDoubleClick}
                >
                  {row[lead] === true ? (
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#06d6a0" }} />
                  ) : row[lead] === false ? (
                    <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ef476f" }} />
                  ) : row[lead].includes('@') ? (
                    <>
                      {row[lead]}
                      <CopyButton email="email" />
                    </>
                  ) : row[lead].includes("(") ? (
                    <>
                      {row[lead]}
                      <CopyButton phoneNumber="phone_number" />
                    </>
                  ) : (
                    row[lead]
                  )}
                </td>
              ))}
              <td>
                <div className="d-flex gap-1">
                  <Button
                    type="button"
                    className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}
                    style={{
                      backgroundColor: "#6b3fa0",
                      color: "#fae206",
                      borderColor: "#000000",
                      transition: "background-color 0.2s, color 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#f0f5fa";
                      e.target.style.color = "#6b3fa0";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#6b3fa0";
                      e.target.style.color = "#fae206";
                    }}
                    onClick={() => handleDetailsClick(row)}
                  >
                    Details
                  </Button>
                  <Button
                    type="button"
                    className={`btn btn-primary ${styles.widthBtn} ${styles.button}`}
                    style={{
                      backgroundColor: "#f0f5fa",
                      border: "2px solid #6b3fa0",
                      color: "#6b3fa0",
                      borderColor: "#000000",
                      transition: "background-color 0.2s, color 0.2s"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#6b3fa0";
                      e.target.style.color = "#f0f5fa";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#f0f5fa";
                      e.target.style.color = "#6b3fa0";
                    }}
                    onClick={() => handleDeleteRow(rowIndex)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <>
      <Stack gap={3}>
        <Form.Group controlId="formGridItemsPerPage">
          <Form.Label>Items per page</Form.Label>
          <Form.Select value={itemsPerPage} onChange={handleItemsPerPageChange} className={styles.tableSelect} >
            <option value="5">5 rows per page</option>
            <option value="10">10 rows per page</option>
            <option value="15">15 rows per page</option>
            <option value="20">20 rows per page</option>
          </Form.Select>
        </Form.Group>
        <Table striped bordered hover responsive>
          {renderTableHeader()}
          {renderTableBody()}
        </Table>
        <DynamicPagination
          totalItems={tableData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default DynamicTable;