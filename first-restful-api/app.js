// CONSTS
const express = require("express")
const mongoose = require("mongoose");
const app = express()
require('dotenv/config');

// IMPORT ROUTES
const postsRoute = require('./routes/AboutUs');


// MIDDLEWARES
app.use('/AboutUs', postsRoute)


// MongoDB
const clientDB = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(process.env.URI , clientDB, () => console.log('Connected to MongoDB!'))


app.listen(5454)