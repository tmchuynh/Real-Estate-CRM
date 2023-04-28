const Lead = require('../models/lead.model');
// const bcrypt = require('bcrypt');

/*           
*********************************************************************
CRUD FUNCTIONALITY ROUTES - CREATE, GET(READ), UPDATE, & DELETE LEADS
*********************************************************************
*/

//CREATE Lead
module.exports.createOneLead = (req, res) => {
    //add currently logged in User to the create method data
    const data = { ...req.body, agent: req.session.userId };
    Lead.create(data)
        .then(lead => {
            /*
                the response is an array of lead objects
                empty arrays are falsey, so if lead can be used as a bool
            */
            return lead ? res.json(lead) : res.json({message: "You don't have any leads yet :("}) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

//GET all Leads
module.exports.getAllLeadsByUser = (req, res) => {
    console.log("Grabbing all Leads for this User!", req.query.id);
    Lead.find().where({ agent: req.query.id }).select("firstName lastName email phoneNumber status isBuying isSelling marketArea").sort({ lastName: 1 })
        .then(allLeads => { res.json(allLeads) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

/* Dynamic query by URL query terms using async/await with try */
module.exports.searchForLeads = async (req, res) => {
    try {
        //destruct req.query for readability later
        const { first, last, email } = req.query.first;

        console.log(`Received these search terms ${first}, ${last}, ${email}`);
        //create empty object to build the query
        const query = {};
        //check which keys were created and add them to the query if exist
        //use RegExp to allow partial search terms
        if (first) {
            query.firstName = new RegExp(first, "i");
        }
        if (last) {
            query.lastName = new RegExp(last, "i");
        }
        if (email) {
            query.email = new RegExp(email, "i");
        }
        //now perform the query
        const foundLeads = await Lead.find(query);
        res.json(foundLeads);

    } catch (err) {
        res.status(400).json({ ...err, message: err.message });
    }
};

//DELETE one Lead by ID
module.exports.deleteOneLeadById = (req, res) => {
    Lead.deleteOne({ _id: req.params.id })
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) })
};

//UPDATE one Lead by ID
module.exports.updateOneLeadById = (req, res) => {
    Lead.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedLead => { res.json(updatedLead) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};