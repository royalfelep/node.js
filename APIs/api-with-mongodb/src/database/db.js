const mongoose = require('mongoose')
require('dotenv/config')

function db_init() {
    mongoose
        .connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log("Database connected to MongoDB Atlas"))
        .catch(err => console.log(err));
}

module.exports = db_init
