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
        { firstName: 'John', lastName: 'Doe', email: 'john.doe@samplemail.com', phoneNumber: '(212) 543-3234', status: 'Potential', buying: true, selling: false, marketArea: 'New York' },
        { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@bestleads.com', phoneNumber: '(323) 754-6532', status: 'First-Contact', buying: false, selling: true, marketArea: 'Los Angeles' },
        { firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@marketpros.com', phoneNumber: '(415) 231-7653', status: 'Potential', buying: false, selling: true, marketArea: 'San Francisco' },
        { firstName: 'Chris', lastName: 'Lee', email: 'chris.lee@yourproperty.com', phoneNumber: '(617) 432-2321', status: 'Potential', buying: true, selling: true, marketArea: 'Boston' },
        { firstName: 'Olivia', lastName: 'Garcia', email: 'olivia.garcia@dreamhomes.com', phoneNumber: '(713) 134-5174', status: 'First-Contact', buying: false, selling: false, marketArea: 'Houston' },
        { firstName: 'Mark', lastName: 'Taylor', email: 'mark.taylor@realtysolutions.com', phoneNumber: '(305) 347-3216', status: 'Potential', buying: true, selling: false, marketArea: 'Miami' },
        { firstName: 'Linda', lastName: 'Wong', email: 'linda.wong@luxuryestates.com', phoneNumber: '(206) 457-1357', status: 'First-Contact', buying: false, selling: false, marketArea: 'Seattle' },
        { firstName: 'David', lastName: 'Johnson', email: 'david.johnson@homesearchers.com', phoneNumber: '(303) 824-5267', status: 'Potential', buying: true, selling: true, marketArea: 'Denver' },
        { firstName: 'Samantha', lastName: 'Nguyen', email: 'samantha.nguyen@yourhomefinder.com', phoneNumber: '(312) 612-6474', status: 'First-Contact', buying: true, selling: false, marketArea: 'Chicago' },
        { firstName: 'Mohammed', lastName: 'Ali', email: 'mohammed.ali@primeproperty.com', phoneNumber: '(713) 653-8536', status: 'Potential', buying: true, selling: false, marketArea: 'Houston' },
        { firstName: 'Carlos', lastName: 'Gonzalez', email: 'carlos.gonzalez@homebase.com', phoneNumber: '(323) 5436-4354', status: 'Potential', buying: false, selling: true, marketArea: 'Los Angeles' },
        { firstName: 'Emily', lastName: 'Chen', email: 'emily.chen@prorealtors.com', phoneNumber: '(408) 345-9876', status: 'First-Contact', buying: true, selling: false, marketArea: 'San Jose' },
        { firstName: 'Michael', lastName: 'Davis', email: 'michael.davis@realestate.com', phoneNumber: '(312) 564-7890', status: 'Potential', buying: false, selling: true, marketArea: 'Chicago' },
        { firstName: 'Avery', lastName: 'Baker', email: 'avery.baker@yourpropertyfinder.com', phoneNumber: '(713) 534-1234', status: 'Potential', buying: true, selling: true, marketArea: 'Houston' },
        { firstName: 'Ella', lastName: 'Gomez', email: 'ella.gomez@newhomeseekers.com', phoneNumber: '(305) 987-6543', status: 'First-Contact', buying: true, selling: false, marketArea: 'Miami' },
        { firstName: 'Brandon', lastName: 'Nguyen', email: 'brandon.nguyen@luxuryrealestate.com', phoneNumber: '(206) 789-4567', status: 'Potential', buying: true, selling: false, marketArea: 'Seattle' },
        { firstName: 'Sophia', lastName: 'Kim', email: 'sophia.kim@homesearch.com', phoneNumber: '(303) 654-3210', status: 'First-Contact', buying: false, selling: true, marketArea: 'Denver' },
        { firstName: 'Jacob', lastName: 'Martinez', email: 'jacob.martinez@yourdreamhome.com', phoneNumber: '(617) 654-9876', status: 'Potential', buying: true, selling: false, marketArea: 'Boston' },
        { firstName: 'Aria', lastName: 'Singh', email: 'aria.singh@bestrealtors.com', phoneNumber: '(323) 876-3456', status: 'Potential', buying: false, selling: true, marketArea: 'Los Angeles' },
        { firstName: 'Daniel', lastName: 'Lee', email: 'daniel.lee@homesolutions.com', phoneNumber: '(415) 789-0123', status: 'First-Contact', buying: false, selling: false, marketArea: 'San Francisco' },
        { firstName: 'Oliver', lastName: 'Rivera', email: 'oliver.rivera@marketplacehomes.com', phoneNumber: '(713) 987-6543', status: 'Potential', buying: true, selling: true, marketArea: 'Houston' },
        { firstName: 'Grace', lastName: 'Kim', email: 'grace.kim@yournewhome.com', phoneNumber: '(312) 345-6789', status: 'First-Contact', buying: true, selling: false, marketArea: 'Chicago' },
        { firstName: 'William', lastName: 'Garcia', email: 'william.garcia@newprospects.com', phoneNumber: '(323) 234-5678', status: 'Potential', buying: true, selling: false, marketArea: 'Los Angeles' },
    ];

    const apartmentListings = [
        {
            address: "123 Main Street",
            city: "Boston",
            county: "Suffolk",
            zipCode: "02101",
            listingPrice: "$2,500/month",
            bedrooms: "2",
            bathrooms: "1",
            squareFeet: "1000",
            status: "For Rent",
            petFriendly: true,
            utilitiesIncluded: false,
            amenities: ["On-site laundry", "Fitness center", "Pool"]
        },
        {
            address: "456 1st Avenue",
            city: "New York",
            county: "New York",
            zipCode: "10001",
            listingPrice: "$3,000/month",
            bedrooms: "1",
            bathrooms: "1",
            squareFeet: "800",
            status: "For Rent",
            petFriendly: false,
            utilitiesIncluded: true,
            amenities: ["24-hour doorman", "Roof deck"]
        },
        {
            address: "789 Elm Street",
            city: "Los Angeles",
            county: "Los Angeles",
            zipCode: "90001",
            listingPrice: "$2,200/month",
            bedrooms: "1",
            bathrooms: "1",
            squareFeet: "700",
            status: "For Rent",
            petFriendly: true,
            utilitiesIncluded: true,
            amenities: ["Fitness center", "Pool", "BBQ area"]
        },
        {
            address: "987 Oakwood Drive",
            city: "Miami",
            county: "Miami-Dade",
            zipCode: "33101",
            listingPrice: "$3,500/month",
            bedrooms: "3",
            bathrooms: "2",
            squareFeet: "1500",
            status: "For Rent",
            petFriendly: true,
            utilitiesIncluded: false,
            amenities: ["Washer/dryer in unit", "Balcony"]
        },
        {
            address: "654 Pine Avenue",
            city: "Chicago",
            county: "Cook",
            zipCode: "60601",
            listingPrice: "$2,800/month",
            bedrooms: "2",
            bathrooms: "2",
            squareFeet: "1200",
            status: "For Rent",
            petFriendly: true,
            utilitiesIncluded: true,
            amenities: ["On-site parking", "Fitness center"]
        },
        {
            address: "321 Chestnut Lane",
            city: "San Francisco",
            county: "San Francisco",
            zipCode: "94101",
            listingPrice: "$4,000/month",
            bedrooms: "2",
            bathrooms: "2.5",
            squareFeet: "1600",
            status: "For Rent",
            petFriendly: false,
            utilitiesIncluded: false,
            amenities: ["Rooftop pool", "Concierge"]
        },
        {
            address: "222 Maple Street",
            city: "Seattle",
            county: "King",
            zipCode: "98101",
            listingPrice: "$2,000/month",
            bedrooms: "1",
            bathrooms: "1",
            squareFeet: "800",
            status: "For Rent",
            petFriendly: true,
            utilitiesIncluded: true,
            amenities: ["On-site laundry", "Roof deck"]
        },
    ]


    const houseListings = [
        {
            address: "987 Maple Lane",
            city: "Boston",
            county: "Suffolk",
            zipCode: "02101",
            listingPrice: "$350,000",
            bedrooms: "3",
            bathrooms: "2.5",
            squareFeet: "2000",
            status: "For Sale",
            schoolDistrict: "Boston Public Schools",
            yearBuilt: 2000
        },
        {
            address: "654 Pine Street",
            city: "New York",
            county: "New York",
            zipCode: "10001",
            listingPrice: "$275,000",
            bedrooms: "2",
            bathrooms: "1",
            squareFeet: "1200",
            status: "For Sale",
            schoolDistrict: "New York City Schools",
            yearBuilt: 1950
        },
        {
            address: "321 Cedar Avenue",
            city: "Los Angeles",
            county: "Los Angeles",
            zipCode: "90001",
            listingPrice: "$450,000",
            bedrooms: "4",
            bathrooms: "3",
            squareFeet: "2500",
            status: "Pending",
            schoolDistrict: "Los Angeles Unified School District",
            yearBuilt: 1990
        },
        {
            address: "111 Oakwood Drive",
            city: "Miami",
            county: "Miami-Dade",
            zipCode: "33101",
            listingPrice: "$700,000",
            bedrooms: "6",
            bathrooms: "4.5",
            squareFeet: "3800",
            status: "For Sale",
            schoolDistrict: "Miami-Dade County Public Schools",
            yearBuilt: 2010
        },
        {
            address: "222 Elmwood Place",
            city: "Chicago",
            county: "Cook",
            zipCode: "60601",
            listingPrice: "$525,000",
            bedrooms: "3",
            bathrooms: "2.5",
            squareFeet: "2200",
            status: "Sold",
            schoolDistrict: "Chicago Public Schools",
            yearBuilt: 1980
        },
        {
            address: "333 Chestnut Lane",
            city: "San Francisco",
            county: "San Francisco",
            zipCode: "94101",
            listingPrice: "$600,000",
            bedrooms: "4",
            bathrooms: "3",
            squareFeet: "2600",
            status: "For Sale",
            schoolDistrict: "San Francisco Unified School District",
            yearBuilt: 2005
        },
        {
            address: "456 Cherry Street",
            city: "Seattle",
            county: "King",
            zipCode: "98101",
            listingPrice: "$375,000",
            bedrooms: "2",
            bathrooms: "1",
            squareFeet: "1100",
            status: "For Sale",
            schoolDistrict: "Seattle Public Schools",
            yearBuilt: 1960
        },
        {
            address: "789 Oak Avenue",
            city: "Atlanta",
            county: "Fulton",
            zipCode: "30301",
            listingPrice: "$550,000",
            bedrooms: "3",
            bathrooms: "2",
            squareFeet: "1800",
            status: "For Sale",
            schoolDistrict: "Atlanta Public Schools",
            yearBuilt: 1975
        },
    ]





    return (
        <div className='p-2'>
            <Routes>
                <Route path="/signin" element={<LoginForm />} />

                # the user that is logged in
                <Route path="/user_profile" element={<UserProfile user={user} />} />
                <Route exact path="/edit_user_profile/:id" element={<EditUserProfile user={user} />} />

                <Route path="/leads" element={<Leads leads={leads} />} />
                <Route path="/add_lead" element={<CustomModal />} />
                {/* update index={leads[1]} to target the lead that was clicked on */}
                <Route exact path="/lead_details/:id" element={<LeadDetails lead={leads[6]} />} />

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
