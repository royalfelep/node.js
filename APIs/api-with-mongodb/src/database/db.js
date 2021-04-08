const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB Cloud')
})

module.exports = mongoose