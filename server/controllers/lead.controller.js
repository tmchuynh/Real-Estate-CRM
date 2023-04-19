const Lead = require('../models/lead.model').default;

/* Mongoose methods to interact with our MongoDB*/

//CREATE Lead
module.exports.createOneLead = (req, res) => {
    console.log(req.body);
    Lead.create(req.body)
        .then((lead) => {return res.json(lead);})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET all Leads
module.exports.getAllLeads = (req, res) => {
    Lead.find().sort({email: 1})
        .then((allLeads) => {res.json(allLeads)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET one Lead by ID
module.exports.getOneLeadById = (req, res) => {
    Lead.findOne({ _id: req.params.id })
        .then(oneLead => {res.json(oneLead)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//DELETE one Lead by ID
module.exports.deleteOneLeadById = (req, res) => {
    Lead.deleteOne({ _id: req.params.id })
        .then(result => {res.json(result)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})})
}
//UPDATE one Lead by ID
module.exports.updateOneLeadById = (req, res) => {
    Lead.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
        .then(updatedLead => {res.json(updatedLead)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
