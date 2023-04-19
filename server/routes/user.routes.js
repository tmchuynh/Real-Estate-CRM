const UserController = require('../controllers/user.controller');
module.exports = function(app) {
    app.get('/api/users', UserController.getAllUsers)
    app.post('/api/users', UserController.createOneUser)
    app.get('/api/users/:id', UserController.getOneUserById)
    app.put('/api/users/:id', UserController.updateOneUserById)
    app.delete('/api/users/:id', UserController.deleteOneUserById)
}