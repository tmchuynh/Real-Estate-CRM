import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';

const DynamicCarousel = ({ slides, itemsPerPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlides = slides.slice(activeIndex, activeIndex + itemsPerPage);

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
    </div>
  );
}

export default DynamicCarousel;
