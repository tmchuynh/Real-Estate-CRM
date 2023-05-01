import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import LeadForm from '../components/LeadForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material';
//remove this after using query data
import { LeadsData } from "../staticData";
import axios from 'axios';

export default function Leads() {
    //static data for testing
    const allStaticLeads = LeadsData;
    //everything needed for Express APIs
    const { authToken, setAuthorizationToken } = useContext(AuthContext);
    const { loggedUserId, setLoggedUserId } = useContext(AuthContext);
    const baseUrl = "http://localhost:8000/api";
    const authHeader = {"Authorization": `Bearer: ${authToken}` }
    //vars to hold Leads and Errors associated with trying to get or create Leads
    const [allLeads, setAllLeads] = useState([]);
    const [leadsErrors, setLeadsErrors] = useState(false);
    //control Lead Form modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    //to redirect to Lead Details
    const navigate = useNavigate();
    //show/hide modal handlers
    const showModal = () => {
        setIsModalOpen(true);
    }
    const hideModal = () => {
        setIsModalOpen(false);
    }
    //function to grab leads from db via Express API
    const getLeadsForUser = (id) => {
        axios
        .get(`${baseUrl}/leads?${id}`)
        .then(res => {setAllLeads(res.data)})
    }
    //useEffect grabs the leads on render
    useEffect(() => {
        getLeadsForUser(loggedUserId);
    }, [loggedUserId]);

    const handleAddLead = (newLead) => {
        setAllLeads((prevState) => {
            return [...prevState, newLead];
        });
        hideModal();
    }
    // Gray: Update this function to grab the lead that was clicked on
    const handleDetailsClick = (lead) => {
        //get request with req.params.id as the lead._id

        //navigate to details page with URL param
        navigate(`/lead_details/${lead._id}`);
    }

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
                    {allLeads ?
                    <DynamicTable data={allStaticLeads} handleDetailsClick={handleDetailsClick}/> :
                    leadsErrors ?
                    <h1 style={{ color: 'red' }}>{leadsErrors}</h1> :
                    <h1 style={{ color: 'blue' }}>Loading Content. . .</h1>}
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