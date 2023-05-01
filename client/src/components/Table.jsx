import React, { useState } from "react";
import { Table, Button, Form, Stack } from "react-bootstrap";
import DynamicPagination from "./DynamicPagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../Style.module.css/Table.module.css";

const DynamicTable = ({ data, handleDetailsClick, validations }) => {
  const DEFAULT_ITEMS_PER_PAGE = 15;
  const [tableData, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE); 
  const leadKeys = tableData && tableData[0];

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
        {leadKeys ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr className={styles.headerFont}>
              {Object.keys(leadKeys).map((key, index) => {
                return (
                  <th key={index} style={{ textAlign: "center" }}>
                    {key}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData
              .slice(
                (currentPage - 1) * itemsPerPage,
                (currentPage - 1) * itemsPerPage + itemsPerPage
              )
              .map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.keys(row).map((lead, columnIndex) => (
                    <td key={columnIndex} contentEditable={false} value={row[lead]} >
                      {row[lead] === true ? (
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#06d6a0" }} />
                      ) : row[lead] === false ? (
                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#ef476f" }} />
                      ) :
                        row[lead]
                      }
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
        </Table>
        ): 
        <p>You don't seem to have any leads yet. Try adding one</p>
        }
        <DynamicPagination
        totalItems={tableData && tableData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default DynamicTable;