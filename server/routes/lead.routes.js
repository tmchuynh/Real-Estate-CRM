const LeadController = require('../controllers/lead.controller');
const express = require('express');

module.exports = function leadRoutes (app) {
    //get all leads to populate the leads table
    app.get('/api/leads', LeadController.getAllLeadsByUser);
    //search for a lead - will be enabled with first, last, and email fields as search strings
    app.get('/api/leads/search', LeadController.searchForLeads);
    //Users need to be able to add a Lead
    app.post('/api/leads', LeadController.createOneLead);
    //Allow Leads to up lead data
    app.put('/api/leads/:id', LeadController.updateOneLeadById);
    //DELETE a Lead
    app.delete('/api/leads/:id', LeadController.deleteOneLeadById);
    
    /* 
    ******************************************************************************************
    Saving these for later instead of deleting --Lead sessions are planned for a future update
    ******************************************************************************************   
    */
    //attempt to login a lead by email and password validation usign bcrypt --not needed yet
    // app.post('/api/leads/login', LeadController.tryLoginOneLeadByEmail);
    //logout lead and destroy session data --not needed yet
    // app.post('/api/leads/logout', LeadController.logoutLead);
    //Leads don't have logins yet --not needed
    // app.get('/api/leads/authorization', LeadController.checkLeadSession);
}