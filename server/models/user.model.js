const mongoose = require('mongoose');
const Email = require('mongoose-type-email');
const bcrypt = require('bcrypt');
const hashSalt = 10;

const UserSchema = new mongoose.Schema({
    //mongoose added Email datatype that auto validates using an email regex
    email: {
        type: Email,
        correctTld: true, //correctTld is stronger email validation
        index: true,
        required: [true, 'Please enter a valid email address'],
        minLength: [5, 'Email must be at least {MINLENGTH} characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [8, 'Password must be at least {MINLENGTH} characters.']
    },
    firstName: {
        type: String,
        required: [true, "First Name is Required!"],
        index: true
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"],
        index: true
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
}, { timestamps: true });

// validation for password on registration
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

//using bcrypt to hash passwords before saving a User Document
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, hashSalt)
        .then(hash => {
            this.password = hash;
            next();
        });
});

//create a method to compare for user login attemps
UserSchema.methods.comparePassword = async function (plainTextPassword) {
    return await bcrypt.compare(plainTextPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;