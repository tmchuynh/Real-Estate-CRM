import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import LeadForm from '../components/LeadForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material';
import { AuthContext } from '../authContext';
import axios from 'axios';



const Leads = (props) => {
    const { loggedUserId } = useContext(AuthContext);
    const [allLeadsforLoggedUser, setAllLeadsforLoggedUser] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [leadErrors, setLeadErrors] = useState([]);
    const navigate = useNavigate();
    const baseUrl = "http://localhost:8000/api";

    const showModal = () => {
        setIsModalOpen(true);
    }

    const hideModal = () => {
        setIsModalOpen(false);
    }

    const handleAddLead = (newLeadData) => {
        hideModal();
    }

    //query for pull all Lead documents of currently logged in User
    useEffect(() => {
        async function getAllLeadsForUser() {
            try {
                const allLeads = await axios.get(`${baseUrl}/leads`);
                const allLeadsData = allLeads.data;
                setAllLeadsforLoggedUser(allLeadsData);
            } catch (err) {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errResponse)) {
                    errArr.push(errResponse[key].message);
                }
                setLeadErrors(errArr);
            }
        };
        getAllLeadsForUser();
    }, []);

    // Gray: Update this function to grab the lead that was clicked on
    const handleDetailsClick = (id) => {
        console.log(id);
        navigate(`/lead_details/${id}`);
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
                        <Tooltip title="Add a Lead">
                            <Button onClick={showModal} className='my-2'>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Tooltip>
                    </div>
                    <DynamicTable
                        data={allLeadsforLoggedUser}
                        handleDetailsClick={handleDetailsClick}
                        validations={validations}
                    />
                </Container>
            </div>
            {isModalOpen &&
                <Modal show={isModalOpen} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a New Lead</Modal.Title>
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

