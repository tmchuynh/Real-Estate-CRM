import { React, useState } from 'react';
import { Modal, Button, Container } from "react-bootstrap"
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import LeadForm from '../components/LeadForm';
import BasicSpeedDial from '../components/SpeedDial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const Leads = ({ leads }) => {
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const [leadsData, setLeadsData] = useState(leads);

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
                <Container fluid className='m-3'>
                    <div className="d-flex justify-content-between">
                        <h2>Leads</h2>
                        <Button onClick={showModal} className='my-2'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                    <DynamicTable data={leadsData} />
                </Container>
                <BasicSpeedDial actions={actions} />

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
