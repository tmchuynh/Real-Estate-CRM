import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext';
import RegistrationForm from './Registration';
import LoginForm from './Login';
import PasswordReset from './Password';
import UserProfile from './UserProfile';
import EditUserProfile from './EditUserProfile';
import Leads from './Leads';
import CustomModal from '../components/LeadForm';
import LeadDetails from './LeadDetails';
import EmailSent from './EmailSent';
import Activity from './Activity';
import { UserData, LeadsData, MyListings } from '../staticData';
// import Listings from './Listings';
// import ListingDetails from './ListingsDetails';
// import axios from 'axios';

export default function Main() {
    /*
    **************************************
    QUERY DB TO STORE NEEDED DATA IN STATE
    **************************************
    */
    // const baseUrl = "http://localhost:8000/api";
    // const [checkUserErrors, setCheckUserErrors] = useState([]);
    // const [leadErrors, setLeadErrors] = useState([]);
    // const [loggedUserErrors, setLoggedUserErrors] = useState([]);
    const [loggedUserId, setLoggedUserId] = useState("");
    const [loggedUser, setLoggedUser] = useState(UserData);
    const [authorizationToken, setAuthorizationToken] = useState(false);
    const [allLeadsforLoggedUser, setAllLeadsforLoggedUser] = useState(LeadsData);
    // const myListings = useState(MyListings);
    // const navigate = useNavigate();
    

    /*query for pulling user document of currently logged in User
    async function getLoggedUser(id) {
        try {
            const thisUser = await axios.get(`${baseUrl}/users/findbyid/${id}`);
            setLoggedUser(thisUser);
            console.log(thisUser);
        } catch (err) {
            const errResponse = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errResponse)) {
                errArr.push(errResponse[key].message);
            }
            setLoggedUserErrors(errArr);
        }
    }; */

    return (
        <div className='p-2'>
            <AuthContext.Provider value={{ authorizationToken, loggedUserId, setAuthorizationToken, setLoggedUserId }}>
                <Routes>
                    <Route path="/signin" element={<LoginForm />} />
                    # the user that is logged in
                    <Route path="/user_profile/:id" element={<UserProfile user={loggedUser} />} />
                    <Route exact path="/edit_user_profile/:id" element={<EditUserProfile user={loggedUser} />} />
                    <Route path="/leads" element={<Leads leads={allLeadsforLoggedUser} />} />
                    <Route path="/add_lead" element={<CustomModal />} />
                    {/* update index={leads[1]} to target the lead that was clicked on */}
                    <Route exact path="/lead_details" element={<LeadDetails leads={allLeadsforLoggedUser} />} />
                    <Route path="/activity" element={<Activity />} />
                    {/* <Route path="/listings" element={<Listings listings={myListings} />} />
                    <Route path="/listings_details/:id" element={<ListingDetails index={myListings[1]} />} /> */}
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/password" element={<PasswordReset />} />
                    <Route path="/reset" element={<EmailSent />} />
                    ## the root route takes the user to the login form "home"
                    <Route path="*" element={<LoginForm />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}
