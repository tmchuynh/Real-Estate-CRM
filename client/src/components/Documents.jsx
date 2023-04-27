import React, { useState } from 'react';
import DynamicTable from './Table';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SidebarNav from './SideNav';

function Documents() {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const newFiles = [...files];
        newFiles.push(event.target.files[0]);
        setFiles(newFiles);
    };

    const mockData = [
        {
            name: "Document 1",
            type: "PDF",
            size: "2 MB",
            dateUploaded: "2022-03-01"
        },
        {
            name: "Document 2",
            type: "Word",
            size: "5 MB",
            dateUploaded: "2022-04-15"
        },
        {
            name: "Document 3",
            type: "Excel",
            size: "1 MB",
            dateUploaded: "2022-05-03"
        },
        {
            name: "Document 4",
            type: "PDF",
            size: "3 MB",
            dateUploaded: "2022-06-20"
        }
    ];

    const validations = [
        {
            key: 'id',
            label: 'ID',
            required: true,
            numeric: true
        },
        {
            key: 'name',
            label: 'Name',
            required: true,
            maxLength: 50
        },
        {
            key: 'size',
            label: 'Size',
            required: true,
            numeric: true,
            minValue: 0,
            maxValue: 5000
        },
        {
            key: 'date',
            label: 'Date',
            required: true,
            date: true
        }
    ];

    const handleDetailsClick = (event) => {
        // TODO: Handle details click
    }

    return (
        <div className='d-flex'>
            <SidebarNav />
            <Container fluid>
                <Row className="my-3">
                    <Col xs={12} md={6}>
                        <label className="file-label">
                            Upload a file
                            <input 
                                type="file" 
                                onChange={handleFileUpload}
                                accept=".pdf,.doc,.docx,.xls,.xlsx"
                                className="file-input" 
                            />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DynamicTable 
                            data={mockData} 
                            handleDetailsClick={handleDetailsClick} 
                            validations={validations} 
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Documents;

