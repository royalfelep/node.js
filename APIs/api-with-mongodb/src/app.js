// Imports/Consts
const express = require('express')
const app = express()
const db_init = require('./database/db')

// Configs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
const cadastrosRoute = require('./routes/cadastros')
app.use('/cadastros', cadastrosRoute)

app.use('/', (req, res) => {
    res.send('<h1>Página Principal<h1>')
})

// Database
db_init()

// Start Server
app.listen(process.env.PORT || 3000)