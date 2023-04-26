import { React, useState } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import ListingForm from '../components/ListingForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const Listings = ({ listings }) => {

    const navigate = useNavigate();

    const [listingsData, setListingsData] = useState(listings);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setIsModalOpen(false);
    }

    const handleAddListing = (newListing) => {
        setListingsData((prevState) => {
            return [...prevState, newListing];
        });
        hideModal();
    }
    const handleDetailsClick = (lead) => {
        console.log(lead[0]);
        navigate(`/listings_details/${lead[0]}`);
    }


    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                <Container fluid className='m-3'>
                    <div className="d-flex justify-content-between">
                        <h2>Listings</h2>
                        <Button onClick={showModal} className='my-2'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                    <DynamicTable data={listingsData} handleDetailsClick={handleDetailsClick} />
                </Container>
            </div>
            {isModalOpen &&
                <Modal show={isModalOpen} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListingForm onAddListing={handleAddListing} onCancel={hideModal} />
                    </Modal.Body>
                </Modal>
            }
        </>
    );
}

export default Listings;
