import User from '../models/user.model.js';

/* Mongoose methods to interact with our MongoDB*/

//CREATE User
export async function createOneUser(req, res) {
    console.log(req.body);
    User.create(req.body)
        .then((user) => {return res.json(user);})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET all Users
export async function getAllUsers(req, res) {
    User.find().sort({email: 1})
        .then((allUsers) => {res.json(allUsers)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//GET one User by ID
export async function getOneUserById(req, res) {
    User.findOne({ _id: req.params.id })
        .then(oneUser => {res.json(oneUser)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
//DELETE one User by ID
export async function deleteOneUserById(req, res) {
    User.deleteOne({ _id: req.params.id })
        .then(result => {res.json(result)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})})
}
//UPDATE one User by ID
export async function updateOneUserById(req, res) {
    User.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true } )
        .then(updatedUser => {res.json(updatedUser)})
        .catch((err) => {res.status(400).json({ ...err, message: err.message})});
}
