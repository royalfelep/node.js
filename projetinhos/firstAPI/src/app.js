const express = require('express')
const app = express()
const products = require('./productsRegister')

app.use(express.urlencoded({ extended: true }))

app.get('/products', (req, res) => {
    res.send(products.getAllProducts())
})

app.get('/products/:id', (req, res) => {
    res.send(products.getProduct(req.params.id))
})

app.post('/products', (req, res) => {
    const product = products.generateProduct({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        value: req.body.value
    })
    res.send(product)
})

app.put('/products/:id', (req, res) => {
    const product = products.updateProduct({
        id: req.params.id,
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        value: req.body.value
    })
    res.send(product)
})

app.delete('/products/:id', (req, res) => {
    const product = products.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(3000, () => {
    console.log('Server running at "3000" port.')
})