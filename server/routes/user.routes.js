const UserController = require('../controllers/user.controller');
const express = require('express');

module.exports = function userRoutes (app) {
    //get all users (probably won't use this)
    app.get('/api/users', UserController.getAllUsers);
    //get one user by ID
    app.get('/api/users/:id', UserController.getOneUserById)
    //search for a user - will be enabled with first, last, and email fields as search strings
    app.get('/api/users/search', UserController.searchForUsers);
    //attempt to login a user by email and password validation usign bcrypt
    app.post('/api/users/login', UserController.tryLoginOneUserByEmail);
    //logout user and destroy session data
    app.post('/api/users/logout', UserController.logoutUser);
    //Route for React to check if a user is logged in --returns T or F
    app.get('/api/users/authorization', UserController.checkUserSession);
    //add a User document when someone successfully registers
    app.post('/api/users', UserController.createOneUser);
    //Allow users to update their information in their profile
    app.put('/api/users/:id', UserController.updateOneUserById);
    //DELETE a User document --this might not be available to front end users
    app.delete('/api/users/:id', UserController.deleteOneUserById);
}