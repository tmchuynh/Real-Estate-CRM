import React from 'react';
import { Container } from "react-bootstrap"
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';


const Leads = () => {

    const leadsData = [["Name", "Email", "Phone Number", "Status"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ];

    return (
        <>
            <div className="d-flex">

                <SidebarNav />
                <Container className='m-3'>
                    <h2>Leads</h2>
                    <DynamicTable data={leadsData} />
                </Container>
            </div>
        </>

    )
}

export default Leads;