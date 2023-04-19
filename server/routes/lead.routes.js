import { getAllLeads, createOneLead, getOneLeadById, updateOneLeadById, deleteOneLeadById } from '../controllers/lead.controller';
export default function(app) {
    app.get('/api/leads', getAllLeads)
    app.post('/api/leads', createOneLead)
    app.get('/api/leads/:id', getOneLeadById)
    app.put('/api/leads/:id', updateOneLeadById)
    app.delete('/api/leads/:id', deleteOneLeadById)
}