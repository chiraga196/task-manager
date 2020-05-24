const mongoose = require('mongoose')
const validator = require('validator')
const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    emai: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = UserSchema