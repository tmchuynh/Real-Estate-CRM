import React, { useState } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import LeadForm from '../components/LeadForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Leads = ({ leads }) => {

    const [leadsData, setLeadsData] = useState(leads);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();


    const showModal = () => {
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setIsModalOpen(false);
    }

    const handleAddLead = (newLead) => {
        setLeadsData((prevState) => {
            return [...prevState, newLead];
        });
        hideModal();
    }
    // Gray: Update this function to grab the lead that was clicked on
    const handleDetailsClick = (lead) => {
        console.log(lead[0]);
        navigate(`/lead_details/${lead[0]}`);
    }

    const validations = [
        (value) => /^[a-zA-Z]{4,}$/.test(value), // validation for the first column that only allows letters with 4 or more characters
        (value) => /^[a-zA-Z]{4,}$/.test(value), // validation for the second column that only allows letters with 4 or more characters
        (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), // validation for the third column that only allows valid email addresses
        (value) => /^\d{10}$/.test(value), // validation for the fourth column that only allows valid phone numbers (10 digits)
        (value) => /^(True|False)$/.test(value), // validation for the sixth column that only allows "True" or "False"
        (value) => /^(True|False)$/.test(value), // validation for the seventh column that only allows "True" or "False"
        (value) => /^[a-zA-Z]{4,}$/.test(value), // validation for the eighth column that only allows letters with 4 or more characters
    ];


    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                <Container fluid className='m-3'>
                    <div className="d-flex justify-content-between">
                        <h2>Leads</h2>
                        <Button onClick={showModal} className='my-2'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                    <DynamicTable data={leadsData} handleDetailsClick={handleDetailsClick} validations={validations} />
                </Container>
            </div>
            {isModalOpen &&
                <Modal show={isModalOpen} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LeadForm onAddLead={handleAddLead} onCancel={hideModal} />
                    </Modal.Body>
                </Modal>
            }
        </>
    );
}

export default Leads;

