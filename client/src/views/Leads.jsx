import { React, useState } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import LeadForm from '../components/LeadForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Leads = () => {

    const [leadsData, setLeadsData] = useState([
        ["First Name", "Last Name", "Email", "Phone Number", "Status", "Buying", "Selling", "Market Area"],
        ['John', 'Doe', 'john.doe@example.com', '555-123-4567', "Potential", "True", "False", 'New York'],
        ['Jane', 'Smith', 'jane.smith@example.com', '555-987-6543', "First-Contact", "False", "True", 'Los Angeles'],
        ['Bob', 'Johnson', 'bob.johnson@example.com', '555-555-5555', "First-Contact", "True", "True", 'Chicago'],
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <>
            <div className="d-flex">
                <SidebarNav />
                <Container className='m-3'>
                    <div className="d-flex justify-content-between">
                        <h2>Leads</h2>
                        <Button onClick={showModal} className='my-2'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                    <DynamicTable data={leadsData} />
                </Container>
            </div>
            {isModalOpen &&
                <Modal show={showModal} onHide={hideModal}>
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
