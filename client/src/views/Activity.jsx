import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import SidebarNav from '../components/SideNav';
import DynamicCarousel from '../components/DynamicCarousel';
import DynamicPagination from '../components/DynamicPagination';
import { Stack } from '@mui/material';
import DynamicBarChart from '../components/DyanmicBarChart';
import { Container } from 'react-bootstrap';

const Activity = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

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
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSlides = slides.slice(startIndex, endIndex);

    return (
        <div className="d-flex">
            <SidebarNav />
            <Container fluid>

                <Stack gap={3} className='m-3'>

                    <DynamicBarChart data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        values: [65, 59, 80, 81, 56, 55, 40],
                        title: 'Sales per Month',
                        colors: ['#007bff']
                    }} />


                    <DynamicCarousel
                        slides={currentSlides.map(slide => (
                            <ListingCard
                                key={slide.id}
                                image={slide.image}
                                alt={slide.alt}
                                title={slide.title}
                                description={slide.description}
                            />
                        ))}
                        itemsPerPage={itemsPerPage}
                        arrows={true}
                        autoPlay={true}
                        interval={5000}
                        pauseOnHover={true}
                    />
                    <DynamicPagination
                        itemsPerPage={itemsPerPage}
                        totalItems={slides.length}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Stack>
            </Container>
        </div>
    );
};

export default Activity;
