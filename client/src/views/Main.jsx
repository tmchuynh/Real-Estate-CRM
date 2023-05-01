import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { AuthContext } from '../authContext';
//---->import all the views bookkeeping<----
//these are finished:

//these are being worked on:
import LoginForm from './Login';
import RegistrationForm from './Registration';
import PasswordReset from './Password';
import UserProfile from './UserProfile';
import EditUserProfile from './EditUserProfile';
import Leads from './Leads';
import CustomModal from '../components/LeadForm';
import LeadDetails from './LeadDetails';
import EmailSent from './EmailSent';
import Activity from './Activity';

export default function Main() {
    const [loggedUserId, setLoggedUserId] = useState(null);
    const [authToken, setAuthToken] = useState(false);

    return (
        <div className='p-2'>
            <AuthContext.Provider value={{ authToken, loggedUserId, setAuthToken, setLoggedUserId }}>
                <Routes>
                    {/* Add a / route for a landing page that isn't the LoginForm */}
                    <Route path="/signin" element={<LoginForm />} />
                    # the user that is logged in
                    <Route path="/user_profile" element={<UserProfile />} />
                    <Route exact path={`/edit_user_profile/:${loggedUserId}`} element={<EditUserProfile/>} />
                    <Route path="/leads" element={<Leads />} />
                    <Route path="/add_lead" element={<CustomModal />} />
                    <Route exact path="/lead_details/:id" element={<LeadDetails />} />
                    <Route path="/activity" element={<Activity />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/password" element={<PasswordReset />} />
                    <Route path="/reset" element={<EmailSent />} />
                    {/* Update to a catchall redirect to / or /signin */}
                    <Route path="*" element={<LoginForm />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}
