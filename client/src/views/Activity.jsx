import React from 'react';
import ListingCard from '../components/ListingCard';
import SidebarNav from '../components/SideNav';
import DynamicCarousel from '../components/DynamicCarousel';

const Activity = () => {

  const slides = [
    {
      id: 1,
      image: "https://example.com/slide1.jpg",
      alt: "Slide 1",
      title: "Slide 1",
      description: "This is the first slide",
    },
    {
      id: 2,
      image: "https://example.com/slide2.jpg",
      alt: "Slide 2",
      title: "Slide 2",
      description: "This is the second slide",
    },
    {
      id: 3,
      image: "https://example.com/slide3.jpg",
      alt: "Slide 3",
      title: "Slide 3",
      description: "This is the third slide",
    }
  ];

  const handlePageChange = (newPage) => {
    console.log('New page:', newPage);
  };

  return (
    <div className="d-flex">
      <SidebarNav />
      <DynamicCarousel
        slides={slides.map(slide => (
          <ListingCard
            key={slide.id}
            image={slide.image}
            alt={slide.alt}
            title={slide.title}
            description={slide.description}
          />
        ))}
        itemsPerPage={3}
        arrows={true}
        pagination={true}
        autoPlay={true}
        interval={5000}
        pauseOnHover={true}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Activity;
