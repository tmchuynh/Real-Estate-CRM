//some static data to be replaced by queries later
export const LeadsData = [
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: true, marketArea: 'West' },
    { firstName: 'Sarah', lastName: 'Martinez', email: 'sarah.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'West' },
    { firstName: 'Jane', lastName: 'Taylor', email: 'jane.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: false, marketArea: 'North' },
    { firstName: 'Sarah', lastName: 'Taylor', email: 'sarah.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: false, marketArea: 'West' },
    { firstName: 'John', lastName: 'Taylor', email: 'john.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: true, selling: false, marketArea: 'West' },
    { firstName: 'Chris', lastName: 'Garcia', email: 'chris.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: false, marketArea: 'South' },
    { firstName: 'David', lastName: 'Garcia', email: 'david.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: false, selling: true, marketArea: 'North' },
    { firstName: 'Jane', lastName: 'Johnson', email: 'jane.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: true, marketArea: 'West' },
    { firstName: 'Emily', lastName: 'Lee', email: 'emily.lee@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: false, selling: true, marketArea: 'North' },
    { firstName: 'David', lastName: 'Martinez', email: 'david.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'Jane', lastName: 'Taylor', email: 'jane.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: false, marketArea: 'North' },
    { firstName: 'John', lastName: 'Garcia', email: 'john.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: true, marketArea: 'West' },
    { firstName: 'David', lastName: 'Martinez', email: 'david.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'Chris', lastName: 'Johnson', email: 'chris.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'David', lastName: 'Lee', email: 'david.lee@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: true, selling: true, marketArea: 'East' },
    { firstName: 'John', lastName: 'Garcia', email: 'john.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'East' },
    { firstName: 'David', lastName: 'Brown', email: 'david.brown@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: false, selling: false, marketArea: 'North' },
    { firstName: 'Emily', lastName: 'Garcia', email: 'emily.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: true, marketArea: 'South' },
    { firstName: 'Emily', lastName: 'Smith', email: 'emily.smith@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: false, marketArea: 'South' },
    { firstName: 'Chris', lastName: 'Martinez', email: 'chris.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: false, selling: false, marketArea: 'South' },
    { firstName: 'Jane', lastName: 'Martinez', email: 'jane.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: true, selling: true, marketArea: 'South' },
    { firstName: 'Mark', lastName: 'Martinez', email: 'mark.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: false, marketArea: 'North' },
    { firstName: 'Sarah', lastName: 'Brown', email: 'sarah.brown@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: true, selling: false, marketArea: 'East' },
    { firstName: 'Jane', lastName: 'Garcia', email: 'jane.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: false, marketArea: 'West' },
    { firstName: 'Emily', lastName: 'Smith', email: 'emily.smith@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: true, selling: true, marketArea: 'South' },
    { firstName: 'Mark', lastName: 'Taylor', email: 'mark.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: false, selling: true, marketArea: 'North' },
    { firstName: 'Sarah', lastName: 'Brown', email: 'sarah.brown@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: true, selling: false, marketArea: 'South' },
    { firstName: 'Mark', lastName: 'Garcia', email: 'mark.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: false, selling: false, marketArea: 'North' },
    { firstName: 'Mark', lastName: 'Johnson', email: 'mark.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: true, marketArea: 'East' },
    { firstName: 'Mary', lastName: 'Smith', email: 'mary.smith@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: true, marketArea: 'West' },
    { firstName: 'David', lastName: 'Taylor', email: 'david.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: false, marketArea: 'West' },
    { firstName: 'Sarah', lastName: 'Taylor', email: 'sarah.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: true, marketArea: 'West' },
    { firstName: 'John', lastName: 'Brown', email: 'john.brown@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: false, marketArea: 'East' },
    { firstName: 'Mark', lastName: 'Lee', email: 'mark.lee@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: true, selling: false, marketArea: 'South' },
    { firstName: 'Sarah', lastName: 'Doe', email: 'sarah.doe@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: true, selling: false, marketArea: 'South' },
    { firstName: 'Sarah', lastName: 'Smith', email: 'sarah.smith@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: false, marketArea: 'North' },
    { firstName: 'John', lastName: 'Taylor', email: 'john.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'John', lastName: 'Martinez', email: 'john.martinez@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: true, marketArea: 'South' },
    { firstName: 'Jane', lastName: 'Garcia', email: 'jane.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: true, marketArea: 'South' },
    { firstName: 'Mary', lastName: 'Johnson', email: 'mary.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: true, marketArea: 'North' },
    { firstName: 'Mark', lastName: 'Doe', email: 'mark.doe@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: false, marketArea: 'West' },
    { firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: false, selling: false, marketArea: 'South' },
    { firstName: 'Chris', lastName: 'Brown', email: 'chris.brown@example.com', phoneNumber: '(713) 555-1234', status: 'First-Contact', buying: false, selling: false, marketArea: 'East' },
    { firstName: 'Emily', lastName: 'Johnson', email: 'emily.johnson@example.com', phoneNumber: '(713) 555-1234', status: 'Under Contract', buying: true, selling: false, marketArea: 'North' },
    { firstName: 'David', lastName: 'Doe', email: 'david.doe@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: false, marketArea: 'North' },
    { firstName: 'Sarah', lastName: 'Smith', email: 'sarah.smith@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: true, selling: true, marketArea: 'West' },
    { firstName: 'Mark', lastName: 'Smith', email: 'mark.smith@example.com', phoneNumber: '(713) 555-1234', status: 'Prospect', buying: true, selling: true, marketArea: 'North' },
    { firstName: 'Sarah', lastName: 'Garcia', email: 'sarah.garcia@example.com', phoneNumber: '(713) 555-1234', status: 'Closing', buying: false, selling: true, marketArea: 'South' },
    { firstName: 'Sarah', lastName: 'Taylor', email: 'sarah.taylor@example.com', phoneNumber: '(713) 555-1234', status: 'New Lead', buying: false, selling: false, marketArea: 'East' }
];

export const UserData = {
    firstName: "Sir Gray",
    lastName: "the Royal Highness",
    email: "sirgray@royalhighness.com",
    location: "LA Metro",
    title: "Agent",
    profilePicture: "https://randomuser.me/api/portraits/men/9.jpg"
};

export const MyListings = [
    {
        address: "987 Maple Lane",
        listingPrice: "$350,000",
        bedrooms: "3",
        bathrooms: "2.5",
        squareFeet: "2000",
        status: "For Sale"
    },
    {
        address: "654 Pine Street",
        listingPrice: "$275,000",
        bedrooms: "2",
        bathrooms: "1",
        squareFeet: "1200",
        status: "For Sale"
    },
    {
        address: "321 Cedar Avenue",
        listingPrice: "$450,000",
        bedrooms: "4",
        bathrooms: "3",
        squareFeet: "2500",
        status: "Pending"
    },
    {
        address: "111 Oakwood Drive",
        listingPrice: "$700,000",
        bedrooms: "6",
        bathrooms: "4.5",
        squareFeet: "3800",
        status: "For Sale"
    },
    {
        address: "222 Elmwood Place",
        listingPrice: "$525,000",
        bedrooms: "3",
        bathrooms: "2.5",
        squareFeet: "2200",
        status: "Sold"
    }
];
