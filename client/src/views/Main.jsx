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


    const houseListings = [
        {
            "Address": "123 Main St",
            "Price": "$250,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "1800",
            "Status": "For Sale"
        },
        {
            "Address": "456 Elm St",
            "Price": "$400,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2400",
            "Status": "For Sale"
        },
        {
            "Address": "789 Oak St",
            "Price": "$600,000",
            "Bedrooms": "5",
            "Bathrooms": "4",
            "Square Feet": "3200",
            "Status": "Pending"
        },
        {
            "Address": "111 Pine St",
            "Price": "$350,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "2000",
            "Status": "Sold"
        },
        {
            "Address": "222 Maple St",
            "Price": "$500,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2800",
            "Status": "For Sale"
        },
        {
            "Address": "333 Cedar St",
            "Price": "$450,000",
            "Bedrooms": "4",
            "Bathrooms": "2.5",
            "Square Feet": "2500",
            "Status": "Pending"
        },
        {
            "Address": "444 Birch St",
            "Price": "$375,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "1900",
            "Status": "Sold"
        },
        {
            "Address": "555 Walnut St",
            "Price": "$700,000",
            "Bedrooms": "5",
            "Bathrooms": "4.5",
            "Square Feet": "3500",
            "Status": "For Sale"
        },
        {
            "Address": "666 Spruce St",
            "Price": "$525,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2700",
            "Status": "For Sale"
        },
        {
            "Address": "777 Chestnut St",
            "Price": "$475,000",
            "Bedrooms": "3",
            "Bathrooms": "2.5",
            "Square Feet": "2200",
            "Status": "Pending"
        },
        {
            "Address": "888 Fir St",
            "Price": "$300,000",
            "Bedrooms": "2",
            "Bathrooms": "1",
            "Square Feet": "1500",
            "Status": "For Sale"
        },
        {
            "Address": "999 Pineapple St",
            "Price": "$900,000",
            "Bedrooms": "6",
            "Bathrooms": "5",
            "Square Feet": "4000",
            "Status": "Pending"
        },
        {
            "Address": "1010 Oakwood Dr",
            "Price": "$750,000",
            "Bedrooms": "5",
            "Bathrooms": "4",
            "Square Feet": "3500",
            "Status": "For Sale"
        },
        {
            "Address": "1212 Magnolia St",
            "Price": "$425,000",
            "Bedrooms": "3",
            "Bathrooms": "2.5",
            "Square Feet": "2200",
            "Status": "Sold"
        },
        {
            "Address": "1313 Willow Ave",
            "Price": "$625,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2700",
            "Status": "For Sale"
        },
        {
            "Address": "1414 Maplewood Ln",
            "Price": "$875,000",
            "Bedrooms": "5",
            "Bathrooms": "4.5",
            "Square Feet": "4000",
            "Status": "Pending"
        },
        {
            "Address": "1515 Cedarwood Blvd",
            "Price": "$575,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2500",
            "Status": "For Sale"
        },
        {
            "Address": "1616 Oakwood Dr",
            "Price": "$425,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "1900",
            "Status": "Sold"
        },
        {
            "Address": "1717 Pine St",
            "Price": "$675,000",
            "Bedrooms": "4",
            "Bathrooms": "3.5",
            "Square Feet": "3200",
            "Status": "For Sale"
        },
        {
            "Address": "1818 Elmwood Ave",
            "Price": "$350,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "1800",
            "Status": "For Sale"
        },
        {
            "Address": "1919 Walnut St",
            "Price": "$525,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2600",
            "Status": "Pending"
        },
        {
            "Address": "2020 Birchwood Ln",
            "Price": "$425,000",
            "Bedrooms": "3",
            "Bathrooms": "2",
            "Square Feet": "2000",
            "Status": "Sold"
        },
        {
            "Address": "2121 Magnolia St",
            "Price": "$675,000",
            "Bedrooms": "4",
            "Bathrooms": "3.5",
            "Square Feet": "3100",
            "Status": "For Sale"
        },
        {
            "Address": "2222 Willow Ave",
            "Price": "$750,000",
            "Bedrooms": "5",
            "Bathrooms": "4",
            "Square Feet": "3400",
            "Status": "Pending"
        },
        {
            "Address": "2323 Maplewood Ln",
            "Price": "$925,000",
            "Bedrooms": "6",
            "Bathrooms": "5",
            "Square Feet": "4200",
            "Status": "For Sale"
        },
        {
            "Address": "2424 Cedarwood Blvd",
            "Price": "$625,000",
            "Bedrooms": "4",
            "Bathrooms": "3",
            "Square Feet": "2800",
            "Status": "For Sale"
        }
    ]


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
