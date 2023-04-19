import { getAllUsers, createOneUser, getOneUserById, updateOneUserById, deleteOneUserById } from '../controllers/user.controller';
export default function(app) {
    app.get('/api/users', getAllUsers)
    app.post('/api/users', createOneUser)
    app.get('/api/users/:id', getOneUserById)
    app.put('/api/users/:id', updateOneUserById)
    app.delete('/api/users/:id', deleteOneUserById)
}