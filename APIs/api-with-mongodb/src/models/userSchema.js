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
    number: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model('Users', UserSchema)