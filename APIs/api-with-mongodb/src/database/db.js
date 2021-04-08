const mongoose = require('mongoose')
require('dotenv/config')

function db_init() {
    mongoose.connect(
        process.env.DB_CONNECT,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('Connected to MongoDB Atlas')
    )
}

module.exports = db_init
