import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import RegistrationForm from './Registration';
import LoginForm from './Login';
import PasswordReset from './Password';
import UserProfile from './UserProfile';
import EditUserProfile from './EditUserProfile';
import Leads from './Leads';
import CustomModal from '../components/LeadForm';
import LeadDetails from './LeadDetails';

export default function Main() {
    const user = {
        email: "john.doe@example.com",
        password: "password123",
        fullName: "John Doe",
        location: "New York, NY",
        title: "Software Engineer",
        profilePicture: "https://randomuser.me/api/portraits/men/9.jpg"
    };
    return (
        <div className='p-5'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />

                ## needs to be changed to "/lead_profile/:id"
                <Route path="/user_profile" element={<UserProfile user={user} />} />
                <Route path="/edit_user_profile/:id" element={<EditUserProfile user={user} />} />

                <Route path="/leads" element={<Leads />} />
                <Route path="/add_lead" element={<CustomModal />} />
                <Route path="/lead_details/:id" element={<LeadDetails />} />


                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={
                    <Container className="mt-5">
                        <h1>
                            We sent you an email which contains a link to reset your password. This link will expire after 24 hours.

                            <br /><br />

                            Check your email
                        </h1>
                        <Button to="/signin" className="d-block mt-3 text-center">
                            Go Back
                        </Button>
                    </Container>
                } />
                ## the root route takes the user to the login form "home"
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}