const User = require('../models/user.model');
const bcrypt = require('bcrypt');

//title case for search params involving names - not needed with regex i being case insensitive
// function searchWithTitleCase(string) {
//     return string.replace(
//         /\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         }
//     );
// }

/*           
*********************************************************************
CRUD FUNCTIONALITY ROUTES - CREATE, GET(READ), UPDATE, & DELETE USERS
*********************************************************************
*/

//CREATE User
module.exports.createOneUser = (req, res) => {
    User.create(req.body)
        .then(user => { 

            return res.json(user); 
        })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};
//GET all Users
module.exports.getAllUsers = (req, res) => {
    console.log("Grabbing all Users!");
    User.find().sort({ email: 1 })
        .then(allUsers => { res.json(allUsers) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};
//GET one User by ID
//replaced by query searches
// module.exports.getOneUserById = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneUser => { res.json(oneUser) })
//         .catch(err => { res.status(400).json({ ...err, message: err.message }) });
// }
/* Dynamic query by URL query terms using async/await with try */
module.exports.searchForUsers = async (req, res) => {
    console.log(`Received these search terms ${req.query.first}`);
    try {
        //destruct req.query for readability later
        const queryFirst = req.query.first;
        const queryLast = req.query.last;
        const queryEmail = req.query.email;
        //create empty object to build the query
        const query = {};
        //check which keys were created and add them to the query if exist
        //use RegExp to allow partial search terms
        if (queryFirst) {
            query.firstName = new RegExp(queryFirst, "i");
        }
        if (queryLast) {
            query.lastName = new RegExp(queryLast, "i");
        }
        if (queryEmail) {
            query.email = new RegExp(queryEmail, "i");
        }
        //now perform the query
        const foundUsers = await User.find(query);
        res.json(foundUsers);

    } catch(err) { 
        res.status(400).json({ ...err, message: err.message });
    }
};
//GET one User by First Name
module.exports.getOneUserByFirstName = (req, res) => {
    console.log("first name", req.params.firstName);
    User.findOne({ firstName: req.params.firstName })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};
//GET one User by Last Name
module.exports.getOneUserByLastName = (req, res) => {
    User.findOne({ lastName: req.params.lastName })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};
//GET one User by Email
module.exports.getOneUserByEmail = (req, res) => {
    console.log("email", req.params.email);
    User.findOne({ email: req.params.email })
        .then(oneUser => { res.json(oneUser) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};
//DELETE one User by ID
module.exports.deleteOneUserById = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then(result => { res.json(result) })
    .catch(err => { res.status(400).json({ ...err, message: err.message }) })
};
//UPDATE one User by ID
module.exports.updateOneUserById = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedUser => { res.json(updatedUser) })
    .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

/*           
**********************************************************************
USER SESSION ROUTING - LOGIN AND LOGOUT WITH PW VALIDATION AND SESSION
**********************************************************************
*/

//GET a user by email to try login
module.exports.tryLoginOneUserByEmail = async (req, res) => {
    //destructure the req.body for readability
    const { email, password } = req.body;
    //now try to find user by email
    try {
        const existingUser = await User.findOne({email});
        //if user can't be found by that email, return a 400 error
        if (!existingUser) {
            return res.status(400).json({ ...err, message: err.message });
        }
        //else compare pw
        const isPasswordMatch = await existingUser.comparePassword(password);
        //if don't match, throw 401 error
        if (!isPasswordMatch) {
            return res.status(401).json({ error: "Invalid Login Attempt!" });
        }
        //else, log the user in and store their _id in req.session.userId
        req.session.userId = existingUser._id;
        res.json({ message: `${req.session.userId} You are now logged in!` });
    } catch(err) { 
        res.status(400).json({ error: "Invalid Login Attempt!" });
    }
};
//LOGOUT User and clear session, then redirect to landing page
module.exports.logoutUser = (req, res) => {
    console.log("Destroying Session data. . .");
    req.session.destroy(function(err) {
        err ? console.log(err) : res.json({ message: "Logout successful!"});
    })
}
//Route to tell React if User logged in or not --returns T or F
module.exports.checkUserSession = async (req, res) => {
    //if userId in session, check if we can find a user with it
    console.log(req.session.userId);
    const userId = req.session.userId;
    if (userId) {
        const isUserValid = await User.findOne({_id: userId});
        isUserValid && res.send(true);
    }
    //else false 
    else res.send(false);
}