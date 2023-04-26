const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app.get('/api/users', UserController.getAllUsers)
    app.get('/api/users/first/:firstName', UserController.getOneUserByFirstName)
    app.get('/api/users/last/:lastName', UserController.getOneUserByLastName)
    app.get('/api/users/email/:email', UserController.getOneUserByEmail)
    app.post('/api/users/login/:email', UserController.tryLoginOneUserByEmail)
    app.post('/api/users', UserController.createOneUser)
    app.get('/api/users/id/:id', UserController.getOneUserById)
    app.put('/api/users/:id', UserController.updateOneUserById)
    app.delete('/api/users/:id', UserController.deleteOneUserById)
}