import React, { useState } from "react";
import SidebarNav from "../components/SideNav";
import CopyButton from "../components/CopyBtn";
import { Container, Button, Modal } from "react-bootstrap";
import Gallery from "../components/Gallery";
import DynamicCarousel from '../components/DynamicCarousel';
import Figures from "../components/Figure";

const ListingDetails = ({ index }) => {

    const [showModal, setShowModal] = useState(false);


    const photos = [
        {
            src: 'https://imgs.search.brave.com/wscmndecRYHwXyJpas1Q9KVW-VBQbW1roqoasefy0qQ/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/R0FYU2JIMGtOTHVi/cjlvTjFneWNBSGFE/NCZwaWQ9QXBp',
            width: 4,
            height: 3
        },
        {
            src: 'https://imgs.search.brave.com/OslIeHw3PuCi4Sym2XR39CmgJaXXQL8qUmHG0Q6WldI/rs:fit:740:1110:1/g:ce/aHR0cHM6Ly9pbWcu/aXppc21pbGUuY29t/L2ltZy9pbWcxMi8y/MDE5MDMyMi82NDAv/YmVzdF9waG90b3Nf/YXJlX3Rha2VuX2Zy/b21fYWJvdmVfYXNf/dGhlXzIwMThfZHJv/bmVfcGhvdG9fY29u/dGVzdF9hbm5vdW5j/ZXNfdGhlX3dpbm5l/cnNfNjQwX2hpZ2hf/MDguanBn',
            width: 1,
            height: 1
        },
        {
            src: 'https://imgs.search.brave.com/VEZatA39aQIvpmPzMRtaAnxkZT-AuTgEW5dNGUC-pMY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvODE0/NDk5L3BleGVscy1w/aG90by04MTQ0OTku/anBlZz9jcz1zcmdi/JmRsPWxhbmRzY2Fw/ZS1uYXR1cmUtd2F0/ZXItODE0NDk5Lmpw/ZyZmbT1qcGc',
            width: 6,
            height: 9
        }
    ];

    return (
        <div className="d-flex">
            <SidebarNav />
            <Container fluid className='m-3'>
                <h2>Lead Details</h2>
                <div className="d-flex gap-3">
                    <p>
                        <b>Address: </b>
                    </p>
                    <p id='address'>
                        {index[0]}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <p>
                        <b>Listing Price: </b>
                    </p>
                    <p id='listing_price'>
                        {index[1]}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <p>
                        <b>Bedrooms: </b>
                    </p>
                    <p id='bedroom'>
                        {index[2]}
                    </p>
                    <CopyButton email="email" />
                </div>
                <div className="d-flex gap-3">
                    <p>
                        <b>Bathrooms: </b>
                    </p>
                    <p id='bathroom'>
                        {index[3]}
                    </p>
                    <CopyButton email="phone_number" />
                </div>
                <div className="d-flex gap-3">
                    <p>
                        <b>Square Feet: </b>
                    </p>
                    <p id='sqft'>
                        {index[4]}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <p>
                        <b>Status: </b>
                    </p>
                    {index[5]}
                </div>
                <Button onClick={() => setShowModal(true)}>View All Photos</Button>

            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Photos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DynamicCarousel slides={photos.map(photo => (
                        <Figures photo={photo} key={photo.src} />
                    ))} itemsPerPage={2} />
                </Modal.Body>
            </Modal>


            <Gallery photos={photos} />
        </div>
    );
};

export default ListingDetails;
