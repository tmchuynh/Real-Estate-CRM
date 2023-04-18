const LeadController = require('../controllers/lead.controller');
module.exports = function(app) {
    app.get('/api/leads', LeadController.getAllLeads)
    app.post('/api/leads', LeadController.createOneLead)
    app.get('/api/leads/:id', LeadController.getOneLeadById)
    app.put('/api/leads/:id', LeadController.updateOneLeadById)
    app.delete('/api/leads/:id', LeadController.deleteOneLeadById)
}