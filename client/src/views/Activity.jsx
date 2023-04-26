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
            image: "https://imgs.search.brave.com/sVi4mmw7T5R6IDL6AQFvgx7tmwxfUVOgsKfX98XYCOw/rs:fit:1200:803:1/g:ce/aHR0cHM6Ly9zdWZm/b2xrbW90aHMuY28u/dWsvcGhvdG9zL2Fj/dGl2ZS8yMzA2MC5T/dGV3YXJ0X0JlbGZp/ZWxkLjE1ODk5OTA1/NzIuanBn",
            alt: "Slide 1",
            title: "Slide 1",
            description: "This is the first slide",
        },
        {
            id: 2,
            image: "https://imgs.search.brave.com/MPivDH8wKdoHt_v7CKSp_TkhTb8hMgDvjTksja6IKls/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bm9yZm9sa21vdGhz/LmNvLnVrL3Bob3Rv/cy9hY3RpdmUvMjQ1/MDAuU3RlcGhlbl9Z/b3VuZ3MuMTQ5ODIw/MjAyOS5qcGc",
            alt: "Slide 2",
            title: "Slide 2",
            description: "This is the second slide",
        },
        {
            id: 3,
            image: "https://imgs.search.brave.com/CiqSZQvFCp-JAoNWzaXc3SRq1PEzA6owIXTXBAc4qjs/rs:fit:1200:851:1/g:ce/aHR0cHM6Ly9zdWZm/b2xrbW90aHMuY28u/dWsvcGhvdG9zL2Fj/dGl2ZS8xNjgwMC5B/bnRvbnlfV3Jlbi4x/NTcxMzQ4NzYyLmpw/Zw",
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
                        datasets: [
                            {
                                label: 'Sales',
                                backgroundColor: '#007bff',
                                borderColor: '#007bff',
                                hoverBackgroundColor: '#007bff',
                                hoverBorderColor: '#007bff',
                                data: [65, 59, 80, 81, 56, 55, 40],
                            },
                            {
                                label: 'Expenses',
                                backgroundColor: '#28a745',
                                borderColor: '#28a745',
                                hoverBackgroundColor: '#28a745',
                                hoverBorderColor: '#28a745',
                                data: [28, 48, 40, 19, 86, 27, 90],
                            },
                        ],
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
