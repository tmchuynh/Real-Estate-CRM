import { Tooltip } from "@mui/material";
import React from "react";
import Pagination from "react-bootstrap/Pagination";

const DynamicPagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Tooltip title={`Page #${i}`}>
          <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
            {i}
          </Pagination.Item>
        </Tooltip>
      );
    }

    return pageNumbers;
  }

  return (
    <Pagination >
      <Tooltip title="First page">
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      </Tooltip>

      <Tooltip title="Previous page">
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      </Tooltip>

      {renderPageNumbers()}

      <Tooltip title="Next page">
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      </Tooltip>

      <Tooltip title="Last page">
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Tooltip>
    </Pagination>
  );
}

export default DynamicPagination;

