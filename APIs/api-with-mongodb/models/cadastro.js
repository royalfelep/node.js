const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: new Date().toLocaleString,
    }
})

module.exports = mongoose.model('Users', UserSchema)