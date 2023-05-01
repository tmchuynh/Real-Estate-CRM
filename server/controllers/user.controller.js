const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const hashSalt = 10;
const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;
//in-memory JWTs is fine for the scope of this app
const activeTokens = [];
const revokedTokens = [];

//authentication function to be called by others
function authenticateUser(req, res) {
    //if auth header isn't passed or doesn't include the jwt token, early exit
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    //if not early exit, check if token was revoked
    const token = authHeader.substring(7) //start at 7th char because startsWith 'Bearer '
    if (revokedTokens.includes(token)) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    //now we can try to veryify the token and pull out the userId to set it in req
    try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    };
};

//revoke tokens when users logout
function revokeToken(token) {
    revokedTokens.push(token)
}

/*           
*********************************************************************
CRUD FUNCTIONALITY ROUTES - CREATE, GET(READ), UPDATE, & DELETE USERS
*********************************************************************
*/

//CREATE User
module.exports.createOneUser = (req, res) => {
    User.create(req.body)
        .then(user => {
            const jwtToken = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '2h' });
            res.cookie('jwt', jwtToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.send(jwtToken);
        })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

//GET all Users
module.exports.getAllUsers = (req, res) => {
    console.log("Grabbing all Users!");
    User.find().sort({ lastName: 1 })
        .then(allUsers => { res.json(allUsers) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

//GET one User by Id
module.exports.getOneUserById = (req, res) => {
    User.findById({ _id: req.params.id })
        .then(user => { res.json(user) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) });
};

// Dynamic query by URL query terms using async/await with try
module.exports.searchForUsers = async (req, res) => {
    console.log(`Received these search terms ${req.query.first}`);
    try {
        //destruct req.query for readability later
        const { first, last, email } = req.query.first;
        console.log(`Received these search terms ${first}, ${last}, ${email}`);
        //create empty object to build the query
        const query = {};
        //check which keys were created and add them to the query if exist
        //use RegExp to allow partial search terms
        if (first) {
            query.firstName = new RegExp(first, "i");
        }
        if (last) {
            query.lastName = new RegExp(last, "i");
        }
        if (email) {
            query.email = new RegExp(email, "i");
        }
        //now perform the query
        const foundUsers = await User.find(query);
        res.json(foundUsers);

    } catch (error) {
        res.status(400).json({ ...error, message: error.message });
    }
};

//DELETE one User by ID
module.exports.deleteOneUserById = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json({ ...err, message: err.message }) })
};

//UPDATE one User by ID
module.exports.updateOneUserById = async (req, res) => {
    try {
        //check if user exists first
        const user = await User.findById({ _id: req.params.id });
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }

        //hash pw if in body and update req.body with hashed pw
        let newPassword = req.body.password;
        if (newPassword) {
            newPassword = await bcrypt.hash(newPassword, hashSalt);
        }
        const updatedUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ ...error, message: error.message })
    };
};

/*           
**********************************************************************
USER SESSION ROUTING - LOGIN AND LOGOUT WITH PW VALIDATION AND SESSION
**********************************************************************
*/

//GET a User by email to try login
module.exports.tryLoginOneUserByEmail = async (req, res) => {
    //destructure the req.body for readability
    const { email, password } = req.body;
    //now try to find user by email
    try {
        const existingUser = await User.findOne({ email });
        //if user can't be found by that email, return a 400 error
        if (!existingUser) {
            return res.status(400).json({ message: "No user exists for this email. Would you like to register instead?" });
        }
        //else compare pw
        const isPasswordMatch = await existingUser.comparePassword(password);
        //if don't match, throw 401 error
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid Login Attempt!" });
        }
        //else, log the user in and store their _id in req.session.userId
        const userId = existingUser._id.toString();
        req.session.userId = userId;
        const newJsonWebToken = jwt.sign({ userId: userId }, secretKey, { expiresIn: '2h' });
        activeTokens.push({newJsonWebToken: existingUser});
        //creating cookie with React using the passed jwtToken
        // res.cookie('jwt', jwtToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        return res.json({
            user: existingUser,
            jwt: newJsonWebToken
    });
    } catch (err) {
        res.status(400).json({ ...err, message: err.message });
    }
};

//LOGOUT User and revoke JWT, then redirect to landing page (redirect handled by React)
module.exports.logoutUser = (req, res) => {
    console.log("Revoking JWT. . .\n. . . . . . .\n");
    revokedTokens.push(req.session.jwt)
    req.session.destroy(function (err) {
        err ? console.log(err) : res.json({ message: "Logout successful!" });
    })
    console.log(". . . . .\nJWT Revoked!")
}

//Route to tell React if User logged in or not --returns T or F
module.exports.checkUserSession = async (req, res) => {
    //if userId in session, check if we can find a user with it
    console.log(req.session.userId);
    const userId = req.session.userId;
    if (userId) {
        const isUserValid = await User.findOne({ _id: userId });
        isUserValid && res.send(userId);
    }
    //else false 
    else res.send(false);
}