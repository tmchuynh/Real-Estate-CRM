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
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
      {renderPageNumbers()}
      <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
}

export default DynamicPagination;

