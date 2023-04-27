import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

export default function Main() {
    const user = {
        email: "john.doe@example.com",
        password: "password123",
        fullName: "John Doe",
        location: "New York, NY",
        title: "Software Engineer",
        profilePicture: "https://randomuser.me/api/portraits/men/9.jpg"
    };
    const leads = [
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '555-123-4567', status: 'Potential', buying: true, selling: false, marketArea: 'New York' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '555-987-6543', status: 'First-Contact', buying: false, selling: true, marketArea: 'Los Angeles' },
        { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@example.com', phoneNumber: '555-111-2222', status: 'Potential', buying: false, selling: true, marketArea: 'San Francisco' },
        { firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@example.com', phoneNumber: '555-333-4444', status: 'Potential', buying: true, selling: true, marketArea: 'Boston' },
        { firstName: 'Olivia', lastName: 'Garcia', email: 'olivia.garcia@example.com', phoneNumber: '555-777-8888', status: 'First-Contact', buying: false, selling: false, marketArea: 'Houston' },
        { firstName: 'Mark', lastName: 'Taylor', email: 'mark.taylor@example.com', phoneNumber: '555-999-0000', status: 'Potential', buying: true, selling: false, marketArea: 'Miami' },
        { firstName: 'Linda', lastName: 'Wong', email: 'linda.wong@example.com', phoneNumber: '555-444-5555', status: 'First-Contact', buying: false, selling: false, marketArea: 'Seattle' },
        { firstName: 'David', lastName: 'Johnson', email: 'david.johnson@example.com', phoneNumber: '555-222-3333', status: 'Potential', buying: true, selling: true, marketArea: 'Denver' }
    ];


    const houseListings = [["Address", "Price", "Bedrooms", "Bathrooms", "Square Feet", "Status"],
    ["123 Main St", "$250,000", "3", "2", "1800", "For Sale"],
    ["456 Elm St", "$400,000", "4", "3", "2400", "For Sale"],
    ["789 Oak St", "$600,000", "5", "4", "3200", "Pending"],
    ["111 Pine St", "$350,000", "3", "2", "2000", "Sold"],
    ["222 Maple St", "$500,000", "4", "3", "2800", "For Sale"],
    ["333 Cedar St", "$450,000", "4", "2.5", "2500", "Pending"],
    ["444 Birch St", "$375,000", "3", "2", "1900", "Sold"],
    ["555 Walnut St", "$700,000", "5", "4.5", "3500", "For Sale"],
    ["666 Spruce St", "$525,000", "4", "3", "2700", "For Sale"],
    ["777 Chestnut St", "$475,000", "3", "2.5", "2200", "Pending"],
    ["888 Fir St", "$300,000", "2", "1", "1500", "For Sale"],
    ["999 Pineapple St", "$900,000", "6", "5", "4000", "Pending"],
    ["1010 Oakwood Dr", "$750,000", "5", "4", "3500", "For Sale"],
    ["1212 Magnolia Ln", "$600,000", "4", "3.5", "3000", "Sold"],
    ["1313 Cedar Ave", "$400,000", "3", "2", "1800", "For Sale"],
    ["1414 Maple Rd", "$525,000", "4", "3", "2400", "Pending"],
    ["1515 Oak Blvd", "$425,000", "3", "2.5", "2100", "Sold"],
    ["1616 Pine St", "$675,000", "4", "3.5", "2900", "For Sale"],
    ["1717 Cherry Ln", "$800,000", "5", "4", "3300", "Pending"],
    ["1818 Plum Dr", "$350,000", "3", "2", "1700", "For Sale"],
    ["1919 Walnut St", "$525,000", "4", "3", "2500", "For Sale"],
    ["2020 Cedar Rd", "$450,000", "3", "2", "2000", "Sold"],
    ["2121 Oakwood Dr", "$725,000", "5", "4.5", "3100", "For Sale"],
    ["2222 Magnolia Ln", "$500,000", "4", "3", "2600", "Pending"]
    ];


    return (
        <div className='p-5'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />

                # the user that is logged in
                <Route path="/user_profile" element={<UserProfile user={user} />} />
                <Route exact path="/edit_user_profile/:id" element={<EditUserProfile user={user} />} />

                <Route path="/leads" element={<Leads leads={leads} />} />
                <Route path="/add_lead" element={<CustomModal />} />
                <Route exact path="/lead_details/:id" element={<LeadDetails index={leads[1]} />} />

                <Route path="/activity" element={<Activity />} />

                <Route path="/listings" element={<Listings listings={houseListings} />} />
                <Route path="/listings_details/:id" element={<ListingDetails index={houseListings[1]} />} />


                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/password" element={<PasswordReset />} />
                <Route path="/reset" element={<EmailSent />} />

                ## the root route takes the user to the login form "home"
                <Route path="*" element={<LoginForm />} />
            </Routes>
        </div>
    )
}
