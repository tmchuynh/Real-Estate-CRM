const User = require('../models/user.model');
const bcrypt = require('bcrypt');

/* Mongoose methods to interact with our MongoDB*/

//CREATE User
module.exports.createOneUser = (req, res) => {
    User.create(req.body)
        .then(user => { return res.json(user); })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET all Users
module.exports.getAllUsers = (req, res) => {
    User.find().sort({ email: 1 })
        .then(allUsers => { res.json(allUsers) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET one User by ID
module.exports.getOneUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET one User by First Name
module.exports.getOneUserByFirstName = (req, res) => {
    console.log("first name", req.params.firstName);
    User.findOne({ firstName: req.params.firstName })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET one User by Last Name
module.exports.getOneUserByLastName = (req, res) => {
    User.findOne({ lastName: req.params.lastName })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET one User by Email
module.exports.getOneUserByEmail = (req, res) => {
    console.log("email", req.params.email);
    User.findOne({ email: req.params.email })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}
//GET a user by email to try login
module.exports.tryLoginOneUserByEmail = (req, res) => {
    //get the hashed password for the given user by email
    passwordToCheck = User.findOne({ email: req.params.email }, 'password')
        .then(passwordToCheck => {return passwordToCheck})
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
    //hash the newly passed pw
    attemptedPasswordMatch = bcrypt.hash(req.body.password, 10);
    //call bcrypt compare on the found hashed pw and the new hash
    isPasswordValid = (passwordToCheck, attemptedPasswordMatch) => {
        
    }
}
//DELETE one User by ID
module.exports.deleteOneUserById = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) })
}
//UPDATE one User by ID
module.exports.updateOneUserById = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedUser => { res.json(updatedUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
}