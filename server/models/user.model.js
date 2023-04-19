const mongoose = require('mongoose');
require('mongoose-type-email');
//create the User schema with validations
const UserSchema = new mongoose.Schema({
    //mongoose added Email datatype that auto validates using an email regex
    email: {
        type: mongoose.SchemaTypes.Email,
        correctTld: true, //correctTld is stronger email validation
        index: true,
        required: [true, 'Email is required!'],
        minLength: [5, 'Email must be at least 5 characters long!']
    },
    password : {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [8, 'Password must be at least 8 characters.']
    },
    fullName: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    profilePic: {
        //will store as Base64 encoded string
        type: String,
        required: false
    }
}, {timestamps: true});
const User = mongoose.model('User', UserSchema);
module.exports = User;