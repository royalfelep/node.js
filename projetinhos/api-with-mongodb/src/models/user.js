const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
})

const user = mongoose.model('User', userSchema)

module.exports = user