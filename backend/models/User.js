const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    forename: {
        type: String, 
        required: [true, 'Insert First Name']
    }, 
    surname: {
        type: String, 
        required: [true, 'Insert Last Name']
    }, 
    dob: {
        type: Date, 
        required: [true, 'Insert Date of Birth']
    }, 
    address: {
        type: String, 
        required: [true, 'Insert Address']
    }, 
    phone_number: {
        type: Number
    }, 
    type: {
        type: String, 
        required: [true, 'Insert User Type']
    }, 
    speciality: {
        type: String
    }
});

module.exports = mongoose.model("User", UserSchema);