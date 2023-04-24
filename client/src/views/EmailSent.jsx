import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmailSent = () => {
    return ( 
        <Container fluid className="mt-5">
        <h1>
            We sent you an email which contains a link to reset your password. This link will expire after 24 hours.

            <br /><br />

            Check your email
        </h1>

        <Link to={'/signin'}>
            <Button className="d-block mt-3 text-center">
                Go Back
            </Button>
        </Link>
    </Container>
    )
}

export default EmailSent;