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
        <Pagination.First key="first" onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      </Tooltip>

      <Tooltip title="Previous page">
        <Pagination.Prev key="prev" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      </Tooltip>

      {renderPageNumbers()}

      <Tooltip title="Next page">
        <Pagination.Next key="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      </Tooltip>

      <Tooltip title="Last page">
        <Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Tooltip>
    </Pagination>
  );
}

export default DynamicPagination;

