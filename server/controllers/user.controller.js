const User = require('../models/user.model');

/* Mongoose methods to interact with our MongoDB*/

//CREATE User
module.exports.createOneUser = (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then((user) => {return res.json(user);})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET all Users
module.exports.getAllUsers = (req, res) => {
    User.find().sort({email: 1})
        .then((allUsers) => {res.json(allUsers)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET one User by ID
module.exports.getOneUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneUser => {res.json(oneUser)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//DELETE one User by ID
module.exports.deleteOneUserById = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {res.json(result)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})})
}
//UPDATE one User by ID
module.exports.updateOneUserById = (req, res) => {
    User.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
        .then(updatedUser => {res.json(updatedUser)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
