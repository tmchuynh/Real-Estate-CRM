import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import DynamicPagination from './DynamicPagination';


const DynamicCarousel = ({ slides = [], itemsPerPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const currentSlides = slides.slice(activeIndex, activeIndex + itemsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => { }}
        interval={null}
        prevLabel={null}
        nextLabel={null}
        indicators={false}
        controls={false}
        slide={true}
      >
        {currentSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            {slide}
          </Carousel.Item>
        ))}
      </Carousel>

      <DynamicPagination
        itemsPerPage={itemsPerPage}
        totalItems={slides.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}


export default DynamicCarousel;
