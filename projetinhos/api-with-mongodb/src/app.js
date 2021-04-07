const express = require('express')
const mongoose = require('mongoose')
const app = express()
//'----------------------------------------------'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//'----------------------------------------------'

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(process.env.PORT || 3000)