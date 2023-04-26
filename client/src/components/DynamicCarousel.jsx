import React, { useState } from "react";
import DynamicPagination from "./DynamicPagination";
import Carousel from 'react-bootstrap/Carousel';
import ListingCard from './ListingCard';

const DynamicCarousel = ({ slides, currentPage, itemsPerPage, onPageChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSlides = slides.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    onPageChange(page);
  }

  const handlePrev = () => {
    onPageChange(currentPage - 1);
  }

  const handleNext = () => {
    onPageChange(currentPage + 1);
  }

  return (
    <div>
      <Carousel prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevLabel={null}
        nextLabel={null}
      >
        {currentSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <ListingCard />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="d-flex justify-content-center mt-3">
        <DynamicPagination
          itemsPerPage={itemsPerPage}
          totalItems={slides.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default DynamicCarousel;
