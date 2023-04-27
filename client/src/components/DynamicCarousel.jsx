import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import DynamicPagination from './DynamicPagination';


const DynamicCarousel = ({ slides = [], itemsPerPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSlides, setCurrentSlides] = useState(slides.slice(0, itemsPerPage));


  const handlePageChange = (newPage) => {
    const newActiveIndex = (newPage - 1) * itemsPerPage;
    setActiveIndex(newActiveIndex);
    setCurrentPage(newPage);
    const newCurrentSlides = slides.slice(newActiveIndex, newActiveIndex + itemsPerPage);
    setCurrentSlides(newCurrentSlides);
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
