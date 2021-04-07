const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cadastroRoute = require('./routes/cadastro')

//'----------------------------------------------'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//'----------------------------------------------'

app.use('/cadastro', cadastroRoute)

app.listen(process.env.PORT || 3000)