import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import RegistrationForm from './Registration';
import LoginForm from './Login';
import PasswordReset from './Password';
import LeadProfile from './LeadProfile';
import EditLeadProfile from './EditLeadProfile';
import UserProfile from './UserProfile';
import EditUserProfile from './EditUserProfile';

export default function Main () {
    const lead = {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "123-456-7890",
        isBuying: true,
        isSelling: false,
        marketArea: "New York City",
        profilePicture: "https://randomuser.me/api/portraits/men/15.jpg"
    };
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
                <Route path="/lead_profile" element={<LeadProfile user={lead} />} />
                <Route path="/edit_lead_profile/:id" element={<EditLeadProfile user={lead} />} />
                <Route path="/user_profile" element={<UserProfile user={user} />} />
                <Route path="/edit_user_profile/:id" element={<EditUserProfile user={lead} />} />

                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={
                    <div>
                        <h3>We sent you an email which contains a link to reset your password
                        </h3>
                        <br /> <br /> <br />
                        <Link to={'/signin'}>Go Back</Link>

                    </div>
                } />
                ## the root route takes the user to the login form "home"
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}