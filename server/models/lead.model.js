const mongoose = require('mongoose');
const Email = require('mongoose-type-email');
const bcrypt = require('bcrypt');

const EventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true,
        minLength: [3, "Event Name must be at least 3 characters long!"]
    },
    eventDescription: {
        type: String,
        required: true,
        minLength: [5, "Come on, put at least {MINLENGTH} characters for a description!"]
    }
}, { timestamps: true });

const LeadSchema = new mongoose.Schema({
    //mongoose added Email datatype that auto validates using an email regex
    email: {
        type: Email,
        correctTld: true, //correctTld is stronger email validation
        index: true,
        required: [true, "Please enter a valid email address"],
        minLength: [5, `Email must be at least {MINLENGTH} characters long!`]
    },
    // password: {
    //     type: String,
    //     required: [true, 'Password is required!'],
    //     minLength: [8, 'Password must be at least 8 characters.']
    // },
    phoneNumber: {
        type: String,
        required: [true, 'Phone Number is required!'],
        minLength: [10, `Phone Number must be exactly {MINLENGTH} characters. Don't include '-' or spaces.`],
        maxLength: [10, `Phone Number must be exactly {MAXLENGTH} characters. Don't include '-' or spaces.`]
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required.'],
        minLength: [1, `First Name must be at least {MINLENGTH} characters`],
        maxLength: [256, `Why is your name longer than {MAXLENGTH} characters?`],
        index: true
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.'],
        minLength: [1, `Last Name must be at least {MINLENGTH} characters`],
        maxLength: [256, `Why is your name longer than {MAXLENGTH} characters?`],
        index: true
    },
    status: {
        type: String,
        required: false
    },
    isBuying: {
        type: Boolean,
        required: true,
        index: true
    },
    isSelling: {
        type: Boolean,
        required: true,
        index: true
    },
    marketArea: {
        type: String,
        required: false
    },
    agent: {
        type: String,
        required: true
    },
    timelineEvents: {
        type: EventSchema
    }
}, { timestamps: true });

// validation for password on registration
LeadSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

LeadSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

//No Login for Lead yet --planned for future update

// //using bcrypt to hash passwords
// LeadSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 10)
//         .then(hash => {
//             this.password = hash;
//             next();
//         });
// });

// //create a method to compare for user login attemps
// LeadSchema.methods.comparePassword = async function (plainTextPassword) {
//     return await bcrypt.compare(plainTextPassword, this.password);
// };



const Lead = mongoose.model('Lead', LeadSchema);
module.exports = Lead;