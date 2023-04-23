import { Schema, SchemaTypes, model } from 'mongoose';
import 'mongoose-type-email';
//create the Lead schema with validations
const LeadSchema = new Schema({
    //mongoose added Email datatype that auto validates using an email regex
    email: {
        type: SchemaTypes.Email,
        correctTld: true, //correctTld is stronger email validation
        index: true,
        required: [true, 'Email is required!'],
        minLength: [5, 'Email must be at least {MINLENGTH} characters long!']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone Number is required!'],
        minLength: [10, "Phone Number must be at exactly {MINLENGTH} characters. Don't include '-' or spaces."],
        maxLength: [10, "Phone Number must be at exactly {MINLENGTH} characters. Don't include '-' or spaces."]
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required.'],
        minLength: [1, "First Name must be at least {MINLENGTH} characters"],
        maxLength: [256, "Why is your name longer than {MAXLENGTH} characters?"],
        index: true
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.'],
        minLength: [1, "Last Name must be at least {MINLENGTH} characters"],
        maxLength: [256, "Why is your name longer than {MAXLENGTH} characters?"],
        index: true
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
}, {timestamps: true});
const Lead = mongoose.model('Lead', LeadSchema);
module.exports = Lead;