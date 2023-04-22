import React from "react";
import Pagination from "react-bootstrap/Pagination";

const DynamicPagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageItems = (page) => {
    const pageItems = [];

    for (let i = (page - 1) * itemsPerPage; i < Math.min(page * itemsPerPage, totalItems); i++) {
      pageItems.push(i);
    }

    return pageItems;
  }

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


// import React, { useState } from "react";
// import DynamicPagination from "./DynamicPagination";

// const MyComponent = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const data = [...]; // your data to be paginated

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   }

//   const renderData = () => {
//     const pageData = [];

//     for (let i = (currentPage - 1) * ITEMS_PER_PAGE; i < Math.min(currentPage * ITEMS_PER_PAGE, data.length); i++) {
//       pageData.push(data[i]);
//     }

//     return pageData.map((item) => (
//       <div key={item.id}>
//         {item.name}
//       </div>
//     ));
//   }

//   return (
//     <div>
//       {renderData()}
//       <DynamicPagination itemsPerPage={ITEMS_PER_PAGE} totalItems={data.length} currentPage={currentPage} onPageChange={handlePageChange} />
//     </div>
//   );
// }

// export default MyComponent;
