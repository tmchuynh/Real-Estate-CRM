import { React, useState, useEffect } from 'react';
import { Button, Container } from "react-bootstrap"
import SidebarNav from '../components/SideNav';
import DynamicTable from '../components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Leads = () => {
    /* 
    **** These vars needed to query db with col sorting ****
    **** Store bool for if user wants to sort that col  ****
    **** if bool needs to append the query with a sort  ****
    **** of the corresponding name                      ****
    */
    // const baseUrl = "localhost:8000/api/leads";
    // const [sortName] = useState(false);
    // const [sortEmail] = useState(false);
    // const [sortPhone] = useState(false);
    // const [sortStatus] = useState(false);

    //query to grab the leads
    //if filters, query needs operators to grab the filtered results
    // useEffect(() => {
    //     //Bool && query the router with the sort by that col
    //     sortName && axios.get(`${BaseUrl}/name`)
    //         .then(results => setTableData(results)
    //         .catch(err => {
    //             const errData = err.message.errors;
    //             //map the errors to display

    //         })

    const leadsData = [["Name", "Email", "Phone Number", "Status"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ["John Doe", "johndoe@example.com", "555-1234", "New"],
    ["Jane Smith", "janesmith@example.com", "555-5678", "Contacted"],
    ["Bob Johnson", "bobjohnson@example.com", "555-9012", "Qualified"],
    ["Alice Brown", "alicebrown@example.com", "555-3456", "Lost"],
    ["Tom Wilson", "tomwilson@example.com", "555-7890", "Contacted"],
    ];

    function addLead() {
        // creates a new lead in the database
    }

    return (
        <>
            <div className="d-flex">

                <SidebarNav />
                <Container className='m-3'>
                    <div className="d-flex justify-content-between">
                        <h2>Leads</h2>
                        <Button onClick={addLead} className='my-2'>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </div>
                    <DynamicTable data={leadsData} />
                </Container>
            </div>
        </>

    )
}

export default Leads;