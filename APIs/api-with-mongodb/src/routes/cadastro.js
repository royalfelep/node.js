const express = require('express')
const routes = express.Router()

routes.get('/cadastro', (req, res) => {
    res.send('<h1>Página de Cadastro</h1>')
})