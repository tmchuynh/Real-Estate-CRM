import React from 'react';
import RealEstateCalculator from '../components/RealEstateCalculator';
import SidebarNav from '../components/SideNav';
import MortgageCalculator from '../components/MortgageCalculator';
import { Col, Container } from 'react-bootstrap';

const Resources = () => {
    return (
        <div className="d-flex">
            <SidebarNav />
            <Container className="d-flex flex-row" fluid>
                <Col sm={6}>
                    <RealEstateCalculator />
                </Col>
                <Col sm={6}>

                    <MortgageCalculator />
                </Col>

            </Container>
        </div>
    )
}

export default Resources;
