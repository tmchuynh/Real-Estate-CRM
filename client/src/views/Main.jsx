import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
import Listings from './Listings';
import ListingDetails from './ListingsDetails';
import axios from 'axios';

export default function Main() {
    /*
    **************************************
    QUERY DB TO STORE NEEDED DATA IN STATE
    **************************************
    */
    const baseUrl = "localhost:8000/api";
    const [checkUserErrors, setCheckUserErrors] = useState([]);
    const [leadErrors, setLeadErrors] = useState([]);
    const [loggedUserErrors, setLoggedUserErrors] = useState([]);
    const [loggedUserId, setLoggedUserId] = useState({})
    const [loggedUser, setLoggedUser] = useState({});
    const [allLeadsforLoggedUser, setAllLeadsforLoggedUser] = useState([]);
    const navigate = useNavigate();

    //query for pulling user document of currently logged in User
    async function getLoggedUser(id) {
        try {
            const thisUser = await axios.get(`${baseUrl}/users/${id}`);
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
    };

    //query for pull all Lead documents of currently logged in User
        async function getAllLeadsForLoggedUser(loggedUserId) {
            try {
                if (loggedUserId) {
                    //the server grabs userId from express-session, so we don't need a URL param
                    // "Lead.find().where({ agent: req.session.userId }).sort({ lastName: 1 })"
                    const allLeads = await axios.get(`${baseUrl}/leads`);
                    setAllLeadsforLoggedUser(allLeads);
                }
            } catch (err) {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errResponse)) {
                    errArr.push(errResponse[key].message);
                }
                setLeadErrors(errArr);
            }
        };
    //query for checking if logged user --return true or false
    useEffect( () => {
        async function checkForUser() {
            try {
                //check if user logged in
                const potentialUserId = await axios.get(`${baseUrl}/users/authorization`);
                //if no user logged in, return to login/reg
                if (!potentialUserId) {
                    navigate("/signin");
                } else {
                    setLoggedUserId({potentialUserId});
                }
            } catch (err) {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errResponse)) {
                    errArr.push(errResponse[key].message);
                }
                setCheckUserErrors(errArr);
            }
        };
        checkForUser();
        getLoggedUser(loggedUserId);
    });
    
    // const user = {
    //     email: "john.doe@example.com",
    //     password: "password123",
    //     fullName: "John Doe",
    //     location: "New York, NY",
    //     title: "Software Engineer",
    //     profilePicture: "https://randomuser.me/api/portraits/men/9.jpg"
    // };
    // const leads = [
    //     { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '555-123-4567', status: 'Potential', buying: true, selling: false, marketArea: 'New York' },
    //     { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '555-987-6543', status: 'First-Contact', buying: false, selling: true, marketArea: 'Los Angeles' },
    //     { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com', phoneNumber: '555-111-2222', status: 'Potential', buying: false, selling: true, marketArea: 'San Francisco' },
    //     { firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', phoneNumber: '555-333-4444', status: 'Potential', buying: true, selling: true, marketArea: 'Boston' },
    //     { firstName: 'Olivia', lastName: 'Garcia', email: 'olivia.garcia@example.com', phoneNumber: '555-777-8888', status: 'First-Contact', buying: false, selling: false, marketArea: 'Houston' },
    //     { firstName: 'Mark', lastName: 'Taylor', email: 'mark.taylor@example.com', phoneNumber: '555-999-0000', status: 'Potential', buying: true, selling: false, marketArea: 'Miami' },
    //     { firstName: 'Linda', lastName: 'Wong', email: 'linda.wong@example.com', phoneNumber: '555-444-5555', status: 'First-Contact', buying: false, selling: false, marketArea: 'Seattle' },
    //     { firstName: 'David', lastName: 'Johnson', email: 'david.johnson@example.com', phoneNumber: '555-222-3333', status: 'Potential', buying: true, selling: true, marketArea: 'Denver' }
    // ];


    // const houseListings = [
    //     {
    //         address: "987 Maple Lane",
    //         listingPrice: "$350,000",
    //         bedrooms: "3",
    //         bathrooms: "2.5",
    //         squareFeet: "2000",
    //         status: "For Sale"
    //     },
    //     {
    //         address: "654 Pine Street",
    //         listingPrice: "$275,000",
    //         bedrooms: "2",
    //         bathrooms: "1",
    //         squareFeet: "1200",
    //         status: "For Sale"
    //     },
    //     {
    //         address: "321 Cedar Avenue",
    //         listingPrice: "$450,000",
    //         bedrooms: "4",
    //         bathrooms: "3",
    //         squareFeet: "2500",
    //         status: "Pending"
    //     },
    //     {
    //         address: "111 Oakwood Drive",
    //         listingPrice: "$700,000",
    //         bedrooms: "6",
    //         bathrooms: "4.5",
    //         squareFeet: "3800",
    //         status: "For Sale"
    //     },
    //     {
    //         address: "222 Elmwood Place",
    //         listingPrice: "$525,000",
    //         bedrooms: "3",
    //         bathrooms: "2.5",
    //         squareFeet: "2200",
    //         status: "Sold"
    //     }
    // ]



    return (
        <div className='p-5'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />

                # the user that is logged in
                <Route path="/user_profile" element={<UserProfile user={loggedUser} />} />
                <Route exact path="/edit_user_profile/:id" element={<EditUserProfile user={loggedUser} />} />

                <Route path="/leads" element={<Leads leads={allLeadsforLoggedUser} />} />
                <Route path="/add_lead" element={<CustomModal />} />
                {/* update index={leads[1]} to target the lead that was clicked on */}
                <Route exact path="/lead_details/:id" element={<LeadDetails leads={allLeadsforLoggedUser} />} />

                <Route path="/activity" element={<Activity />} />

                {/* <Route path="/listings" element={<Listings listings={houseListings} />} />
                <Route path="/listings_details/:id" element={<ListingDetails index={houseListings[1]} />} /> */}


                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={<EmailSent />} />

                ## the root route takes the user to the login form "home"
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}
